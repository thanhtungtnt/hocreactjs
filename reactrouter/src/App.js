import React, { Component } from 'react';
import {BrowserRouter as Router, 
        Switch,
        Route,
        Link,
        NavLink
} from 'react-router-dom';
import About from './Components/About.js';
import Users from './Components/Users.js';
import Home from './Components/Home.js';
class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/about">About</NavLink>
              </li>
              <li>
                <NavLink to="/users">Users</NavLink>
              </li>
            </ul>
          </nav>

          <Switch>
            <Route path="/users">
              <Users />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;