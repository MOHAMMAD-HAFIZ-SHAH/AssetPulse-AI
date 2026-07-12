import { ASSET_STATUS } from "../constants/assetStatus";

const statusStyles = {
    [ASSET_STATUS.AVAILABLE]:
        "bg-green-100 text-green-700 border-green-200",

    [ASSET_STATUS.ALLOCATED]:
        "bg-blue-100 text-blue-700 border-blue-200",

    [ASSET_STATUS.RESERVED]:
        "bg-yellow-100 text-yellow-700 border-yellow-200",

    [ASSET_STATUS.UNDER_MAINTENANCE]:
        "bg-orange-100 text-orange-700 border-orange-200",

    [ASSET_STATUS.LOST]:
        "bg-red-100 text-red-700 border-red-200",

    [ASSET_STATUS.RETIRED]:
        "bg-gray-100 text-gray-700 border-gray-200",

    [ASSET_STATUS.DISPOSED]:
        "bg-slate-200 text-slate-700 border-slate-300",
};

export default function AssetStatusBadge({
    status,
}) {
    return (
        <span
            className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold ${
                statusStyles[status] ||
                "bg-gray-100 text-gray-700 border-gray-200"
            }`}
        >
            {status}
        </span>
    );
}