import React from "react";
import PropTypes from "prop-types";
import "./selectField.css";

const SelectField = ({ name, label, value, defaultOption, options, onChange }) => {
    const handleChange = ({ target }) => {
        onChange({
            name: target.name,
            value: target.value
        });
    };
    console.log("options", options);
    const optionsArray =
        !Array.isArray(options) && typeof options === "object"
            ? Object.values(options)
            : options;

    return (
        <div className="select-field">
            <div className="select-field__container">
                <label
                    className="select-field__label"
                    htmlFor={name}
                >
                    {label}
                </label>
                <select
                    id={name}
                    name={name}
                    value={value}
                    className="select-field__input"
                    onChange={handleChange}
                >
                    <option disabled value="" className="select-field__option">
                        {defaultOption}
                    </option>
                    {optionsArray && optionsArray.length > 0 &&
                        optionsArray.map(option => (
                            <option key={option.value} value={option.value}>
                                {option.name}
                            </option>
                        ))}
                </select>
            </div>
        </div>
    );
};

SelectField.propTypes = {
    name: PropTypes.string,
    label: PropTypes.string,
    value: PropTypes.string,
    defaultOption: PropTypes.string,
    options: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    onChange: PropTypes.func
};

export default SelectField;
