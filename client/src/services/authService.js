import api from "./api";

const authService = {

    login: async (data) => {
        const response = await api.post(
            "/auth/login",
            data
        );

        return response.data;
    },

    signup: async (data) => {
        const response = await api.post(
            "/auth/signup",
            data
        );

        return response.data;
    },

    forgotPassword: async (email) => {
        const response = await api.post(
            "/auth/forgot-password",
            {
                email,
            }
        );

        return response.data;
    },

    resetPassword: async (
        token,
        password
    ) => {
        const response = await api.post(
            `/auth/reset-password/${token}`,
            {
                password,
            }
        );

        return response.data;
    },

    getProfile: async () => {
        const response = await api.get(
            "/auth/profile"
        );

        return response.data;
    },

    logout: async () => {
        const response = await api.post(
            "/auth/logout"
        );

        return response.data;
    },
};

export default authService;