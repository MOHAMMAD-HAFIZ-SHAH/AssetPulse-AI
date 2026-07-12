import { Search } from "lucide-react";

export default function SearchInput({
    value,
    onChange,
    placeholder = "Search..."
}) {
    return (
        <div className="relative w-80">
            <Search
                size={18}
                className="absolute left-3 top-3 text-slate-400"
            />

            <input
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                className="w-full rounded-xl border bg-white py-2 pl-10 pr-4 outline-none focus:border-indigo-500"
            />
        </div>
    );
}