import axios from "axios";
import configFile from "../config.json";
import localStorageService from "./localStorage.service";

const apiKey = "AIzaSyCWkDmZ4-Tm2scgRH4qMgxKuVbvaog1qmc";
const refreshEndpoint = `https://securetoken.googleapis.com/v1/token?key=${apiKey}`;

const httpAuth = axios.create({
    baseURL: configFile.authEndpoint,
    params: {
        key: configFile.key
    }
});

const authService = {
    register: async (payload) => {
        const { data } = await httpAuth.post("accounts:signUp", payload); // работает
        return data;
    },
    login: async ({ email, password }) => {
        const { data } = await httpAuth.post("accounts:signInWithPassword", {
            email,
            password,
            returnSecureToken: true
        });
        return data;
    },
    refresh: async () => {
        const { data } = await httpAuth.post(refreshEndpoint, {
            grant_type: "refresh_token",
            refresh_token: localStorageService.getRefreshToken()
        });
        return data;
    }
};

export default authService;
