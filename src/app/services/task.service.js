import httpService from "./http.service";
const taskEndpoint = "task/";

const taskService = {
    fetchAll: async () => {
        const { data } = await httpService.get(taskEndpoint);
        return data;
    },
    getById: async (id) => {
        const { data } = await httpService.get(taskEndpoint + id);
        return data;
    },
    create: async (content) => {
        const { data } = await httpService.put(
            taskEndpoint + content._id,
            content
        );
        return data;
    },
    delete: async (id) => {
        const { data } = await httpService.delete(taskEndpoint + id);
        return data;
    },
    update: async (updateData) => {
        const { data } = await httpService.put(
            taskEndpoint + updateData._id,
            updateData
        );
        return data;
    }
};

export default taskService;
