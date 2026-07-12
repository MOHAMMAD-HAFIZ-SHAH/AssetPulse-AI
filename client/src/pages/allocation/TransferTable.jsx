import TransferStatusBadge from "./TransferStatusBadge";

const transfers = [

    {
        asset: "AF-0001",
        from: "Rahul Sharma",
        to: "Mohammad Hafiz Shah",
        date: "12 Jul 2026",
        status: "Pending",
    },

    {
        asset: "AF-0002",
        from: "Ali Ahmad",
        to: "Sarah Khan",
        date: "10 Jul 2026",
        status: "Approved",
    },

];

export default function TransferTable() {

    return (

        <div className="overflow-hidden rounded-2xl border bg-white">

            <table className="w-full">

                <thead className="bg-slate-100">

                    <tr>

                        <th className="px-5 py-4 text-left">Asset</th>

                        <th className="px-5 py-4 text-left">From</th>

                        <th className="px-5 py-4 text-left">To</th>

                        <th className="px-5 py-4 text-left">Date</th>

                        <th className="px-5 py-4 text-left">Status</th>

                    </tr>

                </thead>

                <tbody>

                    {transfers.map((item, index) => (

                        <tr
                            key={index}
                            className="border-t hover:bg-slate-50"
                        >

                            <td className="px-5 py-4">{item.asset}</td>

                            <td className="px-5 py-4">{item.from}</td>

                            <td className="px-5 py-4">{item.to}</td>

                            <td className="px-5 py-4">{item.date}</td>

                            <td className="px-5 py-4">

                                <TransferStatusBadge
                                    status={item.status}
                                />

                            </td>

                        </tr>

                    ))}

                </tbody>

            </table>

        </div>

    );

}