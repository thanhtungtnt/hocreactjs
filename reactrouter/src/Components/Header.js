import React, { Component } from 'react';
import {BrowserRouter as Router, 
    Switch,
    Route,
    Link,
    NavLink
} from 'react-router-dom'
import About from 'About.js';
import Users from 'Users.js';
import Home from 'Home.js';
class Header extends Component {
    render() {
        return (
            <Router>
                <div>
                <nav>
                    <ul>
                    <li>
                        <NavLink activeClassName="chon" to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName="chon" to="/about">About</NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName="chon" to="/users">Users</NavLink>
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

export default Header;
