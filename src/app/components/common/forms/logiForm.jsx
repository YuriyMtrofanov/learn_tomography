import React, { useState } from "react";
import TextField from "../inputs/textField";
import Button from "../../ui/button/button";

const LoginForm = () => {
    const initialData = {
        email: "",
        password: ""
    };
    const [inputData, setInputData] = useState(initialData);
    const handleChange = (target) => {
        setInputData(prevState => ({
            ...prevState,
            [target.name]: target.value
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const outputDta = {
            ...inputData
        };
        console.log("outputDta", outputDta);
    };

    return (
        <form onSubmit = {handleSubmit}>
            <div className="login-form__container">
                <TextField
                    name="email"
                    label="Введите электронную почту"
                    placeholder="e-mail@example.com"
                    onChange={handleChange}
                />
                <TextField
                    name="password"
                    type="password"
                    label="Введите пароль"
                    placeholder="password"
                    onChange={handleChange}
                />
                <Button
                    type="submit"
                    label="submit"
                    className="submit-button"
                />
            </div>
        </form>
    );
};

export default LoginForm;
