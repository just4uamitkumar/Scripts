import React from 'react';
import NavBar from './NavBar'
import { BrowserRouter as Router, Switch,  Route,  NavLink} from "react-router-dom";

const Header = () => {
    const logo = 'Learn Script'
    return(
        <header>
            <div className="logo">
                <NavLink to="/">{logo}</NavLink>
            </div>
            <NavBar/>
        </header>
    )
}

export default Header