import { useMemo, useState } from "react";
import {
    Eye,
    Pencil,
    Trash2,
    ChevronLeft,
    ChevronRight,
} from "lucide-react";

import MaintenanceStatusBadge from "./MaintenanceStatusBadge";
import AppButton from "../../../components/ui/AppButton";

export default function MaintenanceTable({

    maintenance = [],

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

        if (maintenance.length === 0) return false;

        return selectedRows.length === maintenance.length;

    }, [maintenance, selectedRows]);

    const toggleRow = (id) => {

        if (selectedRows.includes(id)) {

            setSelectedRows(

                selectedRows.filter(item => item !== id)

            );

        }

        else {

            setSelectedRows([

                ...selectedRows,

                id,

            ]);

        }

    };

    const toggleAll = () => {

        if (allSelected) {

            setSelectedRows([]);

        }

        else {

            setSelectedRows(

                maintenance.map(item => item.id)

            );

        }

    };

    if (loading) {

        return (

            <div className="rounded-2xl border bg-white p-8">

                <div className="animate-pulse space-y-4">

                    {

                        Array.from({ length: 8 }).map((_, index)=>(

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

    if (!loading && maintenance.length === 0) {

        return (

            <div className="rounded-2xl border bg-white py-20 text-center">

                <h2 className="text-2xl font-semibold">

                    No Maintenance Requests

                </h2>

                <p className="mt-3 text-slate-500">

                    Create your first maintenance request.

                </p>

            </div>

        );

    }

    return (

        <div className="overflow-hidden rounded-2xl border bg-white shadow-sm">

            <div className="flex items-center justify-between border-b px-6 py-4">

                <h2 className="text-lg font-semibold">

                    Maintenance Requests

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

                                Request ID

                            </th>

                            <th className="px-5 py-4 text-left">

                                Asset

                            </th>

                            <th className="px-5 py-4 text-left">

                                Type

                            </th>

                            <th className="px-5 py-4 text-left">

                                Technician

                            </th>

                            <th className="px-5 py-4 text-left">

                                Priority

                            </th>

                            <th className="px-5 py-4 text-left">

                                Due Date

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

                            maintenance.map(item=>(

                                <tr
                                    key={item.id}
                                    className="border-t hover:bg-slate-50"
                                >

                                    <td className="px-5 py-4">

                                        <input
                                            type="checkbox"
                                            checked={selectedRows.includes(item.id)}
                                            onChange={()=>toggleRow(item.id)}
                                        />

                                    </td>

                                    <td className="px-5 py-4 font-medium">

                                        {item.requestNumber}

                                    </td>

                                    <td className="px-5 py-4">

                                        {item.asset?.assetName}

                                    </td>

                                    <td className="px-5 py-4">

                                        {item.maintenanceType}

                                    </td>

                                    <td className="px-5 py-4">

                                        {

                                            item.technician?.fullName ||

                                            "-"

                                        }

                                    </td>

                                    <td className="px-5 py-4">

                                        <span className={`rounded-full px-3 py-1 text-xs font-semibold ${

                                            item.priority==="Critical"

                                            ? "bg-red-100 text-red-700"

                                            : item.priority==="High"

                                            ? "bg-orange-100 text-orange-700"

                                            : item.priority==="Medium"

                                            ? "bg-yellow-100 text-yellow-700"

                                            : "bg-green-100 text-green-700"

                                        }`}>

                                            {item.priority}

                                        </span>

                                    </td>

                                    <td className="px-5 py-4">

                                        {item.dueDate}

                                    </td>

                                    <td className="px-5 py-4">

                                        <MaintenanceStatusBadge

                                            status={item.status}

                                        />

                                    </td>

                                    <td className="px-5 py-4">

                                        <div className="flex justify-center gap-3">

                                            <button
                                                onClick={()=>onView(item)}
                                            >

                                                <Eye
                                                    size={18}
                                                    className="text-blue-600"
                                                />

                                            </button>

                                            <button
                                                onClick={()=>onEdit(item)}
                                            >

                                                <Pencil
                                                    size={18}
                                                    className="text-yellow-600"
                                                />

                                            </button>

                                            <button
                                                onClick={()=>onDelete(item)}
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

                    Showing {maintenance.length} Requests

                </span>

                <div className="flex items-center gap-4">

                    <button

                        disabled={page===1}

                        onClick={()=>onPageChange(page-1)}

                        className="rounded-lg border bg-white p-2 disabled:opacity-40"

                    >

                        <ChevronLeft size={18}/>

                    </button>

                    <span className="rounded-lg border bg-white px-4 py-2">

                        Page {page} of {totalPages}

                    </span>

                    <button

                        disabled={page===totalPages}

                        onClick={()=>onPageChange(page+1)}

                        className="rounded-lg border bg-white p-2 disabled:opacity-40"

                    >

                        <ChevronRight size={18}/>

                    </button>

                </div>

            </div>

        </div>

    );

}