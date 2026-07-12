import { BOOKING_STATUS } from "../constants/bookingStatus";

const statusStyles = {
    [BOOKING_STATUS.PENDING]:
        "bg-yellow-100 text-yellow-700 border-yellow-300",

    [BOOKING_STATUS.APPROVED]:
        "bg-green-100 text-green-700 border-green-300",

    [BOOKING_STATUS.REJECTED]:
        "bg-red-100 text-red-700 border-red-300",

    [BOOKING_STATUS.CANCELLED]:
        "bg-gray-100 text-gray-700 border-gray-300",

    [BOOKING_STATUS.COMPLETED]:
        "bg-blue-100 text-blue-700 border-blue-300",
};

export default function BookingStatusBadge({
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