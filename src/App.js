// Elements
import { BrowserRouter, Switch, Route } from 'react-router-dom'

// Page Components
import Navbar from './components/Navbar'
import Home from './pages/Home/Home'
import Create from './pages/Create/Create'
import Search from './pages/Search/Search'
import Recipe from './pages/Recipe/Recipe'
import ThemeSelector from './components/ThemeSelector'

// Hooks
import { useTheme } from './hooks/useTheme'

// Styles
import './App.css'


function App() {
const { mode } = useTheme()

  return (
    <div className={`App ${mode}`}>
      <BrowserRouter>
        <Navbar />
        <ThemeSelector />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/create">
            <Create/>
          </Route>
          <Route exact path="/search">
            <Search />
          </Route>
          <Route exact path="/recipes/:id">
            <Recipe />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App
