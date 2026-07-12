import { UploadCloud } from "lucide-react";

export default function AssetImages() {

    return (

        <div className="rounded-2xl border bg-white p-8">

            <h2 className="text-2xl font-bold mb-6">
                Asset Images
            </h2>

            <label className="flex h-64 cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-dashed border-slate-300">

                <UploadCloud
                    size={60}
                    className="text-slate-400"
                />

                <p className="mt-5">
                    Upload Asset Image
                </p>

                <input
                    hidden
                    type="file"
                />

            </label>

        </div>

    );

}