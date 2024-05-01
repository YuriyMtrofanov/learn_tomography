import React from "react";
import PropTypes from "prop-types";
import "./button.css";

const Button = ({ className, type, onClick, children }) => {
    const handleAction = () => {
        onClick && onClick();
    };
    return (
        <button
            type={type}
            className={className}
            onClick={handleAction}
        >
            {children}
        </button>
    );
};

Button.propTypes = {
    className: PropTypes.string,
    type: PropTypes.string,
    label: PropTypes.string,
    onClick: PropTypes.func,
    children: PropTypes.node
};

export default Button;
