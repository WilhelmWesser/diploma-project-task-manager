import httpService from "./http.service";
const userEndPoint = "user/";

const userService = {
    create: async (content) => {
        const { data } = await httpService.put(
            userEndPoint + content._id,
            content
        );
        return data;
    },
    update: async (updateData) => {
        const { data } = await httpService.put(
            userEndPoint + updateData._id,
            updateData
        );
        return data;
    }
};

export default userService;
