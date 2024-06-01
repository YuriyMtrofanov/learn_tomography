import axios from "axios";
import configFile from "../config.json";
import localStorageService from "./localStorage.service";
import authService from "./auth.service";
import transformData from "../utils/transformData";

const http = axios.create({
    baseURL: configFile.apiEndpoint
});

http.interceptors.request.use(
    async function (config) {
        const refreshToken = localStorageService.getRefreshToken();
        const expiresDate = localStorageService.getExpiresDateToken();
        if (configFile.isFirebase) {
            const containSlash = /\/$/gi.test(config.url);
            config.url =
                (containSlash ? config.url.slice(0, -1) : config.url) + ".json";
            // проверка срока службы access_token-а и запрос на его обновление
            if (refreshToken && expiresDate < Date.now()) {
                const data = await authService.refresh({
                    grant_type: "refresh_token",
                    refresh_token: refreshToken
                });
                localStorageService.setTokens({
                    idToken: data.id_token,
                    refreshToken: data.refresh_token,
                    expiresIn: data.expires_in,
                    localId: data.user_id
                });
            }
            // const accessToken = localStorageService.getAccessToken();
            // if (accessToken) {
            //     config.params = { ...config.params, auth: accessToken };
            // }
        }
        return config;
    }
);

// Перехват ответа от сервера и отработка ошибок ответов
http.interceptors.response.use(
    (res) => {
        if (configFile.isFirebase) {
            res.data = { content: transformData(res.data) };
            // в данном случае мы получаем объект res.data = { data: {{}, {}, {}} }
            // и мы его приводим к виду res.data = { content: [{}, {}, {}] }
            // то есть изначально получаем объект data и трансформируем его в массив content
        }
        return res;
    },
    function (error) {
        const expectedErrors =
            error.response &&
            error.response.status >= 400 &&
            error.response.status < 500;
        if (!expectedErrors) {
            console.error("error", error);
        }
        return Promise.reject(error);
    }
);

const httpService = {
    get: http.get,
    post: http.post,
    put: http.put,
    patch: http.patch,
    delete: http.delete
};

export default httpService;
