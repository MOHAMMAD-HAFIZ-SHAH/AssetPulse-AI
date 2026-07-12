import {
    useQuery,
    useMutation,
    useQueryClient,
} from "@tanstack/react-query";

import bookingService from "../api/bookingService";

const QUERY_KEY = "bookings";

export function useBookings(params = {}) {

    return useQuery({

        queryKey: [QUERY_KEY, params],

        queryFn: () =>
            bookingService.getBookings(params),

    });

}

export function useBooking(id) {

    return useQuery({

        queryKey: [QUERY_KEY, id],

        queryFn: () =>
            bookingService.getBookingById(id),

        enabled: !!id,

    });

}

export function useCreateBooking() {

    const queryClient = useQueryClient();

    return useMutation({

        mutationFn: bookingService.createBooking,

        onSuccess: () => {

            queryClient.invalidateQueries({

                queryKey: [QUERY_KEY],

            });

        },

    });

}

export function useUpdateBooking() {

    const queryClient = useQueryClient();

    return useMutation({

        mutationFn: ({ id, data }) =>
            bookingService.updateBooking(id, data),

        onSuccess: () => {

            queryClient.invalidateQueries({

                queryKey: [QUERY_KEY],

            });

        },

    });

}