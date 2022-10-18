import React from 'react';
import { BrowserRouter as Router, Switch, Route, NavLink } from "react-router-dom";
import Introvert from '../Introvert';
import Extrovert from '../Extrovert';
import Common from '../Common-Ground';

function Header() {
    return (
    <Router>
        <header>
        <h1>Introverts and Extroverts</h1>
        <nav>
            <ul>
                <li className="mx-2">
                    <NavLink to="/introvert-webpage" className="style-nav" activeClassName="style-nav-active">
                        Introvert
                    </NavLink>
                </li> 
                <li className="mx-2">
                    <NavLink to="/extrovert" className="ext-nav" activeClassName="ext-nav-active">
                        Extrovert
                    </NavLink>
                </li>
                <li className="mx-2">
                    <NavLink to="/common" className="com-nave" activeClassName="con-nav-active">
                        Common
                    </NavLink>
                </li>
            </ul>
        </nav>
    </header>
    <Switch>
        <Route path="/introvert-webpage">
            <Introvert></Introvert>
        </Route>

        <Route path="/extrovert">
            <Extrovert></Extrovert>
        </Route>

        <Route path="/common">
            <Common></Common>
        </Route>
    </Switch>
    </Router>
    )
}

export default Header;
