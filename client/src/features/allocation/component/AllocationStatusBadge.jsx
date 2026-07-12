import { ALLOCATION_STATUS } from "../constants/allocationStatus";

const statusStyles = {

    [ALLOCATION_STATUS.PENDING]:
        "bg-yellow-100 text-yellow-700 border-yellow-300",

    [ALLOCATION_STATUS.ALLOCATED]:
        "bg-green-100 text-green-700 border-green-300",

    [ALLOCATION_STATUS.TRANSFERRED]:
        "bg-blue-100 text-blue-700 border-blue-300",

    [ALLOCATION_STATUS.RETURNED]:
        "bg-purple-100 text-purple-700 border-purple-300",

    [ALLOCATION_STATUS.CANCELLED]:
        "bg-red-100 text-red-700 border-red-300",

};

export default function AllocationStatusBadge({

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