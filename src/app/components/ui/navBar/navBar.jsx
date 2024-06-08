import React from "react";
import { NavLink } from "react-router-dom";
import "./navBar.css";
import NavProfile from "../navProfile/navProfile";
import { useSelector } from "react-redux";
import { getIsLoggedIn, getUserAccountType } from "../../../store/users";

const NavBar = () => {
    const isLoggedIn = useSelector(getIsLoggedIn());
    const isAdmin = useSelector(getUserAccountType());

    return (
        <nav className="nav">
            <div className="nav__wrapper">
                <div className="nav__content">
                    <ul className="nav__block">
                        <li className="logo">Logo</li>
                        {/* <NavLink className="nav__link" to="/">Main</NavLink> */}
                        <NavLink className="nav__link" to="/learn">Learn</NavLink>
                        {/* <NavLink className="nav__link" to="/tests">Tests</NavLink> */}
                        {isAdmin === "admin" && (
                            <NavLink className="nav__link" to="/admin">Admin</NavLink>
                        )}
                    </ul>
                    <ul className="nav__login">
                        {isLoggedIn
                            ? (<NavProfile/>)
                            : (<NavLink className="nav__link login" to="/login">Login</NavLink>)
                        }
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
