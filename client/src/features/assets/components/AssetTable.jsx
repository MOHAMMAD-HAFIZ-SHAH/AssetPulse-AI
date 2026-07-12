import { useMemo, useState } from "react";
import {
    Eye,
    Pencil,
    Trash2,
    QrCode,
    History,
    ChevronLeft,
    ChevronRight,
} from "lucide-react";

import AssetStatusBadge from "./AssetStatusBadge";
import AppButton from "../../../components/ui/AppButton";

export default function AssetTable({
    assets = [],
    loading = false,
    page = 1,
    totalPages = 1,
    onPageChange,
    onView,
    onEdit,
    onDelete,
    onQRCode,
    onHistory,
}) {

    const [selectedRows, setSelectedRows] = useState([]);

    const allSelected = useMemo(() => {
        if (assets.length === 0) return false;

        return selectedRows.length === assets.length;
    }, [selectedRows, assets]);

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
                assets.map(asset => asset.id)
            );

        }

    };

    if (loading) {

        return (

            <div className="rounded-2xl border bg-white">

                <div className="animate-pulse p-8">

                    {

                        Array.from({ length: 8 }).map((_, index) => (

                            <div
                                key={index}
                                className="mb-4 h-12 rounded-lg bg-slate-200"
                            />

                        ))

                    }

                </div>

            </div>

        );

    }

    if (!loading && assets.length === 0) {

        return (

            <div className="rounded-2xl border bg-white py-24 text-center">

                <h2 className="text-2xl font-semibold">

                    No Assets Found

                </h2>

                <p className="mt-3 text-slate-500">

                    Register your first asset.

                </p>

            </div>

        );

    }

    return (

        <div className="overflow-hidden rounded-2xl border bg-white shadow-sm">

            <div className="flex items-center justify-between border-b px-6 py-4">

                <h2 className="text-lg font-semibold">

                    Asset Inventory

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

                                Asset Tag

                            </th>

                            <th className="px-5 py-4 text-left">

                                Asset Name

                            </th>

                            <th className="px-5 py-4 text-left">

                                Category

                            </th>

                            <th className="px-5 py-4 text-left">

                                Department

                            </th>

                            <th className="px-5 py-4 text-left">

                                Location

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

                            assets.map(asset => (

                                <tr
                                    key={asset.id}
                                    className="border-t hover:bg-slate-50"
                                >

                                    <td className="px-5 py-4">

                                        <input
                                            type="checkbox"
                                            checked={selectedRows.includes(asset.id)}
                                            onChange={() => toggleRow(asset.id)}
                                        />

                                    </td>

                                    <td className="px-5 py-4 font-medium">

                                        {asset.assetTag}

                                    </td>

                                    <td className="px-5 py-4">

                                        {asset.assetName}

                                    </td>

                                    <td className="px-5 py-4">

                                        {asset.category?.name}

                                    </td>

                                    <td className="px-5 py-4">

                                        {asset.department?.name}

                                    </td>

                                    <td className="px-5 py-4">

                                        {asset.location}

                                    </td>

                                    <td className="px-5 py-4">

                                        <AssetStatusBadge
                                            status={asset.status}
                                        />

                                    </td>

                                    <td className="px-5 py-4">

                                        <div className="flex justify-center gap-3">

                                            <button
                                                onClick={() => onView(asset)}
                                            >
                                                <Eye
                                                    size={18}
                                                    className="text-blue-600"
                                                />
                                            </button>

                                            <button
                                                onClick={() => onEdit(asset)}
                                            >
                                                <Pencil
                                                    size={18}
                                                    className="text-yellow-600"
                                                />
                                            </button>

                                            <button
                                                onClick={() => onQRCode(asset)}
                                            >
                                                <QrCode
                                                    size={18}
                                                    className="text-indigo-600"
                                                />
                                            </button>

                                            <button
                                                onClick={() => onHistory(asset)}
                                            >
                                                <History
                                                    size={18}
                                                    className="text-green-600"
                                                />
                                            </button>

                                            <button
                                                onClick={() => onDelete(asset)}
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
                        <div className="flex flex-col gap-4 border-t bg-slate-50 px-6 py-4 md:flex-row md:items-center md:justify-between">

                <div className="text-sm text-slate-600">

                    Showing

                    <span className="mx-1 font-semibold">
                        {assets.length}
                    </span>

                    Assets

                </div>

                <div className="flex items-center gap-4">

                    <button
                        disabled={page === 1}
                        onClick={() => onPageChange(page - 1)}
                        className="rounded-lg border bg-white p-2 hover:bg-slate-100 disabled:cursor-not-allowed disabled:opacity-50"
                    >
                        <ChevronLeft size={18} />
                    </button>

                    <span className="rounded-lg border bg-white px-4 py-2 text-sm font-medium">

                        Page {page} of {totalPages}

                    </span>

                    <button
                        disabled={page === totalPages}
                        onClick={() => onPageChange(page + 1)}
                        className="rounded-lg border bg-white p-2 hover:bg-slate-100 disabled:cursor-not-allowed disabled:opacity-50"
                    >
                        <ChevronRight size={18} />
                    </button>

                </div>

            </div>

        </div>

    );

}