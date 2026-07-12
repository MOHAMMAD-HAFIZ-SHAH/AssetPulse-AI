import {
    useQuery,
    useMutation,
    useQueryClient,
} from "@tanstack/react-query";

import assetService from "../api/assetService";

const QUERY_KEY = "assets";

export function useAssets(params = {}) {
    return useQuery({
        queryKey: [QUERY_KEY, params],
        queryFn: () => assetService.getAssets(params),
        staleTime: 1000 * 60 * 5,
    });
}

export function useAsset(id) {
    return useQuery({
        queryKey: [QUERY_KEY, id],
        queryFn: () => assetService.getAssetById(id),
        enabled: !!id,
    });
}

export function useCreateAsset() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: assetService.createAsset,

        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: [QUERY_KEY],
            });
        },
    });
}

export function useUpdateAsset() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: ({ id, data }) =>
            assetService.updateAsset(id, data),

        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: [QUERY_KEY],
            });
        },
    });
}

export function useDeleteAsset() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: assetService.deleteAsset,

        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: [QUERY_KEY],
            });
        },
    });
}

export function useAssetHistory(id) {
    return useQuery({
        queryKey: ["asset-history", id],
        queryFn: () => assetService.getAssetHistory(id),
        enabled: !!id,
    });
}