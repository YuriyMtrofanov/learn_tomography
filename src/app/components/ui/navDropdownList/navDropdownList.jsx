import React from "react";
import PropTypes from "prop-types";
import "./navDropdownList.css";

const NavDropdownList = ({ active }) => {
    console.log("active", active);
    return (
        <div className="nav-dropdown">
            <div className="nav-dropdown__container">
                <div className={"nav-dropdown__list" + (active ? " show" : "")}>
                    {/* <ul>
                        <li>1 link</li>
                        <li>2 link</li>
                        <li>3 link</li>
                    </ul> */}
                </div>
            </div>
        </div>
    );
};

NavDropdownList.propTypes = {
    active: PropTypes.bool
};

export default NavDropdownList;
