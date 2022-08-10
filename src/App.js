import { BrowserRouter, Switch, Route } from 'react-router-dom'

// Page Components
import Home from './pages/Home/Home'
import Create from './pages/Create/Create'
import Search from './pages/Search/Search'
import Recipe from './pages/Recipe/Recipe'



import './App.css'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
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
