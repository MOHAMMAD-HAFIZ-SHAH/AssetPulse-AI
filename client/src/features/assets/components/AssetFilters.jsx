import { Search, RotateCcw } from "lucide-react";
import AppButton from "../../../components/ui/AppButton";

export default function AssetFilters({
    filters,
    departments = [],
    categories = [],
    onChange,
    onReset,
}) {
    return (
        <div className="rounded-2xl border bg-white p-6 shadow-sm">

            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-6">

                <div className="relative">

                    <Search
                        size={18}
                        className="absolute left-3 top-3.5 text-slate-400"
                    />

                    <input
                        type="text"
                        placeholder="Search Asset..."
                        value={filters.search}
                        onChange={(e) =>
                            onChange("search", e.target.value)
                        }
                        className="w-full rounded-xl border border-slate-300 py-3 pl-10 pr-4 outline-none focus:border-indigo-600"
                    />

                </div>

                <select
                    value={filters.category}
                    onChange={(e) =>
                        onChange("category", e.target.value)
                    }
                    className="rounded-xl border border-slate-300 p-3"
                >

                    <option value="">
                        All Categories
                    </option>

                    {categories.map((category) => (

                        <option
                            key={category.id}
                            value={category.id}
                        >
                            {category.name}
                        </option>

                    ))}

                </select>

                <select
                    value={filters.department}
                    onChange={(e) =>
                        onChange("department", e.target.value)
                    }
                    className="rounded-xl border border-slate-300 p-3"
                >

                    <option value="">
                        All Departments
                    </option>

                    {departments.map((department) => (

                        <option
                            key={department.id}
                            value={department.id}
                        >
                            {department.name}
                        </option>

                    ))}

                </select>

                <select
                    value={filters.status}
                    onChange={(e) =>
                        onChange("status", e.target.value)
                    }
                    className="rounded-xl border border-slate-300 p-3"
                >

                    <option value="">
                        All Status
                    </option>

                    <option value="Available">
                        Available
                    </option>

                    <option value="Allocated">
                        Allocated
                    </option>

                    <option value="Reserved">
                        Reserved
                    </option>

                    <option value="Under Maintenance">
                        Under Maintenance
                    </option>

                    <option value="Lost">
                        Lost
                    </option>

                    <option value="Retired">
                        Retired
                    </option>

                </select>

                <input
                    type="date"
                    value={filters.purchaseDate}
                    onChange={(e) =>
                        onChange(
                            "purchaseDate",
                            e.target.value
                        )
                    }
                    className="rounded-xl border border-slate-300 p-3"
                />

                <AppButton
                    variant="secondary"
                    onClick={onReset}
                    className="flex items-center justify-center gap-2"
                >
                    <RotateCcw size={18} />

                    Reset
                </AppButton>

            </div>

        </div>
    );
}