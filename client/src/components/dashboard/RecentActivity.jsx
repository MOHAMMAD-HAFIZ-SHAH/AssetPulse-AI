const activities = [
    "Laptop AF-0101 allocated to Rahul",
    "Meeting Room B booked",
    "Printer AF-023 repaired",
    "Audit completed for HR",
];

export default function RecentActivity() {
    return (
        <div className="rounded-2xl border bg-white p-6">
            <h2 className="mb-5 text-lg font-semibold">
                Recent Activities
            </h2>

            <div className="space-y-4">
                {activities.map((activity, index) => (
                    <div
                        key={index}
                        className="rounded-xl bg-slate-50 p-3"
                    >
                        {activity}
                    </div>
                ))}
            </div>
        </div>
    );
}