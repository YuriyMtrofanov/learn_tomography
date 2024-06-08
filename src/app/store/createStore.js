import { combineReducers, configureStore } from "@reduxjs/toolkit";
import usersReducer from "./users";
import titlesReducer from "./articleTitles";

const rootReducer = combineReducers({
    users: usersReducer,
    titles: titlesReducer
});

export function createStore() {
    return configureStore({
        reducer: rootReducer
    });
};
