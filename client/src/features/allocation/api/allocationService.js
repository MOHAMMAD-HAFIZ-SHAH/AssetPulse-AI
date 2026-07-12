import api from "../../../services/api";

const BASE_URL = "/allocations";

const allocationService = {

    getAllocations: async (params = {}) => {

        const response = await api.get(
            BASE_URL,
            {
                params,
            }
        );

        return response.data;

    },

    getAllocationById: async (id) => {

        const response = await api.get(
            `${BASE_URL}/${id}`
        );

        return response.data;

    },

    createAllocation: async (data) => {

        const response = await api.post(
            BASE_URL,
            data
        );

        return response.data;

    },

    updateAllocation: async (id, data) => {

        const response = await api.put(
            `${BASE_URL}/${id}`,
            data
        );

        return response.data;

    },

    transferAllocation: async (id, data) => {

        const response = await api.patch(
            `${BASE_URL}/${id}/transfer`,
            data
        );

        return response.data;

    },

    returnAsset: async (id, data) => {

        const response = await api.patch(
            `${BASE_URL}/${id}/return`,
            data
        );

        return response.data;

    },

    cancelAllocation: async (id, remarks) => {

        const response = await api.patch(
            `${BASE_URL}/${id}/cancel`,
            {
                remarks,
            }
        );

        return response.data;

    },

    deleteAllocation: async (id) => {

        const response = await api.delete(
            `${BASE_URL}/${id}`
        );

        return response.data;

    },

    getAllocationHistory: async (assetId) => {

        const response = await api.get(
            `${BASE_URL}/asset/${assetId}/history`
        );

        return response.data;

    },

    getEmployeeAllocations: async (employeeId) => {

        const response = await api.get(
            `${BASE_URL}/employee/${employeeId}`
        );

        return response.data;

    },

    getDepartmentAllocations: async (departmentId) => {

        const response = await api.get(
            `${BASE_URL}/department/${departmentId}`
        );

        return response.data;

    },

    allocateUsingQR: async (qrCode) => {

        const response = await api.post(
            `${BASE_URL}/qr/allocate`,
            {
                qrCode,
            }
        );

        return response.data;

    },

    returnUsingQR: async (qrCode) => {

        const response = await api.post(
            `${BASE_URL}/qr/return`,
            {
                qrCode,
            }
        );

        return response.data;

    },

};

export default allocationService;