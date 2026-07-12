import StatCard from "../ui/StatCard";
import {
    Boxes,
    Users,
    Wrench,
    CalendarDays,
} from "lucide-react";

export default function KPI() {
    return (
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            <StatCard
                title="Total Assets"
                value="1,248"
                icon={Boxes}
                color="bg-indigo-600"
            />

            <StatCard
                title="Employees"
                value="342"
                icon={Users}
                color="bg-emerald-600"
            />

            <StatCard
                title="Maintenance"
                value="19"
                icon={Wrench}
                color="bg-red-600"
            />

            <StatCard
                title="Bookings"
                value="74"
                icon={CalendarDays}
                color="bg-amber-500"
            />
        </div>
    );
}