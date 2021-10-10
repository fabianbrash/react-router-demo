import React from 'react'
import { Link, BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Home';
import Cart from './Cart';

const NavBar = () => {
    return (
    <Router>
        <div>
            <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/Cart">Cart</Link>
                </li>
            </ul>
            </nav>
        
        <Switch>
            <Route path="/Cart">
                <Cart />
            </Route>
            <Route path="/">
                <Home />
            </Route>
        </Switch>
        </div>
    </Router>
    )
}

export default NavBar
