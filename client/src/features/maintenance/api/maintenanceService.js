import api from "../../../services/api";

const BASE_URL = "/maintenance";

const maintenanceService = {

    getMaintenanceRequests: async (params = {}) => {

        const response = await api.get(
            BASE_URL,
            {
                params,
            }
        );

        return response.data;

    },

    getMaintenanceById: async (id) => {

        const response = await api.get(
            `${BASE_URL}/${id}`
        );

        return response.data;

    },

    createMaintenance: async (data) => {

        const response = await api.post(
            BASE_URL,
            data,
            {
                headers: {
                    "Content-Type":
                        "multipart/form-data",
                },
            }
        );

        return response.data;

    },

    updateMaintenance: async (id, data) => {

        const response = await api.put(
            `${BASE_URL}/${id}`,
            data,
            {
                headers: {
                    "Content-Type":
                        "multipart/form-data",
                },
            }
        );

        return response.data;

    },

    deleteMaintenance: async (id) => {

        const response = await api.delete(
            `${BASE_URL}/${id}`
        );

        return response.data;

    },

    assignTechnician: async (id, technicianId) => {

        const response = await api.patch(
            `${BASE_URL}/${id}/assign`,
            {
                technicianId,
            }
        );

        return response.data;

    },

    approveMaintenance: async (id) => {

        const response = await api.patch(
            `${BASE_URL}/${id}/approve`
        );

        return response.data;

    },

    rejectMaintenance: async (id, remarks) => {

        const response = await api.patch(
            `${BASE_URL}/${id}/reject`,
            {
                remarks,
            }
        );

        return response.data;

    },

    startMaintenance: async (id) => {

        const response = await api.patch(
            `${BASE_URL}/${id}/start`
        );

        return response.data;

    },

    completeMaintenance: async (id, data) => {

        const response = await api.patch(
            `${BASE_URL}/${id}/complete`,
            data
        );

        return response.data;

    },

    uploadImages: async (id, files) => {

        const formData = new FormData();

        files.forEach((file) => {

            formData.append(
                "images",
                file
            );

        });

        const response = await api.post(
            `${BASE_URL}/${id}/images`,
            formData,
            {
                headers: {
                    "Content-Type":
                        "multipart/form-data",
                },
            }
        );

        return response.data;

    },

    getMaintenanceHistory: async (assetId) => {

        const response = await api.get(
            `${BASE_URL}/asset/${assetId}/history`
        );

        return response.data;

    },

};

export default maintenanceService;