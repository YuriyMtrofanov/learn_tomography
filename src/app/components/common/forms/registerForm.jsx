import React from "react";
const RegisterForm = () => {
    const handleSubmit = () => {
        console.log("submited");
    };
    return (
        <form onSubmit = {handleSubmit}>
            <h1>Register Form</h1>
        </form>
    );
};

export default RegisterForm;
