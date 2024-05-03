import React, { useState } from "react";
import LoginForm from "../../common/forms/logiForm";
import RegisterForm from "../../common/forms/registerForm";
import MainFooter from "../../ui/mainFooter";

const LoginPage = () => {
    const [type, setType] = useState("login");
    const handleChangeType = () => {
        setType(prevState => prevState === "login" ? "register" : "login");
    };
    return (
        <>
            <div className="main__container">
                <div className="main__content">
                    <div className="main__body">
                        {type === "login"
                            ? (
                                <div className="login-form">
                                    <h1>Войти в систему</h1>
                                    <LoginForm/>
                                    <p onClick={handleChangeType}>Создать аккаунт</p>
                                </div>
                            )
                            : (
                                <div className="login-form">
                                    <h1>Создать учетную запись</h1>
                                    <RegisterForm/>
                                    <p onClick={handleChangeType}>Уже есть аккаунт?</p>
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>
            <MainFooter/>
        </>
    );
};

export default LoginPage;
