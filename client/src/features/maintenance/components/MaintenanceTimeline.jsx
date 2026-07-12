import {
    CalendarDays,
    CheckCircle2,
    Clock3,
    PlayCircle,
    Wrench,
    XCircle,
} from "lucide-react";

const iconMap = {
    Requested: <Clock3 size={18} />,
    Approved: <CheckCircle2 size={18} />,
    Assigned: <CalendarDays size={18} />,
    "In Progress": <PlayCircle size={18} />,
    Completed: <Wrench size={18} />,
    Cancelled: <XCircle size={18} />,
};

const colorMap = {
    Requested: "bg-yellow-500",
    Approved: "bg-blue-500",
    Assigned: "bg-purple-500",
    "In Progress": "bg-orange-500",
    Completed: "bg-green-500",
    Cancelled: "bg-red-500",
};

export default function MaintenanceTimeline({

    timeline = [],

}) {

    if (!timeline.length) {

        return (

            <div className="rounded-2xl border bg-white p-8 text-center">

                <Clock3
                    size={40}
                    className="mx-auto text-slate-400"
                />

                <h2 className="mt-4 text-lg font-semibold">

                    No Timeline Available

                </h2>

                <p className="mt-2 text-slate-500">

                    Activity will appear here.

                </p>

            </div>

        );

    }

    return (

        <div className="rounded-2xl border bg-white p-6">

            <h2 className="mb-8 text-2xl font-bold">

                Maintenance Timeline

            </h2>

            <div className="space-y-8">

                {

                    timeline.map((item, index) => (

                        <div
                            key={index}
                            className="relative flex gap-5"
                        >

                            <div className="flex flex-col items-center">

                                <div
                                    className={`flex h-12 w-12 items-center justify-center rounded-full text-white ${

                                        colorMap[item.status] ||

                                        "bg-slate-500"

                                    }`}
                                >

                                    {

                                        iconMap[item.status] ||

                                        <Clock3 size={18}/>

                                    }

                                </div>

                                {

                                    index !== timeline.length - 1 && (

                                        <div className="h-16 w-1 bg-slate-200"/>

                                    )

                                }

                            </div>

                            <div className="flex-1">

                                <div className="flex items-center justify-between">

                                    <h3 className="text-lg font-semibold">

                                        {item.status}

                                    </h3>

                                    <span className="text-sm text-slate-500">

                                        {item.date}

                                    </span>

                                </div>

                                <p className="mt-2 text-slate-600">

                                    {item.description}

                                </p>

                                {

                                    item.user && (

                                        <p className="mt-3 text-sm text-slate-500">

                                            By

                                            <span className="ml-1 font-medium">

                                                {item.user}

                                            </span>

                                        </p>

                                    )

                                }

                            </div>

                        </div>

                    ))

                }

            </div>

        </div>

    );

}