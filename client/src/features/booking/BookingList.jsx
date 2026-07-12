import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Calendar, List, Plus } from "lucide-react";
import toast from "react-hot-toast";

import PageHeader from "../../../components/ui/PageHeader";
import AppButton from "../../../components/ui/AppButton";
import Loading from "../../../components/ui/Loading";
import EmptyState from "../../../components/ui/EmptyState";

import BookingTable from "../components/BookingTable";
import BookingCalendar from "../components/BookingCalendar";
import BookingDrawer from "../components/BookingDrawer";

import {
    useBookings,
} from "../hooks/useBookings";

export default function BookingList() {

    const navigate = useNavigate();

    const [view, setView] = useState("table");

    const [selectedBooking, setSelectedBooking] = useState(null);

    const [drawerOpen, setDrawerOpen] = useState(false);

    const [filters] = useState({
        search: "",
        status: "",
    });

    const {
        data,
        isLoading,
        error,
    } = useBookings(filters);

    const bookings = useMemo(() => {

        return data?.bookings || [];

    }, [data]);

    if (isLoading) {

        return <Loading />;

    }

    if (error) {

        return (

            <EmptyState

                title="Unable to load bookings"

                description="Please refresh the page."

            />

        );

    }

    const handleView = (booking) => {

        setSelectedBooking(booking);

        setDrawerOpen(true);

    };

    const handleDelete = (booking) => {

        if (

            window.confirm(

                `Delete booking ${booking.bookingNumber}?`

            )

        ) {

            toast.success("Booking Deleted");

        }

    };

    return (

        <div className="space-y-6">

            <PageHeader

                title="Bookings"

                subtitle="Manage all enterprise bookings"

                action={

                    <AppButton

                        onClick={() =>

                            navigate("/bookings/new")

                        }

                    >

                        <Plus size={18}/>

                        <span className="ml-2">

                            Create Booking

                        </span>

                    </AppButton>

                }

            />

            <div className="flex gap-3">

                <AppButton

                    variant={

                        view==="table"

                        ? "primary"

                        : "secondary"

                    }

                    onClick={()=>setView("table")}

                >

                    <List size={18}/>

                    <span className="ml-2">

                        Table

                    </span>

                </AppButton>

                <AppButton

                    variant={

                        view==="calendar"

                        ? "primary"

                        : "secondary"

                    }

                    onClick={()=>setView("calendar")}

                >

                    <Calendar size={18}/>

                    <span className="ml-2">

                        Calendar

                    </span>

                </AppButton>

            </div>

            {

                view==="table"

                ? (

                    <BookingTable

                        bookings={bookings}

                        loading={false}

                        onView={handleView}

                        onEdit={(booking)=>

                            navigate(

                                `/bookings/${booking.id}/edit`

                            )

                        }

                        onDelete={handleDelete}

                    />

                )

                : (

                    <BookingCalendar

                        bookings={bookings}

                        onEventClick={handleView}

                        onDateSelect={(info)=>{

                            navigate(

                                `/bookings/new?date=${info.startStr}`

                            );

                        }}

                        onEventDrop={(info)=>{

                            console.log(info);

                        }}

                    />

                )

            }

            <BookingDrawer

                open={drawerOpen}

                booking={selectedBooking}

                onClose={()=>

                    setDrawerOpen(false)

                }

                onApprove={()=>{

                    toast.success(

                        "Booking Approved"

                    );

                }}

                onReject={()=>{

                    toast.success(

                        "Booking Rejected"

                    );

                }}

                onCancel={()=>{

                    toast.success(

                        "Booking Cancelled"

                    );

                }}

                onPrint={()=>{

                    window.print();

                }}

            />

        </div>

    );

}