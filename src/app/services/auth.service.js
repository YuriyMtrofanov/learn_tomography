import axios from "axios";
import configFile from "../config.json";
import localStorageService from "./localStorage.service";

const apiKey = "AIzaSyCWkDmZ4-Tm2scgRH4qMgxKuVbvaog1qmc";
const refreshEndpoint = `https://securetoken.googleapis.com/v1/token?key=${apiKey}`;

const httpAuth = axios.create({
    baseURL: configFile.authEndpoint,
    params: {
        key: process.env.REACT_APP_FIREBASE_KEY.slice(0, 39)
    }
});

// httpAuth.interceptors.request.use(
//     async function (config) {
//         const containSemicolon = /;/gi.test(config.url);
//         config.url =
//         (containSemicolon ? config.url.slice(0, -1) : config.url);
//         console.log(containSemicolon, config.url);
//         return config;
//     }
// );

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
        const { data } = await httpAuth.post(refreshEndpoint, {
            grant_type: "refresh_token",
            refresh_token: localStorageService.getRefreshToken()
        });
        return data;
    }
};

export default authService;
