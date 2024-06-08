import httpService from "./http.service";

const articleTitlesEndpoint = "title/";

const articleTitlesService = {
    get: async () => {
        const { data } = await httpService.get(articleTitlesEndpoint);
        return data;
    },
    create: async (payload) => {
        const { data } = await httpService.put(articleTitlesEndpoint + payload.id, payload);
        return data;
    },
    edit: async (payload) => {
        const { data } = await httpService.patch(articleTitlesEndpoint + payload.id, payload);
        return data;
    },
    delete: async (id) => {
        const { data } = await httpService.delete(articleTitlesEndpoint + id);
        return data;
    }
};

export default articleTitlesService;
