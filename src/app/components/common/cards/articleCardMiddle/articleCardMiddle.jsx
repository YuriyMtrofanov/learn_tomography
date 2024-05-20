import React from "react";
import PropTypes from "prop-types";
import Button from "../../../ui/button/button";
import { useNavigate } from "react-router-dom";
import "./articleCardMiddle.css";

const ArticleCardMiddle = ({ articleId, image, header, content }) => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate(articleId ? `${articleId}` : -1);
    };
    return (
        <div className="article-card-md">
            <div className="article-card-md__wrapper">
                <div className="article-card-md__image">
                    <img src={image} alt="image" />
                </div>
                <div className="article-card-md__body">
                    <div className="article-card-md__header">
                        {header}
                    </div>
                    <div className="article-card-md__content">
                        {content}
                    </div>
                    <div className="article-card-md__footer">
                        <Button
                            className="article-card-md__button"
                            type="button"
                            onClick={handleClick}
                        >Читать</Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

ArticleCardMiddle.propTypes = {
    articleId: PropTypes.string,
    image: PropTypes.string,
    header: PropTypes.string,
    content: PropTypes.string
};

export default ArticleCardMiddle;
