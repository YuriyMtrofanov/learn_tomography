import React from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import MainFooter from "../../ui/mainFooter";
import Button from "../../ui/button/button";
import "./articlePage.css";
import { useSelector } from "react-redux";
import { getArticleById } from "../../../store/articles";

const ArticlePage = () => {
    const { articleId } = useParams();
    const article = useSelector(getArticleById(articleId));
    const navigate = useNavigate();
    const handleBack = (data) => {
        navigate(data ? `${data}` : -1);
    };
    return (
        <div className="article-page">
            <div className="article-page__container">
                <Button
                    className="article-page__back-button"
                    type="button"
                    onClick={() => handleBack()}
                >
                    <h1><i className="bi bi-caret-left"></i></h1>
                </Button>
                <div className="header__wrapper">
                    <div className="header-image">
                        <img src={article.img} alt="image" />
                        <div className="article-title">
                            <div className="article-title__content">
                                <h1>{article.header}</h1>
                            </div>
                        </div>
                    </div>
                    <Button
                        className="user-profile__edit-button"
                        type="button"
                    >
                        <NavLink className="user-profile__label" to={`/learn/${articleId}/edit`}>
                            <h2><i className="bi bi-gear"></i></h2>
                        </NavLink>
                    </Button>
                </div>
                <div className="article-page__content">
                    {article.content}
                </div>
            </div>
            <MainFooter/>
        </div>
    );
};

export default ArticlePage;
