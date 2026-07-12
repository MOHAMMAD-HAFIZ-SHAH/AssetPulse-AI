import { useNavigate, useParams } from "react-router-dom";
import {
    ArrowLeft,
    Pencil,
    Printer,
    Ban,
    Calendar,
    Clock,
    Package,
    User,
} from "lucide-react";

import toast from "react-hot-toast";

import Loading from "../../../components/ui/Loading";
import EmptyState from "../../../components/ui/EmptyState";
import AppButton from "../../../components/ui/AppButton";

import BookingStatusBadge from "../components/BookingStatusBadge";

import { useBooking } from "../hooks/useBookings";

export default function BookingDetails() {

    const { id } = useParams();

    const navigate = useNavigate();

    const {

        data: booking,

        isLoading,

        error,

    } = useBooking(id);

    if (isLoading) {

        return <Loading />;

    }

    if (error || !booking) {

        return (

            <EmptyState

                title="Booking Not Found"

                description="Unable to load booking."

            />

        );

    }

    return (

        <div className="space-y-8">

            <button

                onClick={() => navigate(-1)}

                className="flex items-center gap-2 text-slate-500 hover:text-indigo-600"

            >

                <ArrowLeft size={18} />

                Back

            </button>

            <div className="flex items-center justify-between">

                <div>

                    <h1 className="text-4xl font-bold">

                        {booking.bookingNumber}

                    </h1>

                    <p className="mt-2 text-slate-500">

                        Booking Details

                    </p>

                </div>

                <BookingStatusBadge

                    status={booking.status}

                />

            </div>

            <div className="grid gap-6 lg:grid-cols-3">

                <div className="lg:col-span-2 space-y-6">

                    <div className="rounded-2xl border bg-white p-8">

                        <h2 className="mb-6 text-2xl font-semibold">

                            Booking Information

                        </h2>

                        <div className="grid grid-cols-2 gap-6">

                            <Info

                                icon={<Package size={18}/>}

                                title="Asset"

                                value={booking.asset?.assetName}

                            />

                            <Info

                                icon={<User size={18}/>}

                                title="Employee"

                                value={booking.employee?.fullName}

                            />

                            <Info

                                icon={<Calendar size={18}/>}

                                title="Booking Date"

                                value={booking.bookingDate}

                            />

                            <Info

                                icon={<Clock size={18}/>}

                                title="Time"

                                value={`${booking.startTime} - ${booking.endTime}`}

                            />

                            <Info

                                title="Purpose"

                                value={booking.purpose}

                            />

                            <Info

                                title="Department"

                                value={booking.employee?.department?.name}

                            />

                        </div>

                    </div>

                    <div className="rounded-2xl border bg-white p-8">

                        <h2 className="mb-5 text-2xl font-semibold">

                            Remarks

                        </h2>

                        <p className="leading-8 text-slate-600">

                            {booking.remarks || "No remarks available."}

                        </p>

                    </div>

                    <div className="rounded-2xl border bg-white p-8">

                        <h2 className="mb-6 text-2xl font-semibold">

                            Activity Timeline

                        </h2>

                        <div className="space-y-6">

                            <Timeline

                                title="Booking Created"

                                date={booking.createdAt}

                            />

                            <Timeline

                                title="Approval Pending"

                                date="-"

                            />

                            {

                                booking.status === "Approved" && (

                                    <Timeline

                                        title="Booking Approved"

                                        date={booking.updatedAt}

                                    />

                                )

                            }

                        </div>

                    </div>

                </div>

                <div className="space-y-6">

                    <div className="rounded-2xl border bg-white p-6">

                        <h2 className="mb-5 text-xl font-semibold">

                            Quick Actions

                        </h2>

                        <div className="grid gap-4">

                            <AppButton

                                onClick={() =>

                                    navigate(`/bookings/${id}/edit`)

                                }

                            >

                                <Pencil

                                    size={18}

                                    className="mr-2"

                                />

                                Edit Booking

                            </AppButton>

                            <AppButton

                                variant="secondary"

                                onClick={() =>

                                    window.print()

                                }

                            >

                                <Printer

                                    size={18}

                                    className="mr-2"

                                />

                                Print

                            </AppButton>

                            <AppButton

                                variant="danger"

                                onClick={() =>

                                    toast.success("Booking Cancelled")

                                }

                            >

                                <Ban

                                    size={18}

                                    className="mr-2"

                                />

                                Cancel Booking

                            </AppButton>

                        </div>

                    </div>

                    <div className="rounded-2xl border bg-white p-6">

                        <h2 className="mb-4 text-xl font-semibold">

                            Booking Summary

                        </h2>

                        <Summary

                            label="Status"

                            value={booking.status}

                        />

                        <Summary

                            label="Asset"

                            value={booking.asset?.assetName}

                        />

                        <Summary

                            label="Employee"

                            value={booking.employee?.fullName}

                        />

                        <Summary

                            label="Booking ID"

                            value={booking.bookingNumber}

                        />

                    </div>

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

function Timeline({

    title,

    date,

}) {

    return (

        <div className="flex gap-4">

            <div className="mt-2 h-3 w-3 rounded-full bg-indigo-600"/>

            <div>

                <h4 className="font-semibold">

                    {title}

                </h4>

                <p className="text-sm text-slate-500">

                    {date}

                </p>

            </div>

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