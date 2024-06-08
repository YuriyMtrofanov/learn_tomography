import httpService from "./http.service";

const articleEndpoint = "article/";

const articleService = {
    get: async () => {
        const { data } = await httpService.get(articleEndpoint);
        return data;
    },
    create: async (payload) => {
        const { data } = await httpService.put(articleEndpoint + payload.id, payload);
        return data;
    },
    edit: async (payload) => {
        const { data } = await httpService.patch(articleEndpoint + payload.id, payload);
        return data;
    },
    delete: async (id) => {
        const { data } = await httpService.delete(articleEndpoint + id);
        return data;
    }
};

export default articleService;
