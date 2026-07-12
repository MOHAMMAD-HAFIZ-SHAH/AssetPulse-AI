import { MAINTENANCE_STATUS } from "../constants/maintenanceStatus";

const statusStyles = {
    [MAINTENANCE_STATUS.REQUESTED]:
        "bg-yellow-100 text-yellow-700 border-yellow-300",

    [MAINTENANCE_STATUS.APPROVED]:
        "bg-blue-100 text-blue-700 border-blue-300",

    [MAINTENANCE_STATUS.ASSIGNED]:
        "bg-purple-100 text-purple-700 border-purple-300",

    [MAINTENANCE_STATUS.IN_PROGRESS]:
        "bg-orange-100 text-orange-700 border-orange-300",

    [MAINTENANCE_STATUS.COMPLETED]:
        "bg-green-100 text-green-700 border-green-300",

    [MAINTENANCE_STATUS.CANCELLED]:
        "bg-red-100 text-red-700 border-red-300",
};

export default function MaintenanceStatusBadge({
    status,
}) {

    return (

        <span
            className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold ${
                statusStyles[status] ||
                "bg-slate-100 text-slate-700 border-slate-300"
            }`}
        >

            {status}

        </span>

    );

}