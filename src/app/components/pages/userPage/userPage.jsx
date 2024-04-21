import React from "react";
import "./userPage.css";
import MainFooter from "../../ui/mainFooter";

const UserPage = () => {
    return (
        <div className="user-page">
            <div className="user-page__container">
                <div className="user-page__content">
                    <div className="user-page__sideBar">
                        <h1>sidebar</h1>
                    </div>
                    <div className="user-page__body">
                        <div className="user-profile__header">
                            <div className="user-profile__photo">
                                <img
                                    src="https://sun9-64.userapi.com/impg/c857424/v857424626/18408f/qrQnyem8Jm4.jpg?size=768x1022&quality=96&sign=20ef7ab2cde9672b4819b380b16e84a8&type=album"
                                />
                            </div>
                            <div className="user-profile_info">
                                <div className="user-profile__name">
                                    <h1>User Name</h1>
                                </div>
                                <div className="user-profile__data">
                                    <h1>User Data</h1>
                                </div>
                            </div>
                        </div>
                        <h1>Content</h1>
                    </div>
                </div>
            </div>
            <MainFooter/>
        </div>
    );
};

export default UserPage;
