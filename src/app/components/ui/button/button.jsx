import React from "react";
import PropTypes from "prop-types";
import "./button.css";

const Button = ({ className, type, label }) => {
    return (
        <button
            type={type}
            className={className}
        >{label}</button>
    );
};

Button.propTypes = {
    className: PropTypes.string,
    type: PropTypes.string,
    label: PropTypes.string
};

export default Button;
