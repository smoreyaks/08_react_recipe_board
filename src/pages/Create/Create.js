import { useState } from 'react'

// Styles
import "./Create.css"

export default function Create() {
  const [title, setTitle] = useState('');
  const [method, setMethod] = useState('');
  const [cookingTime, setCookingTime] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(title, method, cookingTime)
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
        
        {/* Ingredients go here */}
        
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
