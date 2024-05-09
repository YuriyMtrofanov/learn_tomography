import React, { useState } from "react";
import PropTypes from "prop-types";
import TextField from "../inputs/textField";

const SearchForm = ({ onSearch }) => {
    const [inputData, setInputData] = useState("");
    const handleChange = (target) => {
        setInputData(target.value);
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        onSearch(inputData);
    };
    return (
        <form onSubmit = {handleSubmit}>
            <TextField
                name="data"
                placeholder="search..."
                onChange={handleChange}
            />
        </form>
    );
};

SearchForm.propTypes = {
    onSearch: PropTypes.func
};

export default SearchForm;
