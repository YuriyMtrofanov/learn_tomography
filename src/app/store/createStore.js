import { combineReducers, configureStore } from "@reduxjs/toolkit";
import usersReducer from "./users";
import titlesReducer from "./articleTitles";
import articlesReducer from "./articles";

const rootReducer = combineReducers({
    users: usersReducer,
    titles: titlesReducer,
    articles: articlesReducer
});

export function createStore() {
    return configureStore({
        reducer: rootReducer
    });
};
