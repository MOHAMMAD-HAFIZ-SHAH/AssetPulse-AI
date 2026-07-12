import {
    useQuery,
    useMutation,
    useQueryClient,
} from "@tanstack/react-query";

import maintenanceService from "../api/maintenanceService";

const QUERY_KEY = "maintenance";

export function useMaintenanceRequests(params = {}) {

    return useQuery({

        queryKey: [QUERY_KEY, params],

        queryFn: () =>
            maintenanceService.getMaintenanceRequests(params),

        staleTime: 1000 * 60 * 5,

    });

}

export function useMaintenance(id) {

    return useQuery({

        queryKey: [QUERY_KEY, id],

        queryFn: () =>
            maintenanceService.getMaintenanceById(id),

        enabled: !!id,

    });

}

export function useCreateMaintenance() {

    const queryClient = useQueryClient();

    return useMutation({

        mutationFn: maintenanceService.createMaintenance,

        onSuccess: () => {

            queryClient.invalidateQueries({

                queryKey: [QUERY_KEY],

            });

        },

    });

}

export function useUpdateMaintenance() {

    const queryClient = useQueryClient();

    return useMutation({

        mutationFn: ({ id, data }) =>

            maintenanceService.updateMaintenance(id, data),

        onSuccess: () => {

            queryClient.invalidateQueries({

                queryKey: [QUERY_KEY],

            });

        },

    });

}

export function useDeleteMaintenance() {

    const queryClient = useQueryClient();

    return useMutation({

        mutationFn: maintenanceService.deleteMaintenance,

        onSuccess: () => {

            queryClient.invalidateQueries({

                queryKey: [QUERY_KEY],

            });

        },

    });

}

export function useAssignTechnician() {

    const queryClient = useQueryClient();

    return useMutation({

        mutationFn: ({ id, technicianId }) =>

            maintenanceService.assignTechnician(id, technicianId),

        onSuccess: () => {

            queryClient.invalidateQueries({

                queryKey: [QUERY_KEY],

            });

        },

    });

}

export function useApproveMaintenance() {

    const queryClient = useQueryClient();

    return useMutation({

        mutationFn: maintenanceService.approveMaintenance,

        onSuccess: () => {

            queryClient.invalidateQueries({

                queryKey: [QUERY_KEY],

            });

        },

    });

}

export function useRejectMaintenance() {

    const queryClient = useQueryClient();

    return useMutation({

        mutationFn: ({ id, remarks }) =>

            maintenanceService.rejectMaintenance(id, remarks),

        onSuccess: () => {

            queryClient.invalidateQueries({

                queryKey: [QUERY_KEY],

            });

        },

    });

}

export function useStartMaintenance() {

    const queryClient = useQueryClient();

    return useMutation({

        mutationFn: maintenanceService.startMaintenance,

        onSuccess: () => {

            queryClient.invalidateQueries({

                queryKey: [QUERY_KEY],

            });

        },

    });

}

export function useCompleteMaintenance() {

    const queryClient = useQueryClient();

    return useMutation({

        mutationFn: ({ id, data }) =>

            maintenanceService.completeMaintenance(id, data),

        onSuccess: () => {

            queryClient.invalidateQueries({

                queryKey: [QUERY_KEY],

            });

        },

    });

}

export function useMaintenanceHistory(assetId) {

    return useQuery({

        queryKey: ["maintenance-history", assetId],

        queryFn: () =>

            maintenanceService.getMaintenanceHistory(assetId),

        enabled: !!assetId,

    });

}