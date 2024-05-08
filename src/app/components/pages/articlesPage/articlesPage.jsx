import React, { useState } from "react";
import "./articlesPage.css";
import Button from "../../ui/button/button";
import { useNavigate } from "react-router-dom";
import MainFooter from "../../ui/mainFooter";
import { articlesList } from "../../../mocData/articles";
import { articleTitles } from "../../../mocData/articleTitles";
import ArticleCardLarge from "../../common/cards/articleCardLarge";

const ArticlesPage = () => {
    const navigate = useNavigate();
    const handleBack = (data) => {
        navigate(data ? `${data}` : -1);
    };
    const [sortedArticles, setSortedArticles] = useState(articlesList);
    const handleSort = (data) => {
        setSortedArticles(articlesList.filter(item => item.title === data));
    };
    const handleReset = () => {
        setSortedArticles(articlesList);
    };
    return (
        <div className="articles-page">
            <div className="articles-page__container">
                <Button
                    className="articles-page__back-button"
                    type="button"
                    onClick={() => handleBack()}
                >
                    <h1><i className="bi bi-caret-left"></i></h1>
                </Button>
                <div className="articles-page__body">
                    <div className="articles-page__side-bar">
                        <ul>
                            <li className="side-bar__header">Темы статей</li>
                            {articleTitles.map(item => (
                                <li
                                    className="side-bar__item"
                                    key={item.id}
                                    onClick={() => handleSort(item.id)}
                                >
                                    {item.label}
                                </li>
                            ))}
                            <Button
                                className="side-bar__reset"
                                type="button"
                                onClick={handleReset}
                            >Сбросить</Button>
                        </ul>
                    </div>
                    <div className="articles-page__content">
                        {sortedArticles.length > 0 &&
                            sortedArticles.map(item => (
                                <ArticleCardLarge
                                    key={item.id}
                                    articleId={item.id}
                                    image={item.img}
                                    header={item.header}
                                    content={item.content}
                                />
                            ))
                        }
                    </div>
                </div>
            </div>
            <MainFooter/>
        </div>
    );
};

export default ArticlesPage;
