import React, { useState } from "react";
import TextField from "../inputs/textField";
import Button from "../../ui/button/button";
import RadioField from "../inputs/radioField/radioField";

const RegisterForm = () => {
    const initialData = {
        email: "",
        password: "",
        firstName: "",
        lastName: "",
        sex: "",
        university: "",
        specialization: "",
        grade: "",
        img: "",
        type: "user" || "admin"
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
            <h1>Создать аккаунт пользователя</h1>
            <TextField
                name="email"
                label="Введите электронную почту"
                placeholder="e-mail@example.com"
                onChange={handleChange}
            />
            <TextField
                name="password"
                label="Придумайте пароль"
                placeholder="password"
                onChange={handleChange}
            />
            <RadioField
                options={[
                    { name: "Male", value: "male" },
                    { name: "Female", value: "female" }
                ]}
                name="type"
                label="Ваш пол"
                value={inputData.type}
                onChange={handleChange}
            />
            <Button
                type="submit"
                label="submit"
                className="submit-button"
            />
        </form>
    );
};

export default RegisterForm;
