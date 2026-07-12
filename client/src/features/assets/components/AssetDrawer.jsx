import {
    X,
    Calendar,
    Building2,
    User,
    MapPin,
    Package,
    Cpu,
    ShieldCheck,
    Wrench,
    QrCode,
    Pencil,
    ArrowRightLeft,
} from "lucide-react";

import AssetStatusBadge from "./AssetStatusBadge";
import AppButton from "../../../components/ui/AppButton";

export default function AssetDrawer({
    open,
    asset,
    onClose,
    onEdit,
    onTransfer,
    onQRCode,
}) {
    if (!open || !asset) return null;

    return (
        <div className="fixed inset-0 z-50 flex">
            <div className="flex-1 bg-black/40" onClick={onClose} />

            <div className="h-screen w-[620px] overflow-y-auto bg-white shadow-2xl">
                <div className="sticky top-0 z-20 border-b bg-white">
                    <div className="flex items-center justify-between p-6">
                        <div>
                            <h2 className="text-2xl font-bold">Asset Details</h2>
                            <p className="text-slate-500">Complete asset information</p>
                        </div>

                        <button
                            type="button"
                            onClick={onClose}
                            className="rounded-lg p-2 hover:bg-slate-100"
                        >
                            <X size={22} />
                        </button>
                    </div>
                </div>

                <div className="space-y-8 p-6">
                    <div className="overflow-hidden rounded-2xl border">
                        <img
                            src={asset.image || "https://placehold.co/600x350"}
                            alt={asset.assetName}
                            className="h-64 w-full object-cover"
                        />
                    </div>

                    <div className="flex items-center justify-between">
                        <div>
                            <h2 className="text-3xl font-bold">{asset.assetName}</h2>
                            <p className="mt-2 text-slate-500">{asset.assetTag}</p>
                        </div>

                        <AssetStatusBadge status={asset.status} />
                    </div>

                    <div className="grid grid-cols-2 gap-5">
                        <div className="rounded-xl border p-4">
                            <div className="flex items-center gap-3">
                                <Package size={20} />
                                <span className="font-medium">Category</span>
                            </div>
                            <p className="mt-3 text-slate-600">{asset.category?.name}</p>
                        </div>

                        <div className="rounded-xl border p-4">
                            <div className="flex items-center gap-3">
                                <Building2 size={20} />
                                <span className="font-medium">Department</span>
                            </div>
                            <p className="mt-3 text-slate-600">{asset.department?.name}</p>
                        </div>

                        <div className="rounded-xl border p-4">
                            <div className="flex items-center gap-3">
                                <User size={20} />
                                <span className="font-medium">Allocated To</span>
                            </div>
                            <p className="mt-3 text-slate-600">
                                {asset.employee?.fullName || "Available"}
                            </p>
                        </div>

                        <div className="rounded-xl border p-4">
                            <div className="flex items-center gap-3">
                                <MapPin size={20} />
                                <span className="font-medium">Location</span>
                            </div>
                            <p className="mt-3 text-slate-600">{asset.location}</p>
                        </div>

                        <div className="rounded-xl border p-4">
                            <div className="flex items-center gap-3">
                                <Cpu size={20} />
                                <span className="font-medium">Serial Number</span>
                            </div>
                            <p className="mt-3 text-slate-600">{asset.serialNumber}</p>
                        </div>

                        <div className="rounded-xl border p-4">
                            <div className="flex items-center gap-3">
                                <Calendar size={20} />
                                <span className="font-medium">Purchase Date</span>
                            </div>
                            <p className="mt-3 text-slate-600">{asset.acquisitionDate}</p>
                        </div>
                    </div>

                    <div className="rounded-2xl border p-6">
                        <h3 className="mb-5 text-xl font-semibold">Asset Information</h3>

                        <div className="grid grid-cols-2 gap-5">
                            <div>
                                <p className="text-sm text-slate-500">Purchase Cost</p>
                                <h4 className="mt-1 text-lg font-semibold">₹ {asset.acquisitionCost}</h4>
                            </div>

                            <div>
                                <p className="text-sm text-slate-500">Warranty Expiry</p>
                                <h4 className="mt-1 text-lg font-semibold">
                                    {asset.warrantyExpiry || "N/A"}
                                </h4>
                            </div>

                            <div>
                                <p className="text-sm text-slate-500">Current Condition</p>
                                <h4 className="mt-1 text-lg font-semibold">{asset.condition}</h4>
                            </div>

                            <div>
                                <p className="text-sm text-slate-500">Bookable</p>
                                <h4 className="mt-1 text-lg font-semibold">
                                    {asset.isBookable ? "Yes" : "No"}
                                </h4>
                            </div>
                        </div>
                    </div>

                    <div className="rounded-2xl border p-6">
                        <h3 className="mb-5 text-xl font-semibold">Description</h3>
                        <p className="leading-8 text-slate-600">
                            {asset.description || "No description available."}
                        </p>
                    </div>

                    <div className="rounded-2xl border p-6">
                        <div className="flex items-center justify-between">
                            <div>
                                <h3 className="text-xl font-semibold">QR Code</h3>
                                <p className="mt-2 text-slate-500">Scan to identify asset</p>
                            </div>

                            <button
                                type="button"
                                onClick={() => onQRCode(asset)}
                                className="rounded-xl border p-3 hover:bg-slate-100"
                            >
                                <QrCode size={28} />
                            </button>
                        </div>
                    </div>

                    <div className="rounded-2xl border p-6">
                        <h3 className="mb-5 text-xl font-semibold">Quick Actions</h3>

                        <div className="grid grid-cols-2 gap-4">
                            <AppButton onClick={() => onEdit(asset)}>
                                <Pencil size={18} className="mr-2" />
                                Edit Asset
                            </AppButton>

                            <AppButton variant="secondary" onClick={() => onTransfer(asset)}>
                                <ArrowRightLeft size={18} className="mr-2" />
                                Transfer
                            </AppButton>

                            <AppButton variant="success">
                                <ShieldCheck size={18} className="mr-2" />
                                Allocate
                            </AppButton>

                            <AppButton variant="danger">
                                <Wrench size={18} className="mr-2" />
                                Maintenance
                            </AppButton>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
                    