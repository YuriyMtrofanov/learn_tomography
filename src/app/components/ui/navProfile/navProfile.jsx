import React, { useState } from "react";
import { useSelector } from "react-redux";
import NavDropdownList from "../navDropdownList";
import "./navProfile.css";
import { getCurrentUser } from "../../../store/users";
import { NavLink } from "react-router-dom";

const NavProfile = () => {
    const options = [
        { name: "users", value: "Профиль", path: "/users" },
        { name: "logout", value: "Выйти", path: "/logout" }
    ];
    const currentUser = useSelector(getCurrentUser());
    const [active, setActive] = useState(false);
    const handleActive = () => {
        setActive(prevState => !prevState);
    };
    return (
        <div
            className="nav-profile"
            onClick={handleActive}
        >
            {currentUser
                ? (
                    <div className="nav-profile__container">
                        <div className="nav-profile__photo">
                            <img
                                className="nav-profile__image"
                                src={currentUser.img}
                            />
                        </div>
                        <div className="nav-profile__label">
                            {`${currentUser.firstName} ${currentUser.lastName}`}
                        </div>
                        <NavDropdownList
                            active={active}
                            options={options}
                            userId={currentUser.id}
                        />
                    </div>
                )
                : (<NavLink className="nav__link login" to="/login">Login</NavLink>)
            }
        </div>
    );
};

export default NavProfile;
