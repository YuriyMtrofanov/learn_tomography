import axios from "axios";
import configFile from "../config.json";
import localStorageService from "./localStorage.service";

const apiKey = "AIzaSyCWkDmZ4-Tm2scgRH4qMgxKuVbvaog1qmc";
// const authEndpoint = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${apiKey}`; // https://firebase.google.com/docs/reference/rest/auth#section-create-email-password
// const loginEndpoint = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${apiKey}`;
const refreshEndpoint = `https://securetoken.googleapis.com/v1/token?key=${apiKey}`;

const httpAuth = axios.create({
    baseURL: configFile.authEndpoint,
    params: {
        key: configFile.key
    }
});

httpAuth.interceptors.request.use(
    async function (config) {
        // const containSlash = /\/$/gi.test(config.url);
        // config.url = (containSlash ? config.url.slice(0, -1) : config.url) + ".json";
        return config;
    }
);

const authService = {
    register: async (payload) => {
        const { data } = await httpAuth.post("accounts:signUp", payload);
        console.log("register data response", data);
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
