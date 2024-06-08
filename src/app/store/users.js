import { createAction, createSlice } from "@reduxjs/toolkit";
import userService from "../services/user.service";
import authService from "../services/auth.service";
import localStorageService from "../services/localStorage.service";
// import { generetaAuthError } from "../utils/generateAuthError";

const initialState = localStorageService.getAccessToken()
    ? {
        entities: null,
        isLoading: true,
        error: null,
        auth: { userId: localStorageService.getCurrentUserId() },
        isLoggedIn: true,
        dataLoaded: false
    }
    : {
        entities: null,
        isLoading: false,
        error: null,
        auth: null,
        isLoggedIn: false,
        dataLoaded: false
    };

const usersSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
        usersRequested: (state) => {
            state.isLoading = true;
        },
        usersReceived: (state, action) => {
            state.entities = action.payload;
            state.isLoading = false;
            state.dataLoaded = true;
        },
        usersRequestFailed: (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        },
        // userCreated: (state, action) => {
        //     if (!Array.isArray(state.entities)) {
        //         state.entities = [];
        //     }
        //     state.entities.push(action.payload);
        // },
        userEdited: (state, action) => {
            if (!Array.isArray(state.entities)) {
                state.entities = [];
            }
            state.entities[state.entities.findIndex((user) =>
                user.id === action.payload.id
            )] = action.payload;
        },
        userDeleted: (state, action) => {
            state.entities = state.entities.filter((user) =>
                user.id !== action.payload
            );
        },
        // authRequested: (state) => {
        //     state.error = null;
        // },
        authRequestSucceeded: (state, action) => {
            state.auth = action.payload;
            state.isLoggedIn = true;
        },
        authRequestFailed: (state, action) => {
            state.error = action.payload;
        },
        userLoggedOut: (state) => {
            state.entities = null;
            state.isLoggedIn = false;
            state.auth = null;
            state.dataLoaded = false;
        }
    }
});

const { reducer: usersReducer, actions } = usersSlice;
const {
    usersRequested,
    usersReceived,
    usersRequestFailed,
    userLoggedOut,
    // userCreated,
    userEdited,
    userDeleted,
    authRequestSucceeded,
    authRequestFailed
} = actions;

const userEditRequested = createAction("users/userEditRequested");
const userEditFailed = createAction("users/userEditFailed");
const userDeleteRequested = createAction("users/userDeleteRequested");
const userDeleteFailed = createAction("users/userDeleteFailed");
const authRequested = createAction("users/authRequested");

export const signUp = (payload) => async (dispatch) => {
    dispatch(authRequested());
    const { password, ...rest } = payload;
    try {
        const data = await authService.register(payload); // регистрируем пользователя, в ответ получаем рег. данные в т.ч и id полользователя
        userService.createUser({ id: data.localId, ...rest }); // пушим данные пользователя по эндпойнту id полользователя. Также добавляем этот id в объект пользователя
        localStorageService.setTokens(data);
        dispatch(authRequestSucceeded({ userId: data.localId }));
    } catch (error) {
        dispatch(authRequestFailed(error.message));
    }
};

export const logIn = (payload) => async (dispatch) => {
    dispatch(authRequested());
    const { email, password } = payload;
    try {
        const data = await authService.login({ email, password });
        localStorageService.setTokens(data);
        dispatch(authRequestSucceeded({ userId: data.localId }));
    } catch (error) {
        dispatch(authRequestFailed(error.message));
    }
};

export const logOut = () => async (dispatch) => {
    localStorageService.removeAuthData();
    dispatch(userLoggedOut());
};

export const loadUsersList = () => async (dispatch) => {
    dispatch(usersRequested());
    try {
        const { content } = await userService.getUsersList();
        dispatch(usersReceived(content));
    } catch (error) {
        dispatch(usersRequestFailed(error.message));
    }
};

export const editUser = (payload) => async (dispatch) => {
    dispatch(userEditRequested());
    try {
        const { content } = await userService.editUser(payload);
        dispatch(userEdited(content));
    } catch (error) {
        dispatch(userEditFailed(error.message));
    }
};

export const deleteUser = (id) => async (dispatch) => {
    dispatch(userDeleteRequested());
    try {
        const { content } = await userService.deleteUser(id);
        if (!content) {
            dispatch(userDeleted(content));
        }
    } catch (error) {
        dispatch(userDeleteFailed(error.message));
    }
};

export const getUsersList = () => (state) => state.users.entities;
export const getUserById = (userId) => (state) => {
    if (state.users.entities) {
        return state.users.entities.find(user => user.id === userId);
    }
};
export const getIsLoggedIn = () => (state) => state.users.isLoggedIn;
export const getDataStatus = () => (state) => state.users.dataLoaded;
export const getUsersLoadingStatus = () => (state) => state.users.isLoading;
export const getCurrentUserId = () => (state) => state.users.auth.userId;
export const getCurrentUser = () => (state) => {
    // console.log("state.users.entities", state.users.entities);
    // console.log("state.users.auth", state.users.auth);
    if (state.users.entities && state.users.auth) {
        return state.users.entities.find(user => user.id === state.users.auth.userId);
    }
};
export const getUserAccountType = () => (state) => {
    return state.users.auth && state.users.entities &&
        state.users.entities.find(user => user.id === state.users.auth.userId).type;
};

export default usersReducer;
