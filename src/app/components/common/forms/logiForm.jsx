import React, { useState } from "react";
import TextField from "../inputs/textField";
import Button from "../../ui/button/button";
import { useDispatch } from "react-redux";
import { logIn } from "../../../store/users";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
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
        dispatch(logIn(inputData));
        navigate("/learn");
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
                    className="submit-button"
                >Submit</Button>
            </div>
        </form>
    );
};

export default LoginForm;
