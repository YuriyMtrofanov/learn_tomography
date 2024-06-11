import React from "react";
import CreateArticleForm from "../../common/forms/createArticleForm";
import "./articleCreatePage.css";

const ArticleCreatePage = () => {
    return (
        <div className="create-article">
            <div className="create-article__container">
                <div className="create-article__body">
                    <div className="create-article__form">
                        <CreateArticleForm/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ArticleCreatePage;
