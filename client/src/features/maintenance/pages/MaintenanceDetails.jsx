import { useNavigate, useParams } from "react-router-dom";
import {
    ArrowLeft,
    Pencil,
    Printer,
    CheckCircle,
    User,
    Package,
    Calendar,
    Clock,
    IndianRupee,
} from "lucide-react";
import toast from "react-hot-toast";

import Loading from "../../../components/ui/Loading";
import EmptyState from "../../../components/ui/EmptyState";
import AppButton from "../../../components/ui/AppButton";
import AppCard from "../../../components/ui/AppCard";

import MaintenanceStatusBadge from "../components/MaintenanceStatusBadge";
import MaintenanceTimeline from "../components/MaintenanceTimeline";

import {
    useMaintenance,
    useCompleteMaintenance,
} from "../hooks/useMaintenance";

export default function MaintenanceDetails() {

    const { id } = useParams();

    const navigate = useNavigate();

    const {
        data: maintenance,
        isLoading,
        error,
    } = useMaintenance(id);

    const completeMaintenance = useCompleteMaintenance();

    if (isLoading) return <Loading />;

    if (error || !maintenance) {

        return (

            <EmptyState
                title="Maintenance Not Found"
                description="Unable to load maintenance details."
            />

        );

    }

    const timeline = maintenance.timeline || [];

    const handleComplete = async () => {

        try {

            await completeMaintenance.mutateAsync({

                id,

                data: {},

            });

            toast.success("Maintenance Completed");

        }

        catch {

            toast.error("Unable to complete maintenance.");

        }

    };

    return (

        <div className="space-y-6">

            <button

                onClick={() => navigate(-1)}

                className="flex items-center gap-2 text-slate-600 hover:text-indigo-600"

            >

                <ArrowLeft size={18} />

                Back

            </button>

            <div className="flex items-center justify-between">

                <div>

                    <h1 className="text-4xl font-bold">

                        {maintenance.requestNumber}

                    </h1>

                    <p className="mt-2 text-slate-500">

                        Maintenance Details

                    </p>

                </div>

                <MaintenanceStatusBadge

                    status={maintenance.status}

                />

            </div>

            <div className="grid gap-6 lg:grid-cols-3">

                <div className="space-y-6 lg:col-span-2">

                    <AppCard>

                        <h2 className="mb-6 text-2xl font-semibold">

                            Maintenance Information

                        </h2>

                        <div className="grid grid-cols-2 gap-6">

                            <Info
                                icon={<Package size={18} />}
                                title="Asset"
                                value={maintenance.asset?.assetName}
                            />

                            <Info
                                icon={<User size={18} />}
                                title="Technician"
                                value={
                                    maintenance.technician?.fullName ||
                                    "-"
                                }
                            />

                            <Info
                                icon={<Calendar size={18} />}
                                title="Start Date"
                                value={maintenance.startDate}
                            />

                            <Info
                                icon={<Clock size={18} />}
                                title="Due Date"
                                value={maintenance.dueDate}
                            />

                            <Info
                                icon={<IndianRupee size={18} />}
                                title="Estimated Cost"
                                value={`₹ ${maintenance.estimatedCost}`}
                            />

                            <Info
                                title="Priority"
                                value={maintenance.priority}
                            />

                        </div>

                    </AppCard>

                    <AppCard>

                        <h2 className="mb-4 text-2xl font-semibold">

                            Description

                        </h2>

                        <p className="leading-8 text-slate-600">

                            {maintenance.description}

                        </p>

                    </AppCard>

                    <AppCard>

                        <h2 className="mb-4 text-2xl font-semibold">

                            Notes

                        </h2>

                        <p className="leading-8 text-slate-600">

                            {maintenance.notes || "No Notes"}

                        </p>

                    </AppCard>

                    <MaintenanceTimeline

                        timeline={timeline}

                    />

                </div>

                <div className="space-y-6">

                    <AppCard>

                        <h2 className="mb-5 text-xl font-semibold">

                            Quick Actions

                        </h2>

                        <div className="grid gap-4">

                            <AppButton

                                onClick={() =>

                                    navigate(`/maintenance/${id}/edit`)

                                }

                            >

                                <Pencil
                                    size={18}
                                    className="mr-2"
                                />

                                Edit

                            </AppButton>

                            <AppButton

                                variant="success"

                                onClick={handleComplete}

                            >

                                <CheckCircle
                                    size={18}
                                    className="mr-2"
                                />

                                Complete

                            </AppButton>

                            <AppButton

                                variant="secondary"

                                onClick={() => window.print()}

                            >

                                <Printer
                                    size={18}
                                    className="mr-2"
                                />

                                Print Report

                            </AppButton>

                        </div>

                    </AppCard>

                    <AppCard>

                        <h2 className="mb-5 text-xl font-semibold">

                            Summary

                        </h2>

                        <Summary
                            label="Request"
                            value={maintenance.requestNumber}
                        />

                        <Summary
                            label="Status"
                            value={maintenance.status}
                        />

                        <Summary
                            label="Priority"
                            value={maintenance.priority}
                        />

                        <Summary
                            label="Asset"
                            value={maintenance.asset?.assetName}
                        />

                        <Summary
                            label="Technician"
                            value={
                                maintenance.technician?.fullName ||
                                "-"
                            }
                        />

                    </AppCard>

                </div>

            </div>

        </div>

    );

}

function Info({

    icon,

    title,

    value,

}) {

    return (

        <div>

            <div className="flex items-center gap-2">

                {icon}

                <span className="text-sm text-slate-500">

                    {title}

                </span>

            </div>

            <h3 className="mt-2 text-lg font-semibold">

                {value || "-"}

            </h3>

        </div>

    );

}

function Summary({

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