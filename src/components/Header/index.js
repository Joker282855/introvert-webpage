import React from 'react';
import { BroswerRouter as Router, Switch, Route, NavLink } from "react-router-dom";
import Introvert from '../Introvert';
import Extrovert from '../Extrovert';
import Common from '../Common-Ground';

function Header() {
    return (
    <header>
        <h1>Introverts and Extroverts</h1>
        <nav>
            <ul>
                <li className="mx-2">
                    Introvert
                </li> 
                <li className="mx-2">
                    Extrovert
                </li>
                <li className="mx-2">
                    Common
                </li>
            </ul>
        </nav>
    </header>
    )
}

export default Header;
