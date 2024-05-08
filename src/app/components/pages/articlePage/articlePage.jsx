import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import MainFooter from "../../ui/mainFooter";
import Button from "../../ui/button/button";
import { articlesList } from "../../../mocData/articles";
import "./articlePage.css";

const ArticlePage = () => {
    const { articleId } = useParams();
    const currentArticle = articlesList.find(item => item.id === articleId);
    const [article] = useState(currentArticle);
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
                <div className="article-page__body">
                    <div className="articles-page__content">
                        <h1>Article id {article.id} </h1>
                        <h1>{article.header} </h1>
                        <h3>{article.content}</h3>
                        <img src={article.img} alt="image" />
                    </div>
                </div>
            </div>
            <MainFooter/>
        </div>
    );
};

export default ArticlePage;
