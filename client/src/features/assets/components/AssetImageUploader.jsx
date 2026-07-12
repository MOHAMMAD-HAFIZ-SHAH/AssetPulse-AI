import { useRef } from "react";
import {
    Upload,
    Image as ImageIcon,
    Trash2,
} from "lucide-react";

export default function AssetImageUploader({
    image,
    preview,
    onChange,
    onRemove,
}) {

    const fileInputRef = useRef(null);

    const handleClick = () => {
        fileInputRef.current.click();
    };

    return (

        <div className="rounded-2xl border bg-white p-6">

            <h2 className="mb-5 text-xl font-semibold">
                Asset Image
            </h2>

            <input
                ref={fileInputRef}
                hidden
                type="file"
                accept="image/*"
                onChange={onChange}
            />

            {!preview ? (

                <div
                    onClick={handleClick}
                    className="flex h-72 cursor-pointer flex-col items-center justify-center rounded-2xl border-2 border-dashed border-slate-300 transition hover:border-indigo-600 hover:bg-indigo-50"
                >

                    <Upload
                        size={55}
                        className="text-indigo-600"
                    />

                    <h3 className="mt-6 text-lg font-semibold">
                        Upload Asset Image
                    </h3>

                    <p className="mt-2 text-slate-500">
                        JPG, PNG or WEBP
                    </p>

                </div>

            ) : (

                <div>

                    <img
                        src={preview}
                        alt="Asset"
                        className="h-72 w-full rounded-2xl object-cover"
                    />

                    <div className="mt-5 flex justify-end gap-3">

                        <button
                            type="button"
                            onClick={handleClick}
                            className="flex items-center gap-2 rounded-xl border px-5 py-3 hover:bg-slate-100"
                        >

                            <ImageIcon size={18} />

                            Change

                        </button>

                        <button
                            type="button"
                            onClick={onRemove}
                            className="flex items-center gap-2 rounded-xl bg-red-600 px-5 py-3 text-white hover:bg-red-700"
                        >

                            <Trash2 size={18} />

                            Remove

                        </button>

                    </div>

                </div>

            )}

        </div>

    );

}