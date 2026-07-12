import {
    ResponsiveContainer,
    PieChart,
    Pie,
    Cell,
    Tooltip,
} from "recharts";

const data = [
    { name: "Available", value: 450 },
    { name: "Allocated", value: 520 },
    { name: "Maintenance", value: 120 },
    { name: "Lost", value: 30 },
];

const colors = [
    "#4F46E5",
    "#10B981",
    "#F59E0B",
    "#EF4444",
];

export default function AssetChart() {
    return (
        <div className="rounded-2xl border bg-white p-6">
            <h2 className="mb-5 text-lg font-semibold">
                Asset Distribution
            </h2>

            <ResponsiveContainer
                width="100%"
                height={300}
            >
                <PieChart>
                    <Pie
                        data={data}
                        dataKey="value"
                        outerRadius={100}
                    >
                        {data.map((_, index) => (
                            <Cell
                                key={index}
                                fill={colors[index]}
                            />
                        ))}
                    </Pie>

                    <Tooltip />
                </PieChart>
            </ResponsiveContainer>
        </div>
    );
}