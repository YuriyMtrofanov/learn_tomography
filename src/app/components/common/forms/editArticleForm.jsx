import React, { useState } from "react";
import {
    useDispatch,
    useSelector
} from "react-redux";
import { getTitlesList } from "../../../store/articleTitles";
import { editArticle, getArticleById } from "../../../store/articles";
import { useNavigate, useParams } from "react-router-dom";
import TextField from "../inputs/textField";
import SelectField from "../inputs/selectField/selectField";
import Button from "../../ui/button/button";
import TextAreaField from "../inputs/textAreaField/textAreaField";

const CreateArticleForm = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { articleId } = useParams();
    const article = useSelector(getArticleById(articleId));
    const titles = useSelector(getTitlesList());
    const transformedTitles = titles.map((item) => ({
        name: item.title, value: item.id
    }));

    const [inputData, setInputData] = useState(article);
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
            ...inputData
        };
        dispatch(editArticle(outputData));
        navigate(`/learn/${outputData.id}`);
    };
    return (
        <form onSubmit = {handleSubmit}>
            <TextField
                name="header"
                label="Введите название статьи..."
                onChange={handleChange}
                value={inputData.header}
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
                value={inputData.img}
            />
            <TextAreaField
                name="content"
                label="Текст статьи"
                placeholder="Введите текст статьи..."
                onChange={handleChange}
                value={inputData.content}
            />
            <Button
                type="submit"
                className="submit-button"
            >Submit</Button>
        </form>
    );
};

export default CreateArticleForm;
