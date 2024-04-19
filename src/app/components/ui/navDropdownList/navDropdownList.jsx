import React from "react";
import PropTypes from "prop-types";
import "./navDropdownList.css";

const NavDropdownList = ({ active }) => {
    console.log("active", active);
    return (
        <div className="nav-dropdown">
            <div className="nav-dropdown__container">
                <ul className={"nav-dropdown__list" + (active ? " show" : "")}>
                    <li className="nav-dropdown__item">1 link</li>
                    <li className="nav-dropdown__item">2 link</li>
                    <li className="nav-dropdown__item">3 link</li>
                </ul>
            </div>
        </div>
    );
};

NavDropdownList.propTypes = {
    active: PropTypes.bool
};

export default NavDropdownList;
