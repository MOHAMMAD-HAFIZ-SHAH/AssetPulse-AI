import {
    X,
    Calendar,
    Clock,
    Package,
    User,
    FileText,
    CheckCircle,
    XCircle,
    Printer,
} from "lucide-react";

import BookingStatusBadge from "./BookingStatusBadge";
import AppButton from "../../../components/ui/AppButton";

export default function BookingDrawer({

    open,

    booking,

    onClose,

    onApprove,

    onReject,

    onCancel,

    onPrint,

}) {

    if (!open || !booking) return null;

    return (

        <div className="fixed inset-0 z-50 flex">

            <div
                className="flex-1 bg-black/40"
                onClick={onClose}
            />

            <div className="h-screen w-[600px] overflow-y-auto bg-white shadow-2xl">

                <div className="sticky top-0 border-b bg-white p-6">

                    <div className="flex items-center justify-between">

                        <div>

                            <h2 className="text-2xl font-bold">

                                Booking Details

                            </h2>

                            <p className="text-slate-500">

                                {booking.bookingNumber}

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

                            <h3 className="text-3xl font-bold">

                                {booking.asset?.assetName}

                            </h3>

                            <p className="mt-2 text-slate-500">

                                {booking.asset?.assetTag}

                            </p>

                        </div>

                        <BookingStatusBadge
                            status={booking.status}
                        />

                    </div>

                    <div className="grid grid-cols-2 gap-5">

                        <div className="rounded-xl border p-4">

                            <div className="flex items-center gap-3">

                                <Package size={20} />

                                <span className="font-medium">

                                    Asset

                                </span>

                            </div>

                            <p className="mt-3 text-slate-600">

                                {booking.asset?.assetName}

                            </p>

                        </div>

                        <div className="rounded-xl border p-4">

                            <div className="flex items-center gap-3">

                                <User size={20} />

                                <span className="font-medium">

                                    Employee

                                </span>

                            </div>

                            <p className="mt-3 text-slate-600">

                                {booking.employee?.fullName}

                            </p>

                        </div>

                        <div className="rounded-xl border p-4">

                            <div className="flex items-center gap-3">

                                <Calendar size={20} />

                                <span className="font-medium">

                                    Booking Date

                                </span>

                            </div>

                            <p className="mt-3 text-slate-600">

                                {booking.bookingDate}

                            </p>

                        </div>

                        <div className="rounded-xl border p-4">

                            <div className="flex items-center gap-3">

                                <Clock size={20} />

                                <span className="font-medium">

                                    Time Slot

                                </span>

                            </div>

                            <p className="mt-3 text-slate-600">

                                {booking.startTime}

                                {" - "}

                                {booking.endTime}

                            </p>

                        </div>

                    </div>

                    <div className="rounded-xl border p-6">

                        <h3 className="mb-4 text-xl font-semibold">

                            Purpose

                        </h3>

                        <p className="leading-7 text-slate-600">

                            {booking.purpose}

                        </p>

                    </div>

                    <div className="rounded-xl border p-6">

                        <h3 className="mb-4 text-xl font-semibold">

                            Remarks

                        </h3>

                        <p className="leading-7 text-slate-600">

                            {booking.remarks || "No remarks"}

                        </p>

                    </div>
                                        <div className="rounded-xl border p-6">

                        <h3 className="mb-5 text-xl font-semibold">

                            Booking Timeline

                        </h3>

                        <div className="space-y-6">

                            <div className="flex gap-4">

                                <div className="mt-2 h-3 w-3 rounded-full bg-green-600"></div>

                                <div>

                                    <h4 className="font-semibold">

                                        Booking Created

                                    </h4>

                                    <p className="text-sm text-slate-500">

                                        {booking.createdAt || "-"}

                                    </p>

                                </div>

                            </div>

                            <div className="flex gap-4">

                                <div className="mt-2 h-3 w-3 rounded-full bg-blue-600"></div>

                                <div>

                                    <h4 className="font-semibold">

                                        Awaiting Approval

                                    </h4>

                                    <p className="text-sm text-slate-500">

                                        Department Manager

                                    </p>

                                </div>

                            </div>

                            {

                                booking.status === "Approved" && (

                                    <div className="flex gap-4">

                                        <div className="mt-2 h-3 w-3 rounded-full bg-green-600"></div>

                                        <div>

                                            <h4 className="font-semibold">

                                                Booking Approved

                                            </h4>

                                            <p className="text-sm text-slate-500">

                                                Resource Reserved

                                            </p>

                                        </div>

                                    </div>

                                )

                            }

                        </div>

                    </div>

                    <div className="rounded-xl border p-6">

                        <h3 className="mb-5 text-xl font-semibold">

                            Booking Summary

                        </h3>

                        <div className="grid grid-cols-2 gap-5">

                            <div>

                                <p className="text-sm text-slate-500">

                                    Booking Number

                                </p>

                                <h4 className="mt-1 font-semibold">

                                    {booking.bookingNumber}

                                </h4>

                            </div>

                            <div>

                                <p className="text-sm text-slate-500">

                                    Duration

                                </p>

                                <h4 className="mt-1 font-semibold">

                                    {booking.startTime} - {booking.endTime}

                                </h4>

                            </div>

                            <div>

                                <p className="text-sm text-slate-500">

                                    Requested By

                                </p>

                                <h4 className="mt-1 font-semibold">

                                    {booking.employee?.fullName}

                                </h4>

                            </div>

                            <div>

                                <p className="text-sm text-slate-500">

                                    Current Status

                                </p>

                                <BookingStatusBadge
                                    status={booking.status}
                                />

                            </div>

                        </div>

                    </div>

                    <div className="grid grid-cols-2 gap-4">

                        <AppButton
                            variant="success"
                            onClick={() => onApprove(booking)}
                        >

                            <CheckCircle
                                size={18}
                                className="mr-2"
                            />

                            Approve

                        </AppButton>

                        <AppButton
                            variant="danger"
                            onClick={() => onReject(booking)}
                        >

                            <XCircle
                                size={18}
                                className="mr-2"
                            />

                            Reject

                        </AppButton>

                        <AppButton
                            variant="secondary"
                            onClick={() => onCancel(booking)}
                        >

                            Cancel Booking

                        </AppButton>

                        <AppButton
                            onClick={() => onPrint(booking)}
                        >

                            <Printer
                                size={18}
                                className="mr-2"
                            />

                            Print Slip

                        </AppButton>

                    </div>

                </div>

            </div>

        </div>

    );

}