import React from "react";
import PropTypes from "prop-types";
import "./radioField.css";

const RadioField = ({ name, label, onChange, options, value }) => {
    const handleChange = ({ target }) => {
        onChange({ name: target.name, value: target.value });
    };
    return (
        <div className="radio-field">
            <label className="radio-field__label">{label}</label>
            {options.map((option) => (
                <div className="radio-field__container" key={option.name}>
                    <input
                        type="radio"
                        className="radio-field__input"
                        name={name}
                        id={option.name + "_" + option.value}
                        value={option.value}
                        checked={option.value === value}
                        onChange={handleChange}
                    />
                    <label
                        className="radio-field__label"
                        htmlFor={option.name + "_" + option.value}
                    >
                        {option.name}
                    </label>
                </div>
            ))}
        </div>
    );
};

RadioField.propTypes = {
    name: PropTypes.string,
    label: PropTypes.string,
    onChange: PropTypes.func,
    options: PropTypes.array,
    value: PropTypes.string
};

export default RadioField;
