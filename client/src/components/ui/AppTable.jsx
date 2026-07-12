export default function AppTable({
    columns,
    data,
}) {
    return (
        <div className="overflow-hidden rounded-2xl border bg-white">
            <table className="w-full">
                <thead className="bg-slate-100">
                    <tr>
                        {columns.map((column) => (
                            <th
                                key={column}
                                className="px-5 py-4 text-left text-sm font-semibold"
                            >
                                {column}
                            </th>
                        ))}
                    </tr>
                </thead>

                <tbody>
                    {data.map((row, index) => (
                        <tr
                            key={index}
                            className="border-t hover:bg-slate-50"
                        >
                            {row.map((item, i) => (
                                <td
                                    key={i}
                                    className="px-5 py-4"
                                >
                                    {item}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}