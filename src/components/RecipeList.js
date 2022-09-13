// Firebase
import { projectFirestore } from '../firebase/config';
// Elements
import { Link } from 'react-router-dom'

// SVG
import trashCan from'../assets/trash-can-delete-icon.svg'

// Hooks
import { useTheme } from '../hooks/useTheme';

// Styles
import './RecipeList.css'


export default function RecipeList({ recipes }) {
    const { mode } = useTheme();

    
    if (recipes.length === 0) {
        return <div className='error'>No Recipes Found</div>
    }
    
    // Click Event Handler Function
    const handleClick = (id) => {
        projectFirestore.collection('recipes').doc(id).delete()
    }

    return (
        <div className="recipe-list">
            { recipes.map(recipe => (
                <div key={ recipe.id } className={`card ${ mode }`}>
                    <h3>{ recipe.title }</h3>
                    <p>{ recipe.cookingTime } to make.</p>
                    <div>{ recipe.method.substring(0, 75) }...</div>
                    <Link to={`/recipes/${recipe.id}`}>Cook This</Link>
                    <img 
                        src={trashCan}
                        className="delete"
                        onClick={() => handleClick(recipe.id)}
                        alt="Delete Recipe" 
                    />
                </div>
            ))}
        </div>
    )
}

