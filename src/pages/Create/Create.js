// Hooks
import { useState, useRef, useEffect } from 'react'
import { useFetch } from '../../hooks/useFetch'
import { useTheme } from '../../hooks/useTheme';
import { useHistory } from 'react-router-dom';

// Firebase
import { projectFirestore } from '../../firebase/config';

// Styles
import "./Create.css"

export default function Create() {
  
  // State
  const [title, setTitle] = useState('');
  const [method, setMethod] = useState('');
  const [cookingTime, setCookingTime] = useState('');
  const [newIngredient, setNewIngredient] = useState('');
  const [ingredients, setIngredients] = useState([]);
  
  const ingredientInput = useRef(null)
  
  //  Fetch Data
  
  
  // Theme Context
  const { color } = useTheme();
  const { mode } = useTheme();

  // Submit Function
  const handleSubmit = async (e) => {
    e.preventDefault()
    const doc = { title, ingredients, method, cookingTime: cookingTime + ' minutes'}
    try {
      await projectFirestore.collection('recipes').add(doc)
      history.push('/');
    }
    catch(err) {
      console.log(err)
    }
  }

  // Redirect to Home Page after POST request when get a data response
  const history = useHistory();     // For redirect

  


  
  const handleAdd = (e) => {
    e.preventDefault()
      const ing = newIngredient.trim();
      if (ing && !ingredients.includes(ing)) {
        setIngredients(prevIngredients => [...prevIngredients, ing])
      }
      setNewIngredient('')
      ingredientInput.current.focus()
  }

  return (
    <div className={`create ${mode}`}>
      <h2 className="page-title">Add A New Recipe</h2>
      <form onSubmit={ handleSubmit }>
        
        {/* RECIPE TITLE INPUT */}
        <label>
          <span>
            <h3>
              Recipe Title:
            </h3>
          </span>
          <input 
              type="text"
              onChange={ (e) => setTitle(e.target.value) }
              value={ title }
              required
              />
        </label>
        
        {/* RECIPE INGREDIENTS INPUT */}
        <label>
          <span>
            <h3>
              Recipe Ingredients:
            </h3>
          </span>
          <div className="ingredients">
            <input 
            type="text"
            onChange={(e) => setNewIngredient(e.target.value)}
            value={newIngredient}
            ref={ingredientInput}
            />
            <button className="btn" onClick={ handleAdd } style={{background: color}}>Add</button>
          </div>
        </label>
        

        {/* RECIPE INGREDIENTS QUICK LIST INPUT */}
        <p>Current Ingredients: { ingredients.map( i => <em key={i}>{i}, </em> )}</p>

        {/* RECIPE METHOD INPUT */}
        <label>
          <span>
            <h3>
              Recipe Method:
            </h3>
          </span>
          <textarea 
              onChange={(e) => setMethod(e.target.value) }
              value={method}
              required
          />
        </label>

        {/* RECIPE COOKING TIME */}
        <label>
          <span>
            <h3>
              Cooking Time (mins):
            </h3>
          </span>
          <input type="number" 
          onChange={(e) => setCookingTime(e.target.value)}
          value={cookingTime}
          required
          />
        </label>
        <button className="button" style={{background: color}}>Submit</button>

      </form>
    </div>
  )
}
