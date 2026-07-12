import { Bell, Search } from "lucide-react";

export default function Navbar() {
    return (
        <header className="h-20 bg-white border-b px-8 flex items-center justify-between">
            <div className="relative w-96">
                <Search
                    size={18}
                    className="absolute left-4 top-3.5 text-slate-400"
                />

                <input
                    type="text"
                    placeholder="Search assets, employees..."
                    className="w-full rounded-xl border border-slate-300 py-3 pl-11 pr-4 outline-none focus:border-indigo-600"
                />
            </div>

            <button className="relative">
                <Bell size={22} />

                <span className="absolute -top-1 -right-1 h-2.5 w-2.5 rounded-full bg-red-500"></span>
            </button>
        </header>
    );
}