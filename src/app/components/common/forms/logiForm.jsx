import React from "react";
import TextField from "../inputs/textField";
const LoginForm = () => {
    const handleSubmit = () => {
        console.log("submited");
    };
    return (
        <form onSubmit = {handleSubmit}>
            <div className="login-form__container">
                <h1>Вход в систему</h1>
                <TextField
                    name="e-mail"
                    label="Введите e-mail"
                    placeholder="e-mail"
                />
                <TextField
                    name="password"
                    label="Введите password"
                    placeholder="password"
                />
            </div>
        </form>
    );
};

export default LoginForm;
