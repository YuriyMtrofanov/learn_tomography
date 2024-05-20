import React, { useEffect, useState } from "react";
import "./articlesPage.css";
import Button from "../../ui/button/button";
import { useNavigate } from "react-router-dom";
import MainFooter from "../../ui/mainFooter";
import { articlesList } from "../../../mocData/articles";
import { articleTitles } from "../../../mocData/articleTitles";
import paginate from "../../../utils/paginate";
import ArticleCardLarge from "../../common/cards/articleCardLarge";
import ArticleCardMiddle from "../../common/cards/articleCardMiddle/articleCardMiddle";
import SearchForm from "../../common/forms/searchForm";
import SpinnerLoader from "../../ui/spinnerLoader/spinnerLoader";

const ArticlesPage = () => {
    const navigate = useNavigate();
    const handleBack = (data) => {
        navigate(data ? `${data}` : -1);
    };
    const articles = articlesList;
    const [articleTitle, setArticleTitle] = useState();
    const [inputData, setInputData] = useState("");
    const handleSearch = (data) => {
        setArticleTitle(); // нужно ли обнулять поиск по теме статьи при использовании поисковой строки?
        setInputData(data.toString());
    };
    const handleSort = (data) => {
        setInputData("");
        setArticleTitle(data);
    };

    function filterArticles(data) {
        let filteredArticles = data;
        if (inputData) {
            filteredArticles = data.filter(item => item.content.toLowerCase().includes(inputData.toLowerCase()));
        } else if (articleTitle) {
            filteredArticles = data.filter(item => item.title === articleTitle);
        };
        return filteredArticles;
    };
    const filteredArticles = filterArticles(articles);

    // метод изменения отображения карточек на странице список или ячейки
    const [viewType, setViewType] = useState("list" || "grid");
    const handleChangeViewType = (data) => {
        setViewType(data);
    };

    const step = 5;
    const [numberOfElements, setNumberOfElements] = useState(step);
    const handleReset = () => {
        setNumberOfElements(step);
        setArticleTitle();
    };

    useEffect(() => {
        const handleScroll = () => {
            const documentRect = document.documentElement.getBoundingClientRect();
            const windowHeight = document.documentElement.clientHeight;
            const interval = 100; // кол-во пикселей до нижней границы экрана
            if (documentRect.bottom < windowHeight + interval) {
                articles.length >= numberOfElements && setNumberOfElements(prevState => prevState + step);
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [numberOfElements]);

    const croppedArticles = paginate(filteredArticles, numberOfElements);

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
                        <div className="top-panel">
                            <div className="top-panel__icons">
                                <h1 onClick={() => handleChangeViewType("list")}>
                                    <i className="bi bi-card-list"></i>
                                </h1>
                                <h1 onClick={() => handleChangeViewType("grid")}>
                                    <i className="bi bi-grid"></i>
                                </h1>
                            </div>
                            <div className="top-panel__search">
                                <SearchForm
                                    className="search-form"
                                    onSearch={handleSearch}
                                />
                            </div>
                        </div>
                        <div className="cards__wrapper">
                            {croppedArticles.length > 0 &&
                                croppedArticles.map(item =>
                                    viewType === "list"
                                        ? (
                                            <ArticleCardLarge
                                                key={item.id}
                                                articleId={item.id}
                                                image={item.img}
                                                header={item.header}
                                                content={item.content}
                                            />
                                        )
                                        : (
                                            <ArticleCardMiddle
                                                key={item.id}
                                                articleId={item.id}
                                                image={item.img}
                                                header={item.header}
                                                content={item.content}
                                            />
                                        )
                                )
                            }
                            {filteredArticles.length >= numberOfElements && (
                                <SpinnerLoader/>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            <MainFooter/>
        </div>
    );
};

export default ArticlesPage;
