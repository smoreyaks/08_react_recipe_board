import { useState } from 'react'
import { useRef } from 'react'
// Styles
import "./Create.css"

export default function Create() {
  const [title, setTitle] = useState('');
  const [method, setMethod] = useState('');
  const [cookingTime, setCookingTime] = useState('');
  const [newIngredient, setNewIngredient] = useState('');
  const [ingredients, setIngredients] = useState([]);
  const ingredientInput = useRef(null)



  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(title, method, cookingTime, ingredients)
  }

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
    <div className='create'>
      <h2 className="page-title">Add A New Recipe</h2>
      <form onSubmit={ handleSubmit }>
        

        
        {/* */}
        <label>
          <span>Recipe Title:</span>
          <input 
              type="text"
              onChange={ (e) => setTitle(e.target.value) }
              value={ title }
              required
              />
        </label>
        
        <label>
          <span>Recipe Ingredients:</span>
          <div className="ingredients">
            <input 
            type="text"
            onChange={(e) => setNewIngredient(e.target.value)}
            value={newIngredient}
            ref={ingredientInput}
            />
            <button className="btn" onClick={ handleAdd }>Add</button>
          </div>
        </label>
        

        <p>Current Ingredients: { ingredients.map( i => <em key={i}>{i}, </em> )}</p>

        <label>
          <span>Recipe Method:</span>
            <textarea 
              onChange={(e) => setMethod(e.target.value) }
              value={method}
              required
            />
        </label>
        {/**/}
        <label>
          <span>Cooking Time (mins):</span>
          <input type="number" 
          onChange={(e) => setCookingTime(e.target.value)}
          value={cookingTime}
          required
          />
        </label>
        <button className="button">Submit</button>

      </form>
    </div>
  )
}
