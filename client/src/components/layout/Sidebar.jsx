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

const menus = [
    {
        name: "Dashboard",
        path: "/dashboard",
        icon: LayoutDashboard,
    },
    {
        name: "Assets",
        path: "/assets",
        icon: Boxes,
    },
    {
        name: "Allocation",
        path: "/allocation",
        icon: ArrowLeftRight,
    },
    {
        name: "Bookings",
        path: "/bookings",
        icon: CalendarDays,
    },
    {
        name: "Maintenance",
        path: "/maintenance",
        icon: Wrench,
    },
    {
        name: "Audit",
        path: "/audit",
        icon: ClipboardCheck,
    },
    {
        name: "Departments",
        path: "/departments",
        icon: Building2,
    },
    {
        name: "Employees",
        path: "/employees",
        icon: Users,
    },
    {
        name: "Reports",
        path: "/reports",
        icon: FileBarChart2,
    },
    {
        name: "Notifications",
        path: "/notifications",
        icon: Bell,
    },
    {
        name: "Settings",
        path: "/settings",
        icon: Settings,
    },
];

export default function Sidebar() {
    return (
        <aside className="w-72 bg-slate-900 text-white">
            <div className="border-b border-slate-700 p-6">
                <h1 className="text-2xl font-bold">
                    AssetPulse AI
                </h1>

                <p className="mt-1 text-sm text-slate-400">
                    Enterprise ERP
                </p>
            </div>

            <nav className="mt-4 flex flex-col gap-1 px-3">
                {menus.map((menu) => {
                    const Icon = menu.icon;

                    return (
                        <NavLink
                            key={menu.name}
                            to={menu.path}
                            className={({ isActive }) =>
                                `flex items-center gap-3 rounded-xl px-4 py-3 transition ${
                                    isActive
                                        ? "bg-indigo-600"
                                        : "hover:bg-slate-800"
                                }`
                            }
                        >
                            <Icon size={20} />

                            {menu.name}
                        </NavLink>
                    );
                })}
            </nav>
        </aside>
    );
}