import { UserCircle2 } from "lucide-react";

export default function Avatar({
    name = "Admin",
    role = "Administrator",
}) {
    return (
        <div className="flex items-center gap-3">
            <UserCircle2
                size={42}
                className="text-slate-700"
            />

            <div>
                <h4 className="font-semibold">
                    {name}
                </h4>

                <p className="text-sm text-slate-500">
                    {role}
                </p>
            </div>
        </div>
    );
}