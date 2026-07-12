import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";

export default function BookingCalendar({

    bookings = [],

    onEventClick,

    onDateSelect,

    onEventDrop,

}) {

    const events = bookings.map((booking) => ({

        id: booking.id,

        title: booking.asset.assetName,

        start: `${booking.bookingDate}T${booking.startTime}`,

        end: `${booking.bookingDate}T${booking.endTime}`,

        backgroundColor:
            booking.status === "Approved"
                ? "#16a34a"
                : booking.status === "Pending"
                ? "#ca8a04"
                : "#2563eb",

        borderColor:
            booking.status === "Approved"
                ? "#16a34a"
                : booking.status === "Pending"
                ? "#ca8a04"
                : "#2563eb",

        extendedProps: booking,

    }));

    return (

        <div className="rounded-2xl border bg-white p-6 shadow-sm">

            <FullCalendar

                plugins={[

                    dayGridPlugin,

                    timeGridPlugin,

                    interactionPlugin,

                ]}

                initialView="dayGridMonth"

                selectable

                editable

                height="auto"

                events={events}

                eventClick={(info) =>

                    onEventClick(

                        info.event.extendedProps

                    )

                }

                select={(info) =>

                    onDateSelect(info)

                }

                eventDrop={(info) =>

                    onEventDrop(info)

                }

                headerToolbar={{

                    left: "prev,next today",

                    center: "title",

                    right:

                        "dayGridMonth,timeGridWeek,timeGridDay",

                }}

            />

        </div>

    );

}