import React from 'react'
import {render} from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  NavLink
} from 'react-router-dom'

import App from './components/App';
import UserList from './components/UserList';
import About from './components/About';
import registerServiceWorker from './components/registerServiceWorker';
import Logo from './static/logo.png'
render(
  <Router>
    <div>
      <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top mb">
        <NavLink className="navbar-brand" to="/"> <img src={Logo} alt="React Router v4" /> </NavLink>

        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#TopNavbar" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="TopNavbar">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <NavLink className="nav-link" to="/userlist">Get User</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/about">About</NavLink>
            </li>           
          </ul>
        </div>
      </nav>

      <Route exact path="/" component={App}/>
      <Route path="/userlist" component={UserList}/>
      <Route path="/about" component={About}/>
    </div>
  </Router>,

document.getElementById('root'))

registerServiceWorker()
