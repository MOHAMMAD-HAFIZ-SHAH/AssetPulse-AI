import { useMemo, useState } from "react";
import {
    Eye,
    Pencil,
    Trash2,
    ChevronLeft,
    ChevronRight,
} from "lucide-react";

import AllocationStatusBadge from "./AllocationStatusBadge";
import AppButton from "../../../components/ui/AppButton";

export default function AllocationTable({

    allocations = [],

    loading = false,

    page = 1,

    totalPages = 1,

    onPageChange,

    onView,

    onEdit,

    onDelete,

}) {

    const [selectedRows, setSelectedRows] = useState([]);

    const allSelected = useMemo(() => {

        if (!allocations.length) return false;

        return selectedRows.length === allocations.length;

    }, [allocations, selectedRows]);

    const toggleRow = (id) => {

        if (selectedRows.includes(id)) {

            setSelectedRows(

                selectedRows.filter(item => item !== id)

            );

        } else {

            setSelectedRows([

                ...selectedRows,

                id,

            ]);

        }

    };

    const toggleAll = () => {

        if (allSelected) {

            setSelectedRows([]);

        } else {

            setSelectedRows(

                allocations.map(item => item.id)

            );

        }

    };

    if (loading) {

        return (

            <div className="rounded-2xl border bg-white p-8">

                <div className="animate-pulse space-y-4">

                    {

                        Array.from({ length: 8 }).map((_, index) => (

                            <div
                                key={index}
                                className="h-12 rounded-lg bg-slate-200"
                            />

                        ))

                    }

                </div>

            </div>

        );

    }

    if (!loading && allocations.length === 0) {

        return (

            <div className="rounded-2xl border bg-white py-20 text-center">

                <h2 className="text-2xl font-semibold">

                    No Allocations Found

                </h2>

                <p className="mt-2 text-slate-500">

                    Allocate your first asset to begin.

                </p>

            </div>

        );

    }

    return (

        <div className="overflow-hidden rounded-2xl border bg-white shadow-sm">

            <div className="flex items-center justify-between border-b px-6 py-4">

                <h2 className="text-lg font-semibold">

                    Asset Allocations

                </h2>

                {

                    selectedRows.length > 0 && (

                        <div className="flex gap-3">

                            <AppButton variant="secondary">

                                Export

                            </AppButton>

                            <AppButton variant="danger">

                                Delete Selected

                            </AppButton>

                        </div>

                    )

                }

            </div>

            <div className="overflow-x-auto">

                <table className="w-full">

                    <thead className="bg-slate-100">

                        <tr>

                            <th className="px-5 py-4">

                                <input
                                    type="checkbox"
                                    checked={allSelected}
                                    onChange={toggleAll}
                                />

                            </th>

                            <th className="px-5 py-4 text-left">

                                Allocation ID

                            </th>

                            <th className="px-5 py-4 text-left">

                                Asset

                            </th>

                            <th className="px-5 py-4 text-left">

                                Allocated To

                            </th>

                            <th className="px-5 py-4 text-left">

                                Type

                            </th>

                            <th className="px-5 py-4 text-left">

                                Allocation Date

                            </th>

                            <th className="px-5 py-4 text-left">

                                Return Date

                            </th>

                            <th className="px-5 py-4 text-left">

                                Status

                            </th>

                            <th className="px-5 py-4 text-center">

                                Actions

                            </th>

                        </tr>

                    </thead>

                    <tbody>

                        {

                            allocations.map((allocation) => (

                                <tr
                                    key={allocation.id}
                                    className="border-t hover:bg-slate-50"
                                >

                                    <td className="px-5 py-4">

                                        <input
                                            type="checkbox"
                                            checked={selectedRows.includes(allocation.id)}
                                            onChange={() => toggleRow(allocation.id)}
                                        />

                                    </td>

                                    <td className="px-5 py-4 font-medium">

                                        {allocation.allocationNumber}

                                    </td>

                                    <td className="px-5 py-4">

                                        <div>

                                            <p className="font-medium">

                                                {allocation.asset?.assetName}

                                            </p>

                                            <p className="text-xs text-slate-500">

                                                {allocation.asset?.assetTag}

                                            </p>

                                        </div>

                                    </td>

                                    <td className="px-5 py-4">

                                        {

                                            allocation.employee

                                                ? allocation.employee.fullName

                                                : allocation.department?.name

                                        }

                                    </td>

                                    <td className="px-5 py-4">

                                        {allocation.allocationType}

                                    </td>

                                    <td className="px-5 py-4">

                                        {allocation.allocationDate}

                                    </td>

                                    <td className="px-5 py-4">

                                        {

                                            allocation.expectedReturnDate ||

                                            "-"

                                        }

                                    </td>

                                    <td className="px-5 py-4">

                                        <AllocationStatusBadge

                                            status={allocation.status}

                                        />

                                    </td>

                                    <td className="px-5 py-4">

                                        <div className="flex justify-center gap-3">

                                            <button
                                                onClick={() => onView(allocation)}
                                            >

                                                <Eye
                                                    size={18}
                                                    className="text-blue-600"
                                                />

                                            </button>

                                            <button
                                                onClick={() => onEdit(allocation)}
                                            >

                                                <Pencil
                                                    size={18}
                                                    className="text-yellow-600"
                                                />

                                            </button>

                                            <button
                                                onClick={() => onDelete(allocation)}
                                            >

                                                <Trash2
                                                    size={18}
                                                    className="text-red-600"
                                                />

                                            </button>

                                        </div>

                                    </td>

                                </tr>

                            ))

                        }

                    </tbody>

                </table>

            </div>

            <div className="flex items-center justify-between border-t bg-slate-50 px-6 py-4">

                <span className="text-sm text-slate-600">

                    Showing {allocations.length} Records

                </span>

                <div className="flex items-center gap-3">

                    <button

                        disabled={page === 1}

                        onClick={() => onPageChange(page - 1)}

                        className="rounded-lg border bg-white p-2 disabled:opacity-40"

                    >

                        <ChevronLeft size={18} />

                    </button>

                    <span className="rounded-lg border bg-white px-4 py-2">

                        Page {page} of {totalPages}

                    </span>

                    <button

                        disabled={page === totalPages}

                        onClick={() => onPageChange(page + 1)}

                        className="rounded-lg border bg-white p-2 disabled:opacity-40"

                    >

                        <ChevronRight size={18} />

                    </button>

                </div>

            </div>

        </div>

    );

}