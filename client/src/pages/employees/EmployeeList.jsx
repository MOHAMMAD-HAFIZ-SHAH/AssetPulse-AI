import { useState } from "react";
import { Plus } from "lucide-react";

import PageHeader from "../../components/ui/PageHeader";
import SearchInput from "../../components/ui/SearchInput";
import AppButton from "../../components/ui/AppButton";
import AppTable from "../../components/ui/AppTable";

export default function EmployeeList() {
    const [search, setSearch] = useState("");

    const columns = [
        "Employee ID",
        "Employee",
        "Department",
        "Role",
        "Status",
        "Actions",
    ];

    const data = [
        [
            "EMP001",
            "Mohammad Hafiz Shah",
            "Computer Science",
            "Asset Manager",
            "Active",
            "View",
        ],
        [
            "EMP002",
            "Ali Ahmad",
            "Finance",
            "Employee",
            "Active",
            "View",
        ],
        [
            "EMP003",
            "Sarah Khan",
            "HR",
            "Department Head",
            "Active",
            "View",
        ],
    ];

    return (
        <div className="space-y-6">

            <PageHeader
                title="Employees"
                subtitle="Manage organization employees"
                action={
                    <AppButton>
                        <Plus size={18}/>
                        <span className="ml-2">
                            Add Employee
                        </span>
                    </AppButton>
                }
            />

            <SearchInput
                value={search}
                onChange={(e)=>setSearch(e.target.value)}
                placeholder="Search Employee..."
            />

            <AppTable
                columns={columns}
                data={data}
            />

        </div>
    );
}