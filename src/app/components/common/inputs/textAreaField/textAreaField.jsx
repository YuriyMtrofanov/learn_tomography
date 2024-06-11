import React from "react";
import PropTypes from "prop-types";
import "./textAreaField.css";

const TextAreaField = ({ name, label, value, type, placeholder, onChange }) => {
    const handleChange = ({ target }) => {
        onChange({
            name: target.name,
            value: target.value
        });
    };
    return (
        <div className="text-area">
            <div className="text-area__container">
                <label
                    className="text-area__label"
                    htmlFor={name}
                >
                    {label}
                </label>
                <textarea
                    className="text-area__input"
                    id={name}
                    name={name}
                    value={value}
                    type={type}
                    onChange={handleChange}
                    placeholder={placeholder}
                ></textarea>
            </div>
        </div>
    );
};

TextAreaField.propTypes = {
    name: PropTypes.string,
    value: PropTypes.string,
    type: PropTypes.string,
    label: PropTypes.string,
    placeholder: PropTypes.string,
    onChange: PropTypes.func
};

export default TextAreaField;
