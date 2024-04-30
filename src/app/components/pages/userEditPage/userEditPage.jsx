import React from "react";
import UserEditForm from "../../common/forms/userEditForm";

const UserEditPage = () => {
    return (
        <div className="main__container">
            <div className="main__content">
                <div className="main__body">
                    <div className="login-form">
                        <h1>Редактировать информацию</h1>
                        <UserEditForm/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserEditPage;
