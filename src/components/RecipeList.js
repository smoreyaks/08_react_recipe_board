// Elements
import { Link } from 'react-router-dom'

// Hooks
import { useTheme } from '../hooks/useTheme';

// Styles
import './RecipeList.css'


export default function RecipeList({ recipes }) {
    const { mode } = useTheme();

    
    if (recipes.length === 0) {
        return <div className='error'>No Recipes Found</div>
    }

    return (
        <div className="recipe-list">
            { recipes.map(recipe => (
                <div key={ recipe.id } className={`card ${ mode }`}>
                    <h3>{ recipe.title }</h3>
                    <p>{ recipe.cookingTime } to make.</p>
                    <div>{ recipe.method.substring(0, 100) }...</div>
                    <Link to={`/recipes/${recipe.id}`}>Cook This</Link>
                </div>
            ))}
        </div>
    )
}

