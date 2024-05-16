import React, { useEffect, useState } from "react";
import "./articlesPage.css";
import Button from "../../ui/button/button";
import { useNavigate } from "react-router-dom";
import MainFooter from "../../ui/mainFooter";
import { articlesList } from "../../../mocData/articles";
import { articleTitles } from "../../../mocData/articleTitles";
import ArticleCardLarge from "../../common/cards/articleCardLarge";
import SearchForm from "../../common/forms/searchForm";

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

    const step = 5;
    const [numberOfElements, setNumberOfElements] = useState(step);
    const handleReset = () => {
        setNumberOfElements(step);
        setArticleTitle();
    };
    function paginate(data, index) {
        return [...data].splice(0, index);
    };
    window.addEventListener("scroll", () => {
        const documentRect = document.documentElement.getBoundingClientRect();
        const windowHeight = document.documentElement.clientHeight;
        const interval = 150; // кол-во пикселей до нижней границы экрана
        if (documentRect.bottom < windowHeight + interval) {
            setNumberOfElements(prevState => prevState + step);
        }
    });
    const croppedArticles = paginate(filteredArticles, numberOfElements);

    // метод изменения отображения карточек на странице список или ячейки
    const [viewType, setViewType] = useState("list" || "cels");
    const handleChangeViewType = (data) => {
        setViewType(data);
    };
    useEffect(() => {
        // console.log("viewType", viewType);
    }, [viewType]);

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
                                <h1 onClick={() => handleChangeViewType("cels")}>
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
                        {croppedArticles.length > 0 &&
                            croppedArticles.map(item => (
                                <ArticleCardLarge
                                    key={item.id}
                                    articleId={item.id}
                                    image={item.img}
                                    header={item.header}
                                    content={item.content}
                                />
                            ))
                        }
                        {croppedArticles.length < numberOfElements && "Loading..."}
                    </div>
                </div>
            </div>
            <MainFooter/>
        </div>
    );
};

export default ArticlesPage;
