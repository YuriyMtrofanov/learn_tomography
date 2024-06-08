import React, { useState } from "react";
import MainFooter from "../../ui/mainFooter";
import "./adminPage.css";
import CreateTitleForm from "../../common/forms/createTitleForm";
import Button from "../../ui/button/button";
import { useDispatch, useSelector } from "react-redux";
import { getTitlesList, removeTitle } from "../../../store/articleTitles";

const AdminPage = () => {
    const dispatch = useDispatch();
    const articlesTitles = useSelector(getTitlesList());
    // const [titles, setTitles] = useState([...articlesTitles]);
    // console.log("articlesTitles", titles);
    const [titleVisibility, changeTitleVisibility] = useState(false);
    const handleShow = () => {
        changeTitleVisibility(prevState => !prevState);
    };
    const handleDeleteTitle = (titleId) => {
        alert("Подтвердите удаление");
        console.log("title", titleId);
        dispatch(removeTitle(titleId));
    };
    return (
        <div className="admin-page">
            <div className="admin-page__container">
                <div className="admin-page__content">
                    <div className="admin-page__body">
                        <div className="admin-page__title">
                            <Button
                                className="article-title__button"
                                onClick={handleShow}
                            >
                                {"Темы статьи "}
                                {titleVisibility
                                    ? (<i className="bi bi-caret-up-fill"></i>)
                                    : (<i className="bi bi-caret-down-fill"></i>)
                                }
                            </Button>
                            <div className={`article-title__list ${titleVisibility ? "" : "hidden"}`}>
                                <h3>Перечень всех существующих тем</h3>
                                <ul>
                                    {articlesTitles.length > 0 && articlesTitles.map(item => (
                                        <div className="article-title__item" key={item.id}>
                                            <div className="article-item__content">{item.title}</div>
                                            <Button
                                                className="article-title__delete"
                                                onClick={() => handleDeleteTitle(item.id)}
                                            >Delete</Button>
                                        </div>
                                    ))}
                                </ul>
                                <div className="article-title__form">
                                    <CreateTitleForm />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <MainFooter/>
        </div>
    );
};

export default AdminPage;
