import React, { useState } from "react";
import {
    useDispatch,
    useSelector
} from "react-redux";
import { getCurrentUserId } from "../../../store/users";
import { getTitlesList } from "../../../store/articleTitles";
import { nanoid } from "@reduxjs/toolkit";
import { createArticle } from "../../../store/articles";
import { useNavigate } from "react-router-dom";
import TextField from "../inputs/textField";
import SelectField from "../inputs/selectField/selectField";
import Button from "../../ui/button/button";
import TextAreaField from "../inputs/textAreaField/textAreaField";

const CreateArticleForm = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const initialData = {
        id: "",
        date: "", // дата публикации
        author: "", // id пользователя, т.е. currentUserId
        header: "",
        title: "", // id темы статьи
        img: "",
        content: "",
        comments: [], // массив из id комментариев
        likes: [], // массив из id лайков
        favorites: [] // массив из id закладок
    };
    const currentUserId = useSelector(getCurrentUserId());
    const titles = useSelector(getTitlesList());
    const transformedTitles = titles.map((item) => ({
        name: item.title, value: item.id
    }));

    const [inputData, setInputData] = useState(initialData);
    const handleChange = (target) => {
        setInputData(prevState => ({
            ...prevState,
            [target.name]: target.value
        }));
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        // const isValid = validate();
        // if (!isValid) return;
        const outputData = {
            ...inputData,
            id: nanoid(),
            date: Date.now(),
            author: currentUserId,
            title: inputData.title
        };
        dispatch(createArticle(outputData));
        navigate(`/learn/${outputData.id}`);
    };
    return (
        <form onSubmit = {handleSubmit}>
            <TextField
                name="header"
                label="Введите название статьи..."
                onChange={handleChange}
            />
            {titles.length > 0 && (
                <SelectField
                    name="title"
                    label="Тема статьи"
                    onChange={handleChange}
                    defaultOption="Выберете тему татьи..."
                    value={inputData.title}
                    options={transformedTitles}
                />
            )}
            <TextField
                name="img"
                label="Ссылка на фото"
                placeholder="https://..."
                onChange={handleChange}
            />
            <TextAreaField
                name="content"
                label="Текст статьи"
                placeholder="Введите текст статьи..."
                onChange={handleChange}
            />
            <Button
                type="submit"
                className="submit-button"
            >Submit</Button>
        </form>
    );
};

export default CreateArticleForm;
