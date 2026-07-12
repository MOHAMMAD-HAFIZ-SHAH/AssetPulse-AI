export default function TransferStatusBadge({ status }) {

    const styles = {

        Pending: "bg-yellow-100 text-yellow-700",

        Approved: "bg-green-100 text-green-700",

        Rejected: "bg-red-100 text-red-700",

    };

    return (

        <span
            className={`rounded-full px-3 py-1 text-xs font-semibold ${styles[status]}`}
        >
            {status}
        </span>

    );

}