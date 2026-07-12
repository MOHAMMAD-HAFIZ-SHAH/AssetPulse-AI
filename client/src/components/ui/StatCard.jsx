export default function StatCard({
    title,
    value,
    icon,
    color = "bg-indigo-600",
}) {
    const Icon = icon;

    return (
        <div className="rounded-2xl bg-white p-6 shadow-sm border">
            <div className="flex items-center justify-between">
                <div>
                    <p className="text-slate-500">
                        {title}
                    </p>

                    <h2 className="mt-2 text-3xl font-bold">
                        {value}
                    </h2>
                </div>

                <div
                    className={`rounded-xl p-3 text-white ${color}`}
                >
                    {Icon && <Icon size={28} />}
                </div>
            </div>
        </div>
    );
}