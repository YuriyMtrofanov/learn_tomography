import { createAction, createSlice } from "@reduxjs/toolkit";
import articleTitlesService from "../services/articleTitles.service";

const articleTitlesSlice = createSlice({
    name: "titles",
    initialState: {
        entities: null,
        isLoading: true,
        error: null
    },
    reducers: {
        titlesRequested: (state) => {
            state.isLoading = true;
        },
        titlesReceived: (state, action) => {
            state.entities = action.payload;
            state.isLoading = false;
        },
        titlesRequestFailed: (state, action) => {
            state.error = action.payload;
            state.isLoading = false;
        },
        titleCreated: (state, action) => {
            if (!Array.isArray(state.entities)) {
                state.entities = [];
            }
            state.entities.push(action.payload);
        },
        titleEdited: (state, action) => {
            if (!Array.isArray(state.entities)) {
                state.entities = [];
            }
            state.entities[state.entities.findIndex((title) =>
                title.id === action.payload.id
            )] = action.payload;
        },
        titleRemoved: (state, action) => {
            state.entities = state.entities.filter(article => article.id !== action.payload);
        }
    }
});

const { reducer: titlesReducer, actions } = articleTitlesSlice;
const {
    titlesRequested,
    titlesReceived,
    titlesRequestFailed,
    titleCreated,
    titleEdited,
    titleRemoved
} = actions;

const titleCreateRequested = createAction("titles/titleCreateRequested");
const titleCreateFailed = createAction("titles/titleCreateFailed");
const titleEditRequested = createAction("titles/titleEditRequested");
const titleEditFailed = createAction("titles/titleEditFailed");
const titleRemoveRequested = createAction("titles/titleRemoveRequested");
const titleRemoveFailed = createAction("titles/titleRemoveFailed");

export const loadTitlesList = () => async (dispatch) => {
    dispatch(titlesRequested());
    try {
        const { content } = await articleTitlesService.get();
        dispatch(titlesReceived(content));
    } catch (error) {
        dispatch(titlesRequestFailed(error));
    }
};

export const createTitle = (payload) => async (dispatch) => {
    dispatch(titleCreateRequested());
    try {
        const { content } = await articleTitlesService.create(payload);
        dispatch(titleCreated(content));
    } catch (error) {
        dispatch(titleCreateFailed(error.message));
    }
};

export const editTitle = (payload) => async (dispatch) => {
    dispatch(titleEditRequested());
    try {
        const { content } = await articleTitlesService.edit(payload);
        dispatch(titleEdited(content));
    } catch (error) {
        dispatch(titleEditFailed(error.message));
    }
};

export const removeTitle = (id) => async (dispatch) => {
    dispatch(titleRemoveRequested());
    try {
        const { content } = await articleTitlesService.delete(id);
        if (!content) {
            dispatch(titleRemoved(id));
        }
    } catch (error) {
        dispatch(titleRemoveFailed(error.message));
    }
};

export const getTitlesList = () => (state) => state.titles.entities;
export const getTitleById = (id) => (state) => state.titles.entities.find(title => title.id === id);
export const getTitlesLoadStatus = () => (state) => state.titles.isLoading;

export default titlesReducer;
