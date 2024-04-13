import React from "react";
const LoginForm = () => {
    const handleSubmit = () => {
        console.log("submited");
    };
    return (
        <form onSubmit = {handleSubmit}>
            <h1>Login Form</h1>
        </form>
    );
};

export default LoginForm;
