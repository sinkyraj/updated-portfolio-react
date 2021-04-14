
import './App.css'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import Home from './pages/Home'
import Portfolio from './pages/Portfolio'
import Contact from './pages/Contact'
import Navbar from './components/Navbar'


function App() {
  return (
    <>
    {/* <h1>This is app.js</h1> */}
      <Router>
        <div>
          <Navbar />
          {/* <div>
            <Link to='/'>home</Link>
            <Link to='/login'>login</Link>
            <Link to='/profile'>profile</Link>
          </div> */}
          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route path='/portfolio'>
              <Portfolio />
            </Route>
            <Route path='/contact'>
              <Contact />
            </Route>
          </Switch>
        </div>
      </Router>
     
      
    </>
  
  )
}

export default App;
