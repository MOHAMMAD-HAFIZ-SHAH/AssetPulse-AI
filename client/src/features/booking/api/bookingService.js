import api from "../../../services/api";

const BASE_URL = "/bookings";

const bookingService = {

    getBookings: async (params = {}) => {

        const response = await api.get(BASE_URL, {
            params,
        });

        return response.data;

    },

    getBookingById: async (id) => {

        const response = await api.get(
            `${BASE_URL}/${id}`
        );

        return response.data;

    },

    createBooking: async (data) => {

        const response = await api.post(
            BASE_URL,
            data
        );

        return response.data;

    },

    updateBooking: async (id, data) => {

        const response = await api.put(
            `${BASE_URL}/${id}`,
            data
        );

        return response.data;

    },

    cancelBooking: async (id) => {

        const response = await api.patch(
            `${BASE_URL}/${id}/cancel`
        );

        return response.data;

    },

    approveBooking: async (id) => {

        const response = await api.patch(
            `${BASE_URL}/${id}/approve`
        );

        return response.data;

    },

    rejectBooking: async (id) => {

        const response = await api.patch(
            `${BASE_URL}/${id}/reject`
        );

        return response.data;

    },

};

export default bookingService;