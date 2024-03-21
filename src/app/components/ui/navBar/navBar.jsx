import React from "react";
import "./navBar.css";

const NavBar = () => {
    return (
        <nav className="nav">
            <div className="nav__wrapper">
                <div className="nav__content">
                    <ul className="nav__block">
                        <li className="logo">Logo</li>
                        <li className="nav__link">Main</li>
                        <li className="nav__link">Learn</li>
                        <li className="nav__link">Tests</li>
                    </ul>
                    <ul className="nav__login">
                        <li className="nav__link login">Login</li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
