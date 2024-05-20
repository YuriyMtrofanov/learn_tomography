import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../ui/button/button";
import "./articleEditPage.css";

const ArticleEditPage = () => {
    const navigate = useNavigate();
    const handleBack = (data) => {
        navigate(data ? `${data}` : -1);
    };
    return (
        <div className="article-edit-page">
            <div className="article-edit-page__container">
                <Button
                    className="article-page__back-button"
                    type="button"
                    onClick={() => handleBack()}
                >
                    <h1><i className="bi bi-caret-left"></i></h1>
                </Button>
            </div>
        </div>
    );
};

export default ArticleEditPage;
