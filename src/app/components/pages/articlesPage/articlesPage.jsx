import React from "react";
import "./articlesPage.css";
import Button from "../../ui/button/button";
import { useNavigate } from "react-router-dom";
// import MainFooter from "../../ui/mainFooter";
import { articlesList } from "../../../mocData/articles";
import ArticleCardLarge from "../../common/cards/articleCardLarge";

const ArticlesPage = () => {
    const navigate = useNavigate();
    const handleBack = (data) => {
        navigate(data ? `${data}` : -1);
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
                            <li className="side-bar__header">Тема статьи</li>
                            <li className="side-bar__item">Тема 1</li>
                            <li className="side-bar__item">Тема 2</li>
                            <li className="side-bar__item">Тема 3</li>
                            <li className="side-bar__item">Тема 4</li>
                            <li className="side-bar__item">Тема 5</li>
                        </ul>
                    </div>
                    <div className="articles-page__content">
                        {articlesList.length > 0 &&
                            articlesList.map(item => (
                                <ArticleCardLarge
                                    key={item.id}
                                    image={item.img}
                                    header={item.header}
                                    content={item.content}
                                />
                            ))
                        }
                    </div>
                </div>
            </div>
            {/* <MainFooter/> */}
        </div>
    );
};

export default ArticlesPage;
