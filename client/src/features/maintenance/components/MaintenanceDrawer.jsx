import {
    X,
    Package,
    User,
    Calendar,
    Clock,
    IndianRupee,
    ShieldCheck,
    FileText,
    Printer,
    CheckCircle,
    XCircle,
    PlayCircle,
    Wrench,
} from "lucide-react";

import MaintenanceStatusBadge from "./MaintenanceStatusBadge";
import AppButton from "../../../components/ui/AppButton";

export default function MaintenanceDrawer({
    open,
    maintenance,
    onClose,
    onApprove,
    onReject,
    onStart,
    onComplete,
    onPrint,
}) {

    if (!open || !maintenance) return null;

    return (

        <div className="fixed inset-0 z-50 flex">

            <div
                className="flex-1 bg-black/40"
                onClick={onClose}
            />

            <div className="h-screen w-[650px] overflow-y-auto bg-white shadow-2xl">

                <div className="sticky top-0 z-20 border-b bg-white">

                    <div className="flex items-center justify-between p-6">

                        <div>

                            <h2 className="text-2xl font-bold">
                                Maintenance Request
                            </h2>

                            <p className="text-slate-500">
                                {maintenance.requestNumber}
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
                                {maintenance.asset?.assetName}
                            </h1>

                            <p className="mt-2 text-slate-500">
                                {maintenance.asset?.assetTag}
                            </p>

                        </div>

                        <MaintenanceStatusBadge
                            status={maintenance.status}
                        />

                    </div>

                    <div className="grid grid-cols-2 gap-5">

                        <InfoCard
                            icon={<Package size={20} />}
                            title="Asset"
                            value={maintenance.asset?.assetName}
                        />

                        <InfoCard
                            icon={<User size={20} />}
                            title="Technician"
                            value={
                                maintenance.technician?.fullName ||
                                "Not Assigned"
                            }
                        />

                        <InfoCard
                            icon={<Calendar size={20} />}
                            title="Start Date"
                            value={maintenance.startDate}
                        />

                        <InfoCard
                            icon={<Clock size={20} />}
                            title="Due Date"
                            value={maintenance.dueDate}
                        />

                        <InfoCard
                            icon={<IndianRupee size={20} />}
                            title="Estimated Cost"
                            value={`₹ ${maintenance.estimatedCost}`}
                        />

                        <InfoCard
                            icon={<ShieldCheck size={20} />}
                            title="Priority"
                            value={maintenance.priority}
                        />

                    </div>

                    <Section
                        title="Description"
                        value={maintenance.description}
                    />

                    <Section
                        title="Notes"
                        value={
                            maintenance.notes ||
                            "No Notes Available"
                        }
                    />

                    <div className="rounded-xl border p-6">

                        <h3 className="mb-5 text-xl font-semibold">

                            Maintenance Timeline

                        </h3>

                        <TimelineItem
                            title="Request Created"
                            date={maintenance.createdAt}
                        />

                        <TimelineItem
                            title="Approved"
                            date={maintenance.approvedAt || "-"}
                        />

                        <TimelineItem
                            title="Work Started"
                            date={maintenance.startedAt || "-"}
                        />

                        <TimelineItem
                            title="Completed"
                            date={maintenance.completedAt || "-"}
                        />

                    </div>

                    <div className="rounded-xl border p-6">

                        <h3 className="mb-5 text-xl font-semibold">

                            Maintenance Summary

                        </h3>

                        <SummaryRow
                            label="Request ID"
                            value={maintenance.requestNumber}
                        />

                        <SummaryRow
                            label="Maintenance Type"
                            value={maintenance.maintenanceType}
                        />

                        <SummaryRow
                            label="Priority"
                            value={maintenance.priority}
                        />

                        <SummaryRow
                            label="Status"
                            value={maintenance.status}
                        />

                        <SummaryRow
                            label="Estimated Cost"
                            value={`₹ ${maintenance.estimatedCost}`}
                        />

                    </div>

                    <div className="grid grid-cols-2 gap-4">

                        <AppButton
                            variant="success"
                            onClick={() => onApprove(maintenance)}
                        >
                            <CheckCircle
                                size={18}
                                className="mr-2"
                            />
                            Approve
                        </AppButton>

                        <AppButton
                            variant="danger"
                            onClick={() => onReject(maintenance)}
                        >
                            <XCircle
                                size={18}
                                className="mr-2"
                            />
                            Reject
                        </AppButton>

                        <AppButton
                            variant="secondary"
                            onClick={() => onStart(maintenance)}
                        >
                            <PlayCircle
                                size={18}
                                className="mr-2"
                            />
                            Start
                        </AppButton>

                        <AppButton
                            onClick={() => onComplete(maintenance)}
                        >
                            <Wrench
                                size={18}
                                className="mr-2"
                            />
                            Complete
                        </AppButton>

                        <AppButton
                            variant="secondary"
                            onClick={() => onPrint(maintenance)}
                            className="col-span-2"
                        >
                            <Printer
                                size={18}
                                className="mr-2"
                            />
                            Print Maintenance Report
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

function TimelineItem({
    title,
    date,
}) {

    return (

        <div className="mb-6 flex gap-4">

            <div className="mt-2 h-3 w-3 rounded-full bg-indigo-600"></div>

            <div>

                <h4 className="font-semibold">

                    {title}

                </h4>

                <p className="text-sm text-slate-500">

                    {date || "-"}

                </p>

            </div>

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