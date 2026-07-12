export default function AssetHistory() {

    const history = [

        {
            date: "01 Jan 2026",
            event: "Asset Registered",
        },

        {
            date: "05 Jan 2026",
            event: "Allocated to Mohammad Hafiz Shah",
        },

        {
            date: "20 Feb 2026",
            event: "Maintenance Request Raised",
        },

        {
            date: "24 Feb 2026",
            event: "Maintenance Completed",
        },

    ];

    return (

        <div className="rounded-2xl bg-white p-6 border">

            <h2 className="mb-6 text-xl font-bold">
                Asset Timeline
            </h2>

            <div className="space-y-6">

                {history.map((item,index)=>(

                    <div
                        key={index}
                        className="border-l-4 border-indigo-600 pl-5"
                    >

                        <h4 className="font-semibold">
                            {item.event}
                        </h4>

                        <p className="text-slate-500">
                            {item.date}
                        </p>

                    </div>

                ))}

            </div>

        </div>

    );

}