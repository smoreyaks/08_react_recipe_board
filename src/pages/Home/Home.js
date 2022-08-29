// Firebase
import { projectFirestore } from '../../firebase/config'

// Hooks
import { useEffect, useState } from 'react'

// Styles 
import './Home.css'

// Components
import RecipeList from '../../components/RecipeList'



export default function Home() {
  const [data, setData] = useState(null)
  const [isPending, setIsPending] = useState(false)
  const [error, setError] = useState(false)

  useEffect(() => {
    setIsPending(true)

    projectFirestore.collection('recipes').get().then((snapshot) => {
      if (snapshot.empty){
        setError('No recipes to load');
      } 
      else {
        let results = [];
        snapshot.docs.forEach(doc => {
          results.push({ id: doc.id, ...doc.data() })
        })
        setData(results)
        setIsPending(false)
      }
    }).catch(err => {
      setError(err.message)
      setIsPending(false)
    })

  }, [])  // End of useEffect

  return (
    <div className="home">
      { error && <p className="error">{ error }</p> }
      { isPending && <p className="loading">Loading...</p> }
      { data && <RecipeList recipes={ data } /> }
    </div>
  )
}
