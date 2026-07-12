export default function AllocationStatusBadge({ status }) {

    const colors = {

        Active: "bg-green-100 text-green-700",

        Returned: "bg-blue-100 text-blue-700",

        Pending: "bg-yellow-100 text-yellow-700",

        Overdue: "bg-red-100 text-red-700",

    };

    return (

        <span
            className={`rounded-full px-3 py-1 text-xs font-semibold ${colors[status]}`}
        >

            {status}

        </span>

    );

}