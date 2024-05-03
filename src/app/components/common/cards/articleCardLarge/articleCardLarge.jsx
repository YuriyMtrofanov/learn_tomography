import React from "react";
import PropTypes from "prop-types";
import "./articleCardLarge.css";

const ArticleCardLarge = ({ image, header, content }) => {
    return (
        <div className="article-card-lg">
            <div className="article-card-lg__container">
                <div className="article-card-lg__image">
                    {/* <img src={image} alt="image" /> */}
                    <img src="http://placehold.it/600x350" alt="image" />
                </div>
                <div className="article-card-lg__body">
                    <div className="article-card-lg__header">
                        {header}
                    </div>
                    <div className="article-card-lg__content">
                        {content}
                    </div>
                    <div className="article-card-lg__footer">
                        <p>footer</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

ArticleCardLarge.propTypes = {
    image: PropTypes.string,
    header: PropTypes.string,
    content: PropTypes.string
};

export default ArticleCardLarge;
