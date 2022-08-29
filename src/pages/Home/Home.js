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

    // Fetch a collection from Firestore
    projectFirestore.collection('recipes').get().then((snapshot) => {
      
      // Return error message if collection is empty
      if (snapshot.empty){
        setError('No recipes to load');
      } 
      // Get the snapshot id & data
      else {
        let results = [];
        snapshot.docs.forEach(doc => {
          results.push({ id: doc.id, ...doc.data() })
        })
        // Update state of isPending and Data
        setData(results)
        setIsPending(false)
      }
      
    // Catch block
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
