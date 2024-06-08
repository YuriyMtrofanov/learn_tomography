import { createAction, createSlice } from "@reduxjs/toolkit";
import articleService from "../services/article.service";

const articlesSlice = createSlice({
    name: "articles",
    initialState: {
        entities: null,
        isLoading: true,
        error: null
    },
    reducers: {
        articlesRequested: (state) => {
            state.isLoading = true;
        },
        articlesReceived: (state, action) => {
            state.entities = action.payload;
            state.isLoading = false;
        },
        articlesRequestFailed: (state, action) => {
            state.error = action.payload;
            state.isLoading = false;
        },
        articleCreated: (state, action) => {
            if (!Array.isArray(state.entities)) {
                state.entities = [];
            }
            state.entities.push(action.payload);
        },
        articleEdited: (state, action) => {
            if (!Array.isArray(state.entities)) {
                state.entities = [];
            }
            state.entities[state.entities.findIndex((item) =>
                item.id === action.payload.id
            )] = action.payload;
        },
        articleRemoved: (state, action) => {
            state.entities = state.entities.filter(article => article.id !== action.payload);
        }
    }
});

const { reducer: articlesReducer, actions } = articlesSlice;
const {
    articlesRequested,
    articlesReceived,
    articlesRequestFailed,
    articleCreated,
    articleEdited,
    articleRemoved
} = actions;

const articleCreateRequested = createAction("articles/articleCreateRequested");
const articleCreateFailed = createAction("articles/articleCreateFailed");
const articleEditRequested = createAction("articles/articleEditRequested");
const articleEditFailed = createAction("articles/articleEditFailed");
const articleRemoveRequested = createAction("articles/articleRemoveRequested");
const articleRemoveFailed = createAction("articles/titleRemoveFailed");

export const loadArticlesList = () => async (dispatch) => {
    dispatch(articlesRequested());
    try {
        const { content } = await articleService.get();
        dispatch(articlesReceived(content));
    } catch (error) {
        dispatch(articlesRequestFailed(error));
    }
};

export const createArticle = (payload) => async (dispatch) => {
    dispatch(articleCreateRequested());
    try {
        const { content } = await articleService.create(payload);
        dispatch(articleCreated(content));
    } catch (error) {
        dispatch(articleCreateFailed(error.message));
    }
};

export const editArticle = (payload) => async (dispatch) => {
    dispatch(articleEditRequested());
    try {
        const { content } = await articleService.edit(payload);
        dispatch(articleEdited(content));
    } catch (error) {
        dispatch(articleEditFailed(error.message));
    }
};

export const removeArticle = (id) => async (dispatch) => {
    dispatch(articleRemoveRequested());
    try {
        const { content } = await articleService.delete(id);
        if (!content) {
            dispatch(articleRemoved(id));
        }
    } catch (error) {
        dispatch(articleRemoveFailed(error.message));
    }
};

export const getArticlesList = () => (state) => state.articles.entities;
export const getArticleById = (id) => (state) => state.articles.entities.find(item => item.id === id);
export const getArticlesLoadStatus = () => (state) => state.articles.isLoading;

export default articlesReducer;
