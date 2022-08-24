import { Link } from 'react-router-dom'

// Hooks
import { useContext } from 'react'

// Components
import Searchbar from './Searchbar'

// Context
import { ThemeContext } from '../context/ThemeContext'

// Styles
import './Navbar.css'




export default function Navbar() {
  const { color } = useContext(ThemeContext)

  return (
    <div className="navbar" style={ {background: color } }>
        <nav>
          <Link to="/" className="brand">
              <h1>Cooking Ninja</h1>
          </Link>
          <Searchbar />
          <Link to="/create">Create Recipe</Link>
        </nav>
    </div>
  )
}
