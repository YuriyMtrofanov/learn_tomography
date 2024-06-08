import { nanoid } from "@reduxjs/toolkit";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createTitle } from "../../../store/articleTitles";
import TextField from "../inputs/textField";
import Button from "../../ui/button/button";

const CreateTitleForm = () => {
    const dispatch = useDispatch();
    const initialData = {
        title: ""
    };
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
            id: nanoid()
        };
        dispatch(createTitle(outputData));
    };

    return (
        <form onSubmit = {handleSubmit}>
            <TextField
                name="title"
                placeholder="Добавьте новую тему..."
                onChange={handleChange}
            />
            <Button
                type="submit"
                className="submit-button"
            >Создать тему</Button>
        </form>
    );
};

export default CreateTitleForm;
