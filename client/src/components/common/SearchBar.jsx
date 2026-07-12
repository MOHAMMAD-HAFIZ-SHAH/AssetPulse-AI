import { Search } from "lucide-react";

export default function SearchBar({
    placeholder = "Search...",
    value,
    onChange,
}) {
    return (
        <div className="relative">
            <Search
                size={18}
                className="absolute left-4 top-3.5 text-slate-400"
            />

            <input
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                className="w-full rounded-xl border border-slate-300 py-3 pl-11 pr-4 outline-none focus:border-indigo-600"
            />
        </div>
    );
}