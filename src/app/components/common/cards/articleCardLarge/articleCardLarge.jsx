import React from "react";
import PropTypes from "prop-types";
import "./articleCardLarge.css";
import Button from "../../../ui/button/button";
import { useNavigate } from "react-router-dom";

const ArticleCardLarge = ({ articleId, image, header, content }) => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate(articleId ? `${articleId}` : -1);
    };
    return (
        <div className="article-card-lg">
            <div className="article-card-lg__wrapper">
                <div className="article-card-lg__image">
                    <img src={image} alt="image" />
                </div>
                <div className="article-card-lg__body">
                    <div className="article-card-lg__header">
                        {header}
                    </div>
                    <div className="article-card-lg__content">
                        {content}
                    </div>
                    <div className="article-card-lg__footer">
                        <Button
                            className="article-card-lg__button"
                            type="button"
                            onClick={handleClick}
                        >Читать</Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

ArticleCardLarge.propTypes = {
    articleId: PropTypes.string,
    image: PropTypes.string,
    header: PropTypes.string,
    content: PropTypes.string
};

export default ArticleCardLarge;
