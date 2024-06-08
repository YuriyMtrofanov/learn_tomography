import React, { useState } from "react";
import MainFooter from "../../ui/mainFooter";
import "./adminPage.css";
import CreateTitleForm from "../../common/forms/createTitleForm";
import Button from "../../ui/button/button";
import { useDispatch, useSelector } from "react-redux";
import { getTitlesList, removeTitle } from "../../../store/articleTitles";
import { getArticlesList } from "../../../store/articles";

const AdminPage = () => {
    const dispatch = useDispatch();
    const articlesTitles = useSelector(getTitlesList());
    const [showTitle, setShowTitle] = useState(false);
    const handleShowTitle = () => {
        setShowTitle(prevState => !prevState);
    };

    const articlesList = useSelector(getArticlesList());
    const [showArticles, setShowArticles] = useState(false);
    const handleShowArticles = () => {
        setShowArticles(prevState => !prevState);
    };

    const handleDeleteTitle = (titleId) => {
        alert("Подтвердите удаление");
        console.log("title", titleId);
        dispatch(removeTitle(titleId));
    };
    return (
        <div className="admin-page">
            <div className="admin-page__container">
                <div className="admin-page__body">
                    <div className="admin-page__title">
                        <Button
                            className="article-title__button"
                            onClick={handleShowTitle}
                        >
                            {"Темы статьи "}
                            {showTitle
                                ? (<i className="bi bi-caret-up-fill"></i>)
                                : (<i className="bi bi-caret-down-fill"></i>)
                            }
                        </Button>
                        <div className={`article-title__list ${showTitle ? "" : "hidden"}`}>
                            <h3>Перечень всех существующих тем</h3>
                            {articlesTitles && articlesTitles.length > 0 && articlesTitles.map(item => (
                                <div className="article-title__item" key={item.id}>
                                    <div className="article-item__content">{item.title}</div>
                                    <Button
                                        className="article-title__delete"
                                        onClick={() => handleDeleteTitle(item.id)}
                                    >Delete</Button>
                                </div>
                            ))}
                            <div className="article-title__form">
                                <CreateTitleForm />
                            </div>
                        </div>
                    </div>
                    <div className="admin-page__articles">
                        <Button
                            className="articles__button"
                            onClick={handleShowArticles}
                        >
                            {"Список статей "}
                            {showArticles
                                ? (<i className="bi bi-caret-up-fill"></i>)
                                : (<i className="bi bi-caret-down-fill"></i>)
                            }
                        </Button>
                        <div className={`articles-list ${showArticles ? "" : "hidden"}`}>
                            <h3>Перечень всех статей</h3>
                            {articlesList && articlesList.length > 0 && articlesList.map(item => (
                                <div className="articles-list__item" key={item.id}>
                                    <h3>{item.name}</h3>
                                </div>
                            ))
                            }
                        </div>
                    </div>
                </div>
            </div>
            <MainFooter/>
        </div>
    );
};

export default AdminPage;
