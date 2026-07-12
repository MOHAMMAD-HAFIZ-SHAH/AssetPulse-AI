import api from "./api";

const allocationService = {

    allocateAsset: async (data) => {

        const response = await api.post(
            "/allocations",
            data
        );

        return response.data;

    },

    transferAsset: async (data) => {

        const response = await api.post(
            "/allocations/transfer",
            data
        );

        return response.data;

    },

    returnAsset: async (data) => {

        const response = await api.post(
            "/allocations/return",
            data
        );

        return response.data;

    },

    getAllocationHistory: async () => {

        const response = await api.get(
            "/allocations/history"
        );

        return response.data;

    },

};

export default allocationService;