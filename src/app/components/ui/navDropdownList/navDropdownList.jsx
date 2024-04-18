import React, { useState } from "react";
import PropTypes from "prop-types";
import "./navDropdownList.css";

const [active, setActive] = useState(false);
const handleActive = () => {
    setActive(prevState => !prevState);
};

const NavDropdownList = ({ active }) => {
    return (
        <div className="nav-dropdown">
            <div className="nav-dropdown__container">
                <div className={"nav-dropdown__list"  + (active ? " show" : "")}>

                </div>
            </div>
        </div>
    );
};

NavDropdownList.propTypes = {
    active: PropTypes.bool
};

export default NavDropdownList;
