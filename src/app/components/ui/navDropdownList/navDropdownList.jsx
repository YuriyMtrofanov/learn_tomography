import React from "react";
import PropTypes from "prop-types";
import "./navDropdownList.css";
import { NavLink } from "react-router-dom";

const NavDropdownList = ({ active, options, userId }) => {
    // console.log("active", active);
    // console.log("userId", userId);
    return (
        <div className="nav-dropdown">
            <div className="nav-dropdown__container">
                {options.length > 0 && userId &&
                    options.map(item => (
                        <NavLink
                            key={item.name}
                            className="nav-dropdown__item"
                            to={`${item.path}/${userId}`}
                        >
                            {item.value}
                        </NavLink>
                    ))
                }
                {/* <ul className={"nav-dropdown__list" + (active ? " show" : "")}>
                    {options.length > 0 && userId &&
                        options.map(item => (
                            <NavLink
                                key={item.name}
                                className="nav-dropdown__item"
                                to={`${item.path}/${userId}`}
                            >
                                {item.value}
                            </NavLink>
                        ))
                    }
                </ul> */}
            </div>
        </div>
    );
};

NavDropdownList.propTypes = {
    active: PropTypes.bool,
    options: PropTypes.arrayOf(PropTypes.object),
    userId: PropTypes.string
};

export default NavDropdownList;
