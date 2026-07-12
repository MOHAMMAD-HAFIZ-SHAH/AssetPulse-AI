export default function AssetCard({asset}){

    return(

        <div className="rounded-2xl border bg-white p-5 shadow-sm">

            <img
                src={asset.image}
                alt={asset.name}
                className="h-40 w-full rounded-xl object-cover"
            />

            <h2 className="mt-4 text-lg font-semibold">
                {asset.name}
            </h2>

            <p className="text-slate-500">
                {asset.tag}
            </p>

            <div className="mt-4 flex justify-between">

                <span>

                    {asset.category}

                </span>

                <span>

                    {asset.status}

                </span>

            </div>

        </div>

    );

}