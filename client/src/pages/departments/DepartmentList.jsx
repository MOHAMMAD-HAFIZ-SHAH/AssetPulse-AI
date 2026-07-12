import { useState } from "react";
import { Plus } from "lucide-react";

import PageHeader from "../../components/ui/PageHeader";
import SearchInput from "../../components/ui/SearchInput";
import AppButton from "../../components/ui/AppButton";
import AppTable from "../../components/ui/AppTable";

export default function DepartmentList() {
    const [search, setSearch] = useState("");

    const columns = [
        "Department",
        "Department Head",
        "Employees",
        "Status",
        "Actions",
    ];

    const data = [
        [
            "Computer Science",
            "Mohammad Hafiz Shah",
            "52",
            "Active",
            "Edit",
        ],
        [
            "Human Resources",
            "Sarah Khan",
            "14",
            "Active",
            "Edit",
        ],
        [
            "Finance",
            "Ali Ahmad",
            "21",
            "Inactive",
            "Edit",
        ],
    ];

    return (
        <div className="space-y-6">

            <PageHeader
                title="Departments"
                subtitle="Manage organization departments"
                action={
                    <AppButton>
                        <Plus size={18} />
                        <span className="ml-2">
                            Add Department
                        </span>
                    </AppButton>
                }
            />

            <SearchInput
                value={search}
                onChange={(e) =>
                    setSearch(e.target.value)
                }
                placeholder="Search Department..."
            />

            <AppTable
                columns={columns}
                data={data}
            />

        </div>
    );
}