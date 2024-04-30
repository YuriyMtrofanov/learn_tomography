import React from "react";
import RegisterForm from "../../common/forms/registerForm";

const UserEditPage = () => {
    return (
        <div className="main__container">
            <div className="main__content">
                <div className="main__body">
                    <div className="login-form">
                        <RegisterForm/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserEditPage;
