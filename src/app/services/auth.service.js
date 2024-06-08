import axios from "axios";
import configFile from "../config.json";
import localStorageService from "./localStorage.service";

const httpAuth = axios.create({
    baseURL: configFile.authEndpoint,
    params: {
        // key: process.env.REACT_APP_FIREBASE_KEY,
        key: "AIzaSyCWkDmZ4-Tm2scgRH4qMgxKuVbvaog1qmc"
    }
});

const httpRefresh = axios.create({
    baseURL: configFile.refreshEndpoint,
    params: {
        // key: process.env.REACT_APP_FIREBASE_KEY
        key: "AIzaSyCWkDmZ4-Tm2scgRH4qMgxKuVbvaog1qmc"
    }
});

const authService = {
    register: async (payload) => { // работает
        const { data } = await httpAuth.post("accounts:signUp", payload);
        return data;
    },
    login: async ({ email, password }) => { // работает
        const { data } = await httpAuth.post("accounts:signInWithPassword", {
            email,
            password,
            returnSecureToken: true
        });
        return data;
    },
    refresh: async () => {
        // const { data } = await httpAuth.post(refreshEndpoint, {
        const { data } = await httpRefresh.post("token", {
            grant_type: "refresh_token",
            refresh_token: localStorageService.getRefreshToken()
        });
        return data;
    }
};

export default authService;
