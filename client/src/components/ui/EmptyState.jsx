import { Inbox } from "lucide-react";

export default function EmptyState({
    title = "No Data Found",
    description = "Nothing to display."
}) {
    return (
        <div className="flex flex-col items-center justify-center rounded-2xl border bg-white py-16">
            <Inbox
                size={50}
                className="text-slate-400"
            />

            <h2 className="mt-4 text-xl font-semibold">
                {title}
            </h2>

            <p className="mt-2 text-slate-500">
                {description}
            </p>
        </div>
    );
}