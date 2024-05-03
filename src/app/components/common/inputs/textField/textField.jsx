import React, { useState } from "react";
import PropTypes from "prop-types";
import "./textField.css";

const TextField = ({ name, label, value, type, placeholder, onChange }) => {
    const handleChange = ({ target }) => {
        onChange({
            name: target.name,
            value: target.value
        });
    };
    const [password, setPassword] = useState();
    const changeShowPassword = () => {
        setPassword(prevState => !prevState);
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
                    value={value}
                    type={password ? "text" : type}
                    className="text-field__input"
                    placeholder={placeholder}
                    onChange={handleChange}
                />
                {type === "password" && (
                    <button
                        className="show-password"
                        type="button"
                        onClick={changeShowPassword}
                    >
                        <i
                            className={
                                "bi bi-eye" + (password ? "-slash" : "")
                            }
                        ></i>
                    </button>
                )}
            </div>
        </div>
    );
};

TextField.propTypes = {
    name: PropTypes.string,
    value: PropTypes.string,
    type: PropTypes.string,
    label: PropTypes.string,
    placeholder: PropTypes.string,
    onChange: PropTypes.func
};

export default TextField;
