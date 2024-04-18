import React, { useEffect, useState } from "react";
import LoginForm from "../../common/forms/logiForm";
import RegisterForm from "../../common/forms/registerForm";
import PageFooter from "../../ui/pageFooter";

const LoginPage = () => {
    const [type, setType] = useState("login");
    const handleChangeType = () => {
        setType(prevState => prevState === "login" ? "register" : "login");
    };
    useEffect(() => {
        console.log("type", type);
    }, [type]);
    return (
        <>
            <div className="main__container">
                <div className="main__content">
                    <div className="main__body">
                        {type === "login"
                            ? (
                                <div className="login-form">
                                    <LoginForm/>
                                    <p onClick={handleChangeType}>Создать аккаунт</p>
                                </div>
                            )
                            : (
                                <div className="login-form">
                                    <RegisterForm/>
                                    <p onClick={handleChangeType}>Уже есть аккаунт?</p>
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>
            <PageFooter/>
        </>
    );
};

export default LoginPage;
