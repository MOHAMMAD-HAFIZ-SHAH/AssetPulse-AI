import {
    X,
    Package,
    User,
    Building2,
    Calendar,
    Clock,
    ArrowRightLeft,
    RotateCcw,
    Printer,
    Download,
    History,
    FileText,
} from "lucide-react";

import AllocationStatusBadge from "./AllocationStatusBadge";
import AppButton from "../../../components/ui/AppButton";

export default function AllocationDrawer({

    open,

    allocation,

    onClose,

    onTransfer,

    onReturn,

    onPrint,

    onDownload,

}) {

    if (!open || !allocation) return null;

    return (

        <div className="fixed inset-0 z-50 flex">

            <div
                className="flex-1 bg-black/40"
                onClick={onClose}
            />

            <div className="h-screen w-[650px] overflow-y-auto bg-white shadow-2xl">

                <div className="sticky top-0 z-10 border-b bg-white">

                    <div className="flex items-center justify-between p-6">

                        <div>

                            <h2 className="text-2xl font-bold">

                                Allocation Details

                            </h2>

                            <p className="text-slate-500">

                                {allocation.allocationNumber}

                            </p>

                        </div>

                        <button
                            onClick={onClose}
                            className="rounded-lg p-2 hover:bg-slate-100"
                        >

                            <X size={22} />

                        </button>

                    </div>

                </div>

                <div className="space-y-6 p-6">

                    <div className="flex items-center justify-between">

                        <div>

                            <h1 className="text-3xl font-bold">

                                {allocation.asset?.assetName}

                            </h1>

                            <p className="mt-2 text-slate-500">

                                {allocation.asset?.assetTag}

                            </p>

                        </div>

                        <AllocationStatusBadge
                            status={allocation.status}
                        />

                    </div>

                    <div className="grid grid-cols-2 gap-5">

                        <InfoCard
                            icon={<Package size={20} />}
                            title="Asset"
                            value={allocation.asset?.assetName}
                        />

                        <InfoCard
                            icon={<User size={20} />}
                            title="Employee"
                            value={
                                allocation.employee?.fullName ||
                                "-"
                            }
                        />

                        <InfoCard
                            icon={<Building2 size={20} />}
                            title="Department"
                            value={
                                allocation.department?.name ||
                                "-"
                            }
                        />

                        <InfoCard
                            icon={<FileText size={20} />}
                            title="Allocation Type"
                            value={allocation.allocationType}
                        />

                        <InfoCard
                            icon={<Calendar size={20} />}
                            title="Allocation Date"
                            value={allocation.allocationDate}
                        />

                        <InfoCard
                            icon={<Clock size={20} />}
                            title="Expected Return"
                            value={
                                allocation.expectedReturnDate ||
                                "-"
                            }
                        />

                    </div>

                    <Section
                        title="Purpose"
                        value={allocation.purpose}
                    />

                    <Section
                        title="Remarks"
                        value={
                            allocation.remarks ||
                            "No remarks available."
                        }
                    />

                    <div className="rounded-xl border p-6">

                        <h3 className="mb-5 text-xl font-semibold">

                            Allocation Timeline

                        </h3>

                        {

                            allocation.timeline?.length ? (

                                allocation.timeline.map((item, index) => (

                                    <div
                                        key={index}
                                        className="mb-6 flex gap-4"
                                    >

                                        <div className="mt-2 h-3 w-3 rounded-full bg-indigo-600"></div>

                                        <div>

                                            <h4 className="font-semibold">

                                                {item.title}

                                            </h4>

                                            <p className="text-sm text-slate-500">

                                                {item.date}

                                            </p>

                                            <p className="mt-1 text-slate-600">

                                                {item.description}

                                            </p>

                                        </div>

                                    </div>

                                ))

                            ) : (

                                <p className="text-slate-500">

                                    No timeline available.

                                </p>

                            )

                        }

                    </div>

                    <div className="rounded-xl border p-6">

                        <h3 className="mb-5 text-xl font-semibold">

                            Allocation Summary

                        </h3>

                        <SummaryRow
                            label="Allocation ID"
                            value={allocation.allocationNumber}
                        />

                        <SummaryRow
                            label="Status"
                            value={allocation.status}
                        />

                        <SummaryRow
                            label="Allocated To"
                            value={
                                allocation.employee?.fullName ||
                                allocation.department?.name ||
                                "-"
                            }
                        />

                        <SummaryRow
                            label="Asset"
                            value={allocation.asset?.assetName}
                        />

                    </div>

                    <div className="grid grid-cols-2 gap-4">

                        <AppButton
                            onClick={() => onTransfer(allocation)}
                        >

                            <ArrowRightLeft
                                size={18}
                                className="mr-2"
                            />

                            Transfer

                        </AppButton>

                        <AppButton
                            variant="secondary"
                            onClick={() => onReturn(allocation)}
                        >

                            <RotateCcw
                                size={18}
                                className="mr-2"
                            />

                            Return Asset

                        </AppButton>

                        <AppButton
                            variant="secondary"
                            onClick={() => onPrint(allocation)}
                        >

                            <Printer
                                size={18}
                                className="mr-2"
                            />

                            Print Slip

                        </AppButton>

                        <AppButton
                            variant="success"
                            onClick={() => onDownload(allocation)}
                        >

                            <Download
                                size={18}
                                className="mr-2"
                            />

                            Download PDF

                        </AppButton>

                    </div>

                </div>

            </div>

        </div>

    );

}

function InfoCard({

    icon,

    title,

    value,

}) {

    return (

        <div className="rounded-xl border p-4">

            <div className="flex items-center gap-3">

                {icon}

                <span className="font-medium">

                    {title}

                </span>

            </div>

            <p className="mt-3 text-slate-600">

                {value || "-"}

            </p>

        </div>

    );

}

function Section({

    title,

    value,

}) {

    return (

        <div className="rounded-xl border p-6">

            <h3 className="mb-4 text-xl font-semibold">

                {title}

            </h3>

            <p className="leading-8 text-slate-600">

                {value}

            </p>

        </div>

    );

}

function SummaryRow({

    label,

    value,

}) {

    return (

        <div className="flex justify-between border-b py-3">

            <span className="text-slate-500">

                {label}

            </span>

            <span className="font-semibold">

                {value}

            </span>

        </div>

    );

}