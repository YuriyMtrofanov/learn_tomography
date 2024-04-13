import React from "react";
import PropTypes from "prop-types";
import "./textField.css";

const TextField = ({ name, label, description, placeholder, onChange }) => {
    const handleChange = ({ target }) => {
        onChange({
            name: target.name,
            value: target.value
        });
    };
    return (
        <div className="text-field">
            <div className="text-field__container">
                <label
                    className="text-field__label"
                    htmlFor={name}
                >
                    {label}
                </label>
                <input
                    id={name}
                    name={name}
                    type="text"
                    className="text-field__input"
                    placeholder={placeholder}
                    onChange={handleChange}
                    aria-describedby="help"
                />
                <div className="text-field__description">{description}</div>
            </div>
        </div>
    );
};

TextField.propTypes = {
    name: PropTypes.string,
    label: PropTypes.string,
    description: PropTypes.string,
    placeholder: PropTypes.string,
    onChange: PropTypes.func
};

export default TextField;
