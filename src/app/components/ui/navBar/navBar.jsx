import React from "react";
import "./navBar.css";

const NavBar = () => {
    return (
        <nav class="nav">
            <div class="nav__wrapper">
                <div class="nav__content">
                    <ul class="nav__block">
                        <li class="logo">Logo</li>
                        <li class="nav__link">Main</li>
                        <li class="nav__link">Learn</li>
                        <li class="nav__link">Tests</li>
                    </ul>
                    <ul class="nav__login">
                        <li class="nav__link login">Login</li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
