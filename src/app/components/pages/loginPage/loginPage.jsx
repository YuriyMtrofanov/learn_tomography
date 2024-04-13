import React, { useEffect, useState } from "react";
import LoginForm from "../../common/forms/logiForm";
import RegisterForm from "../../common/forms/registerForm";

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
                                    <p onClick={handleChangeType}>Войти в ситему</p>
                                </div>
                            )
                            : (
                                <div className="login-form">
                                    <RegisterForm/>
                                    <p onClick={handleChangeType}>Зарегистрироваться</p>
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>
            <div className="main__footer">
                <div className="footer_content">
                    <div className="footer_info">
                        <p>Created by Mitrofanov Yuriy</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default LoginPage;
