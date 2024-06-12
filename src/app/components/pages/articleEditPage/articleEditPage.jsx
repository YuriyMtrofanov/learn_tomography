import React from "react";
import { useNavigate } from "react-router-dom";
import EditArticleForm from "../../common/forms/editArticleForm";
import Button from "../../ui/button/button";
import "./articleEditPage.css";

const ArticleEditPage = () => {
    const navigate = useNavigate();
    const handleBack = (data) => {
        navigate(data ? `${data}` : -1);
    };
    return (
        <div className="article-edit">
            <div className="article-edit__container">
                <h2>Редактирование статьи</h2>
                <Button
                    className="article-edit__back-button"
                    type="button"
                    onClick={() => handleBack()}
                >
                    <h1><i className="bi bi-caret-left"></i></h1>
                </Button>
                <div className="article-edit__body">
                    <EditArticleForm/>
                </div>
            </div>
        </div>
    );
};

export default ArticleEditPage;
