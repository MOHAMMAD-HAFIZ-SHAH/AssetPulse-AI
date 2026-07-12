import {
    LayoutDashboard,
    Boxes,
    ArrowLeftRight,
    CalendarDays,
    Wrench,
    ClipboardCheck,
    Building2,
    Users,
    FileBarChart2,
    Bell,
    Settings,
} from "lucide-react";

import { NavLink } from "react-router-dom";

const menu = [
    {
        title: "Dashboard",
        path: "/dashboard",
        icon: LayoutDashboard,
    },
    {
        title: "Assets",
        path: "/assets",
        icon: Boxes,
    },
    {
        title: "Allocation",
        path: "/allocation",
        icon: ArrowLeftRight,
    },
    {
        title: "Bookings",
        path: "/bookings",
        icon: CalendarDays,
    },
    {
        title: "Maintenance",
        path: "/maintenance",
        icon: Wrench,
    },
    {
        title: "Audit",
        path: "/audit",
        icon: ClipboardCheck,
    },
    {
        title: "Departments",
        path: "/departments",
        icon: Building2,
    },
    {
        title: "Employees",
        path: "/employees",
        icon: Users,
    },
    {
        title: "Reports",
        path: "/reports",
        icon: FileBarChart2,
    },
    {
        title: "Notifications",
        path: "/notifications",
        icon: Bell,
    },
    {
        title: "Settings",
        path: "/settings",
        icon: Settings,
    },
];

export default function Sidebar() {
    return (
        <aside className="w-72 bg-slate-900 text-white flex flex-col">
            <div className="h-20 border-b border-slate-700 flex items-center justify-center">
                <h1 className="text-2xl font-bold">
                    AssetPulse AI
                </h1>
            </div>

            <nav className="flex-1 px-3 py-6 space-y-2">
                {menu.map((item) => {
                    const Icon = item.icon;

                    return (
                        <NavLink
                            key={item.title}
                            to={item.path}
                            className={({ isActive }) =>
                                `flex items-center gap-3 rounded-xl px-4 py-3 transition ${
                                    isActive
                                        ? "bg-indigo-600"
                                        : "hover:bg-slate-800"
                                }`
                            }
                        >
                            <Icon size={20} />
                            {item.title}
                        </NavLink>
                    );
                })}
            </nav>
        </aside>
    );
}