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
    const unsubscribe = projectFirestore.collection('recipes').onSnapshot((snapshot) => {
      
      // Return error message if collection is empty
      if (snapshot.empty){
        setError('No recipes to load');
        setIsPending(false);
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
    }, (err) => {
      setError(err.message)
      setIsPending(false)
    })

    return () => {
      unsubscribe()
    }
  }, [])  // End of useEffect

  return (
    <div className="home">
      { error && <p className="error">{ error }</p> }
      { isPending && <p className="loading">Loading...</p> }
      { data && <RecipeList recipes={ data } /> }
    </div>
  )
}
