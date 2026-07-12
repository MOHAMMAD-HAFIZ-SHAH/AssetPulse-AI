import ReturnStatusBadge from "./ReturnStatusBadge";

const returns = [

    {

        asset: "AF-0001",

        employee: "Mohammad Hafiz Shah",

        returnDate: "15 Jul 2026",

        condition: "Excellent",

        status: "Returned",

    },

    {

        asset: "AF-0002",

        employee: "Ali Ahmad",

        returnDate: "17 Jul 2026",

        condition: "Good",

        status: "Pending",

    },

];

export default function ReturnTable() {

    return (

        <div className="overflow-hidden rounded-2xl border bg-white">

            <table className="w-full">

                <thead className="bg-slate-100">

                    <tr>

                        <th className="px-5 py-4 text-left">
                            Asset
                        </th>

                        <th className="px-5 py-4 text-left">
                            Employee
                        </th>

                        <th className="px-5 py-4 text-left">
                            Return Date
                        </th>

                        <th className="px-5 py-4 text-left">
                            Condition
                        </th>

                        <th className="px-5 py-4 text-left">
                            Status
                        </th>

                    </tr>

                </thead>

                <tbody>

                    {

                        returns.map((item,index)=>(

                            <tr
                                key={index}
                                className="border-t hover:bg-slate-50"
                            >

                                <td className="px-5 py-4">

                                    {item.asset}

                                </td>

                                <td className="px-5 py-4">

                                    {item.employee}

                                </td>

                                <td className="px-5 py-4">

                                    {item.returnDate}

                                </td>

                                <td className="px-5 py-4">

                                    {item.condition}

                                </td>

                                <td className="px-5 py-4">

                                    <ReturnStatusBadge
                                        status={item.status}
                                    />

                                </td>

                            </tr>

                        ))

                    }

                </tbody>

            </table>

        </div>

    );

}