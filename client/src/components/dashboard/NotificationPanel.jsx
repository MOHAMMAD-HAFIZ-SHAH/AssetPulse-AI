const notifications = [
    "3 Assets overdue",
    "5 Maintenance requests pending",
    "2 Audit reports generated",
    "4 Bookings today",
];

export default function NotificationPanel() {
    return (
        <div className="rounded-2xl border bg-white p-6">
            <h2 className="mb-5 text-lg font-semibold">
                Notifications
            </h2>

            <div className="space-y-4">
                {notifications.map((notification, index) => (
                    <div
                        key={index}
                        className="rounded-xl border-l-4 border-indigo-600 bg-slate-50 p-3"
                    >
                        {notification}
                    </div>
                ))}
            </div>
        </div>
    );
}