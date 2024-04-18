import React from "react";
import { NavLink } from "react-router-dom";
import "./navBar.css";

const NavBar = () => {
    const isAdmin = true;
    // const isLoggedIn = true;

    return (
        <nav className="nav">
            <div className="nav__wrapper">
                <div className="nav__content">
                    <ul className="nav__block">
                        <li className="logo">Logo</li>
                        <NavLink className="nav__link" to="/">Main</NavLink>
                        <NavLink className="nav__link" to="/learn">Learn</NavLink>
                        <NavLink className="nav__link" to="/tests">Tests</NavLink>
                        {isAdmin && (
                            <NavLink className="nav__link" to="/admin">Admin</NavLink>
                        )}
                    </ul>
                    <ul className="nav__login">
                        <NavLink className="nav__link login" to="/login">Login</NavLink>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
