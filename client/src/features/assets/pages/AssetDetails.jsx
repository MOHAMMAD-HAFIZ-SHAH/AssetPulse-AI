import { useNavigate, useParams } from "react-router-dom";
import {
    ArrowLeft,
    Pencil,
    ArrowRightLeft,
    Wrench,
} from "lucide-react";

import Loading from "../../../components/ui/Loading";
import EmptyState from "../../../components/ui/EmptyState";
import AppButton from "../../../components/ui/AppButton";

import { useAsset } from "../hooks/useAssets";

import AssetStatusBadge from "../components/AssetStatusBadge";
import QRCodeCard from "../components/QRCodeCard";
import AssetDrawer from "../components/AssetDrawer";

export default function AssetDetails() {

    const { id } = useParams();

    const navigate = useNavigate();

    const {
        data: asset,
        isLoading,
        error,
    } = useAsset(id);

    if (isLoading) {
        return <Loading />;
    }

    if (error || !asset) {
        return (
            <EmptyState
                title="Asset Not Found"
                description="Unable to load asset details."
            />
        );
    }

    return (

        <div className="space-y-8">

            <div className="flex items-center justify-between">

                <div>

                    <button
                        onClick={() => navigate(-1)}
                        className="mb-4 flex items-center gap-2 text-slate-500 hover:text-indigo-600"
                    >
                        <ArrowLeft size={18} />
                        Back
                    </button>

                    <h1 className="text-4xl font-bold">

                        {asset.assetName}

                    </h1>

                    <p className="mt-2 text-slate-500">

                        {asset.assetTag}

                    </p>

                </div>

                <AssetStatusBadge
                    status={asset.status}
                />

            </div>

            <div className="grid gap-6 lg:grid-cols-3">

                <div className="lg:col-span-2">

                    <div className="overflow-hidden rounded-2xl border bg-white">

                        <img
                            src={
                                asset.imageUrl ||
                                "https://placehold.co/1200x500"
                            }
                            alt={asset.assetName}
                            className="h-80 w-full object-cover"
                        />

                    </div>

                    <div className="mt-6 rounded-2xl border bg-white p-8">

                        <h2 className="mb-6 text-2xl font-semibold">

                            Asset Overview

                        </h2>

                        <div className="grid grid-cols-2 gap-6">

                            <Info
                                title="Category"
                                value={asset.category?.name}
                            />

                            <Info
                                title="Department"
                                value={asset.department?.name}
                            />

                            <Info
                                title="Location"
                                value={asset.location}
                            />

                            <Info
                                title="Serial Number"
                                value={asset.serialNumber}
                            />

                            <Info
                                title="Purchase Date"
                                value={asset.acquisitionDate}
                            />

                            <Info
                                title="Purchase Cost"
                                value={`₹ ${asset.acquisitionCost}`}
                            />

                            <Info
                                title="Warranty Expiry"
                                value={asset.warrantyExpiry}
                            />

                            <Info
                                title="Current Holder"
                                value={
                                    asset.employee?.fullName ||
                                    "Available"
                                }
                            />

                        </div>

                    </div>

                    <div className="mt-6 rounded-2xl border bg-white p-8">

                        <h2 className="mb-4 text-2xl font-semibold">

                            Description

                        </h2>

                        <p className="leading-8 text-slate-600">

                            {asset.description ||
                                "No description available."}

                        </p>

                    </div>

                </div>

                <div className="space-y-6">

                    <QRCodeCard
                        asset={asset}
                    />

                    <div className="rounded-2xl border bg-white p-6">

                        <h2 className="mb-5 text-xl font-semibold">

                            Quick Actions

                        </h2>

                        <div className="grid gap-4">

                            <AppButton
                                onClick={() =>
                                    navigate(`/assets/${id}/edit`)
                                }
                            >
                                <Pencil
                                    size={18}
                                    className="mr-2"
                                />
                                Edit Asset
                            </AppButton>

                            <AppButton
                                variant="secondary"
                                onClick={() =>
                                    navigate(`/allocation?asset=${id}`)
                                }
                            >
                                <ArrowRightLeft
                                    size={18}
                                    className="mr-2"
                                />
                                Transfer
                            </AppButton>

                            <AppButton
                                variant="danger"
                                onClick={() =>
                                    navigate(`/maintenance/new?asset=${id}`)
                                }
                            >
                                <Wrench
                                    size={18}
                                    className="mr-2"
                                />
                                Raise Maintenance
                            </AppButton>

                        </div>

                    </div>

                </div>

            </div>

            <AssetDrawer
                open={false}
                asset={asset}
            />

        </div>

    );

}

function Info({
    title,
    value,
}) {
    return (
        <div>

            <p className="text-sm text-slate-500">

                {title}

            </p>

            <h3 className="mt-2 text-lg font-semibold">

                {value || "-"}

            </h3>

        </div>
    );
}