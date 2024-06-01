import httpService from "./http.service";
import localStorageService from "./localStorage.service";

const userEndpoint = "user/";

const userService = {
    createUser: async (payload) => {
        const { data } = await httpService.put(userEndpoint + payload.id, payload); // работает
        return data;
    },
    getUsersList: async () => {
        const { data } = await httpService.get(userEndpoint);
        return data;
    },
    getCurrentUser: async () => {
        const { data } = await httpService.get(
            userEndpoint + localStorageService.getUserId()
        );
        return data;
    },
    editUser: async (payload) => {
        const { data } = await httpService.patch(userEndpoint + localStorageService.getUserId(), payload);
        return data;
    },
    deleteUser: async (id) => {
        const URL = `${userEndpoint}/${id}.json`;
        const { data } = await httpService.delete(URL);
        return data;
    }
};
export default userService;
