import { Bell, Search, UserCircle2 } from "lucide-react";

export default function Header() {
    return (
        <header className="flex h-20 items-center justify-between border-b bg-white px-8">
            <div className="relative w-96">
                <Search
                    size={18}
                    className="absolute left-4 top-3 text-slate-400"
                />

                <input
                    type="text"
                    placeholder="Search assets..."
                    className="w-full rounded-xl border bg-slate-50 py-2 pl-11 pr-4 outline-none focus:ring-2 focus:ring-indigo-500"
                />
            </div>

            <div className="flex items-center gap-6">
                <button className="relative">
                    <Bell size={22} />

                    <span className="absolute -right-1 -top-1 h-2 w-2 rounded-full bg-red-500"></span>
                </button>

                <div className="flex items-center gap-3">
                    <UserCircle2 size={38} />

                    <div>
                        <h3 className="font-semibold">
                            Admin
                        </h3>

                        <p className="text-sm text-slate-500">
                            System Administrator
                        </p>
                    </div>
                </div>
            </div>
        </header>
    );
}