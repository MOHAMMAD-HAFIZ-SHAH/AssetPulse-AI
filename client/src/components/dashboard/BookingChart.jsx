import {
    ResponsiveContainer,
    BarChart,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Bar,
} from "recharts";

const data = [
    { day: "Mon", bookings: 12 },
    { day: "Tue", bookings: 18 },
    { day: "Wed", bookings: 15 },
    { day: "Thu", bookings: 22 },
    { day: "Fri", bookings: 28 },
];

export default function BookingChart() {
    return (
        <div className="rounded-2xl border bg-white p-6">
            <h2 className="mb-5 text-lg font-semibold">
                Weekly Bookings
            </h2>

            <ResponsiveContainer
                width="100%"
                height={300}
            >
                <BarChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" />

                    <XAxis dataKey="day" />

                    <YAxis />

                    <Tooltip />

                    <Bar
                        dataKey="bookings"
                        fill="#4F46E5"
                        radius={[8, 8, 0, 0]}
                    />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
}