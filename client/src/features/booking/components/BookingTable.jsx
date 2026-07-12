import {
    Eye,
    Pencil,
    Trash2,
    CalendarDays,
} from "lucide-react";

import BookingStatusBadge from "./BookingStatusBadge";

export default function BookingTable({

    bookings = [],

    loading = false,

    onView,

    onEdit,

    onDelete,

}) {

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

    return (

        <div className="overflow-hidden rounded-2xl border bg-white shadow-sm">

            <table className="w-full">

                <thead className="bg-slate-100">

                    <tr>

                        <th className="px-5 py-4 text-left">

                            Booking ID

                        </th>

                        <th className="px-5 py-4 text-left">

                            Asset

                        </th>

                        <th className="px-5 py-4 text-left">

                            Employee

                        </th>

                        <th className="px-5 py-4 text-left">

                            Date

                        </th>

                        <th className="px-5 py-4 text-left">

                            Time

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

                        bookings.map((booking) => (

                            <tr
                                key={booking.id}
                                className="border-t hover:bg-slate-50"
                            >

                                <td className="px-5 py-4 font-medium">

                                    {booking.bookingNumber}

                                </td>

                                <td className="px-5 py-4">

                                    {booking.asset?.assetName}

                                </td>

                                <td className="px-5 py-4">

                                    {booking.employee?.fullName}

                                </td>

                                <td className="px-5 py-4">

                                    {booking.bookingDate}

                                </td>

                                <td className="px-5 py-4">

                                    {booking.startTime}

                                    {" - "}

                                    {booking.endTime}

                                </td>

                                <td className="px-5 py-4">

                                    <BookingStatusBadge
                                        status={booking.status}
                                    />

                                </td>

                                <td className="px-5 py-4">

                                    <div className="flex justify-center gap-3">

                                        <button
                                            onClick={() => onView(booking)}
                                        >
                                            <Eye
                                                size={18}
                                                className="text-blue-600"
                                            />
                                        </button>

                                        <button
                                            onClick={() => onEdit(booking)}
                                        >
                                            <Pencil
                                                size={18}
                                                className="text-yellow-600"
                                            />
                                        </button>

                                        <button>
                                            <CalendarDays
                                                size={18}
                                                className="text-indigo-600"
                                            />
                                        </button>

                                        <button
                                            onClick={() => onDelete(booking)}
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

    );

}