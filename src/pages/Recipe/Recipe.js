// Firestore
import { projectFirestore } from '../../firebase/config'

// Hooks
import { useParams } from 'react-router-dom'
import { useTheme } from '../../hooks/useTheme'
import { useEffect, useState } from 'react'

// Styles
import './Recipe.css'

export default function Recipe() {
  
  // State
  const [recipe, setRecipe] = useState(null)
  const [isPending, setIsPending] = useState(false)
  const [error, setError] = useState(null)
  const [updateTitle, setUpdateTitle] = useState('')
  //
  const { id } = useParams()
  
  // Theme
  const { mode } = useTheme()
  
  
  useEffect(() => {
    setIsPending(true)
    
    // Retrieve document from Firestore
    const unsubscribe = projectFirestore.collection('recipes').doc(id).onSnapshot((doc) => {
      // If document exists, get data
      if (doc.exists) {
        setIsPending(false)
        setRecipe(doc.data())
      }
      // Otherwise display error message
      else {
        setIsPending(false)
        setError('Recipe not found 😞')
      }
    })

    return () => unsubscribe()
    
  }, [id])
  
  // Document Data Update Click Handler
  const handleClick = (e) => {
    e.preventDefault()
    projectFirestore.collection('recipes').doc(id).update({
      title: updateTitle,
    })
  }

  return (
    <div className={`recipe ${ mode }`}>
      { error && <p className="error">{error}</p> }
      { isPending && <p className="loading">Loading...</p> }
      { recipe && (
        <>
          <h2 className="page-title">{recipe.title}</h2>
          <p>Takes { recipe.cookingTime } to cook.</p>
          <ul>
            { recipe.ingredients.map(ing => <li key={ ing }>{ ing }</li>)}
          </ul>
          <p className="method">{ recipe.method }</p>
          <form>
            
              <input 
                type="text"
                onChange={(e) => setUpdateTitle(e.target.value)}
                value={updateTitle}
                placeholder="New Title"
              />
              <button
                type="submit"
                className="btn"
                onClick={handleClick}
              >
                Update
              </button>
            
          </form>
        </>
      )}
    </div>
  )
}