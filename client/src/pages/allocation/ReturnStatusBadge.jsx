export default function ReturnStatusBadge({ status }) {

    const styles = {

        Returned:
            "bg-green-100 text-green-700",

        Pending:
            "bg-yellow-100 text-yellow-700",

        Rejected:
            "bg-red-100 text-red-700",

    };

    return (

        <span
            className={`rounded-full px-3 py-1 text-xs font-semibold ${styles[status]}`}
        >

            {status}

        </span>

    );

}