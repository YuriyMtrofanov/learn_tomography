import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./userPage.css";
import MainFooter from "../../ui/mainFooter";
import { currentUser } from "../../../mocData/user";
import Button from "../../ui/button/button";

const UserPage = () => {
    const navigate = useNavigate();
    const handleBack = (data) => {
        navigate(data ? `${data}` : -1);
    };
    return (
        <div className="user-page">
            <div className="user-page__container">
                <Button
                    className="user-profile__back-button"
                    type="button"
                    onClick={() => handleBack()}
                >
                    <h1><i className="bi bi-caret-left"></i></h1>
                </Button>
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
                                    {`${currentUser.firstName} ${currentUser.lastName}`}
                                </div>
                                <div className="user-profile__data">
                                    <div>{currentUser.university}</div>
                                    <div>{currentUser.specialization}</div>
                                    <Button
                                        className="user-profile__edit-button"
                                        type="button"
                                    >
                                        <NavLink className="user-profile__label" to={`/users/${currentUser.id}/edit`}>
                                            <h2><i className="bi bi-gear"></i></h2>
                                        </NavLink>
                                    </Button>
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
