import api from "../../../services/api";

const BASE_URL = "/assets";

const assetService = {
    getAssets: async (params = {}) => {
        const response = await api.get(BASE_URL, {
            params,
        });

        return response.data;
    },

    getAssetById: async (id) => {
        const response = await api.get(
            `${BASE_URL}/${id}`
        );

        return response.data;
    },

    createAsset: async (data) => {
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

    updateAsset: async (id, data) => {
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

    deleteAsset: async (id) => {
        const response = await api.delete(
            `${BASE_URL}/${id}`
        );

        return response.data;
    },

    getAssetHistory: async (id) => {
        const response = await api.get(
            `${BASE_URL}/${id}/history`
        );

        return response.data;
    },

    allocateAsset: async (id, data) => {
        const response = await api.post(
            `${BASE_URL}/${id}/allocate`,
            data
        );

        return response.data;
    },

    transferAsset: async (id, data) => {
        const response = await api.post(
            `${BASE_URL}/${id}/transfer`,
            data
        );

        return response.data;
    },

    returnAsset: async (id, data) => {
        const response = await api.post(
            `${BASE_URL}/${id}/return`,
            data
        );

        return response.data;
    },

    uploadImage: async (id, file) => {
        const formData = new FormData();

        formData.append("image", file);

        const response = await api.post(
            `${BASE_URL}/${id}/image`,
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

    generateQRCode: async (id) => {
        const response = await api.get(
            `${BASE_URL}/${id}/qrcode`
        );

        return response.data;
    },

    downloadQRCode: async (id) => {
        const response = await api.get(
            `${BASE_URL}/${id}/qrcode/download`,
            {
                responseType: "blob",
            }
        );

        return response.data;
    },
};

export default assetService;