import {
    useQuery,
    useMutation,
    useQueryClient,
} from "@tanstack/react-query";

import allocationService from "../api/allocationService";

const QUERY_KEY = "allocations";

export function useAllocations(params = {}) {

    return useQuery({

        queryKey: [QUERY_KEY, params],

        queryFn: () =>
            allocationService.getAllocations(params),

        staleTime: 1000 * 60 * 5,

    });

}

export function useAllocation(id) {

    return useQuery({

        queryKey: [QUERY_KEY, id],

        queryFn: () =>
            allocationService.getAllocationById(id),

        enabled: !!id,

    });

}

export function useCreateAllocation() {

    const queryClient = useQueryClient();

    return useMutation({

        mutationFn: allocationService.createAllocation,

        onSuccess: () => {

            queryClient.invalidateQueries({

                queryKey: [QUERY_KEY],

            });

        },

    });

}

export function useUpdateAllocation() {

    const queryClient = useQueryClient();

    return useMutation({

        mutationFn: ({ id, data }) =>

            allocationService.updateAllocation(id, data),

        onSuccess: () => {

            queryClient.invalidateQueries({

                queryKey: [QUERY_KEY],

            });

        },

    });

}

export function useTransferAllocation() {

    const queryClient = useQueryClient();

    return useMutation({

        mutationFn: ({ id, data }) =>

            allocationService.transferAllocation(id, data),

        onSuccess: () => {

            queryClient.invalidateQueries({

                queryKey: [QUERY_KEY],

            });

        },

    });

}

export function useReturnAsset() {

    const queryClient = useQueryClient();

    return useMutation({

        mutationFn: ({ id, data }) =>

            allocationService.returnAsset(id, data),

        onSuccess: () => {

            queryClient.invalidateQueries({

                queryKey: [QUERY_KEY],

            });

        },

    });

}

export function useCancelAllocation() {

    const queryClient = useQueryClient();

    return useMutation({

        mutationFn: ({ id, remarks }) =>

            allocationService.cancelAllocation(id, remarks),

        onSuccess: () => {

            queryClient.invalidateQueries({

                queryKey: [QUERY_KEY],

            });

        },

    });

}

export function useDeleteAllocation() {

    const queryClient = useQueryClient();

    return useMutation({

        mutationFn: allocationService.deleteAllocation,

        onSuccess: () => {

            queryClient.invalidateQueries({

                queryKey: [QUERY_KEY],

            });

        },

    });

}

export function useAllocationHistory(assetId) {

    return useQuery({

        queryKey: ["allocation-history", assetId],

        queryFn: () =>

            allocationService.getAllocationHistory(assetId),

        enabled: !!assetId,

    });

}

export function useEmployeeAllocations(employeeId) {

    return useQuery({

        queryKey: ["employee-allocations", employeeId],

        queryFn: () =>

            allocationService.getEmployeeAllocations(employeeId),

        enabled: !!employeeId,

    });

}

export function useDepartmentAllocations(departmentId) {

    return useQuery({

        queryKey: ["department-allocations", departmentId],

        queryFn: () =>

            allocationService.getDepartmentAllocations(departmentId),

        enabled: !!departmentId,

    });

}