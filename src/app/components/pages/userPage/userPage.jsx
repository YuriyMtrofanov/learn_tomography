import React from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import "./userPage.css";
import MainFooter from "../../ui/mainFooter";
import Button from "../../ui/button/button";
import { useSelector } from "react-redux";
import { getCurrentUser, getUserById } from "../../../store/users";
import SpinnerLoader from "../../ui/spinnerLoader/spinnerLoader";

const UserPage = () => {
    const { userId } = useParams();
    const currentUser = useSelector(getCurrentUser());
    const userData = useSelector(getUserById(userId));
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
                {userData
                    ? (
                        <div className="user-page__body">
                            <div className="user-page__side-bar">
                                <ul>
                                    <li><NavLink className="side-bar__item" to={`/users/${currentUser.id}`}>Моя страница</NavLink></li>
                                    <li><NavLink className="side-bar__item" to="/tests">Обучение</NavLink></li>
                                    <li><NavLink className="side-bar__item" to={`/users/${currentUser.id}/favorites`}>Избранное</NavLink></li>
                                    <li><NavLink className="side-bar__item" to={`/users/${currentUser.id}/edit`}>Редактировать</NavLink></li>
                                    <li><NavLink className="side-bar__item" to="/learn/create">Добавить статью</NavLink></li>
                                </ul>
                            </div>
                            <div className="user-page__content">
                                <div className="user-profile__header">
                                    <div className="user-profile__photo">
                                        <img
                                            src={userData.img}
                                        />
                                    </div>
                                    <div className="user-profile_info">
                                        <div className="user-profile__name">
                                            {`${userData.firstName} ${userData.lastName}`}
                                        </div>
                                        <div className="user-profile__data">
                                            <div>{userData.university}</div>
                                            <div>{userData.specialization}</div>
                                            {userId === currentUser.id &&
                                                <Button
                                                    className="user-profile__edit-button"
                                                    type="button"
                                                >
                                                    <NavLink className="user-profile__label" to={`/users/${userData.id}/edit`}>
                                                        <h2><i className="bi bi-gear"></i></h2>
                                                    </NavLink>
                                                </Button>
                                            }
                                        </div>
                                    </div>
                                </div>
                                <div className="user-profile__content"><h1>Content</h1></div>
                            </div>
                        </div>
                    )
                    : (
                        <div className="user-page__spinner">
                            <SpinnerLoader/>
                        </div>
                    )
                }
            </div>
            <MainFooter/>
        </div>
    );
};

export default UserPage;
