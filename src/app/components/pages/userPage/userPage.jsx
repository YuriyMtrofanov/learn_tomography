import React from "react";
import { NavLink } from "react-router-dom";
import "./userPage.css";
import MainFooter from "../../ui/mainFooter";
import { currentUser } from "../../../mocData/user";

const UserPage = () => {
    return (
        <div className="user-page">
            <div className="user-page__container">
                <div className="user-page__content">
                    <div className="user-page__side-bar">
                        <ul>
                            <li><NavLink className="side-bar__item" to={`/users/${currentUser.id}`}>Моя страница</NavLink></li>
                            <li><NavLink className="side-bar__item" to="/tests">Обучение</NavLink></li>
                            <li><NavLink className="side-bar__item" to={`/users/${currentUser.id}/favorites`}>Избранное</NavLink></li>
                            <li><NavLink className="side-bar__item" to={`/users/${currentUser.id}/edit`}>Редактировать</NavLink></li>
                        </ul>
                    </div>
                    <div className="user-page__body">
                        <div className="user-profile__header">
                            <div className="user-profile__photo">
                                <img
                                    src={currentUser.img}
                                />
                            </div>
                            <div className="user-profile_info">
                                <div className="user-profile__name">
                                    <div>{`${currentUser.firstName} ${currentUser.lastName}`}</div>
                                </div>
                                <div className="user-profile__data">
                                    <div>{currentUser.university}</div>
                                    <div>{currentUser.specialization}</div>
                                </div>
                            </div>
                        </div>
                        <div className="user-profile__content"><h1>Content</h1></div>
                    </div>
                </div>
            </div>
            <MainFooter/>
        </div>
    );
};

export default UserPage;
