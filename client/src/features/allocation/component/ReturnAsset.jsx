import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import toast from "react-hot-toast";

import PageHeader from "../../../components/ui/PageHeader";
import AppCard from "../../../components/ui/AppCard";
import AppButton from "../../../components/ui/AppButton";

import { useReturnAsset } from "../hooks/useAllocation";

export default function ReturnAsset() {

    const navigate = useNavigate();

    const [searchParams] = useSearchParams();

    const allocationId = searchParams.get("allocation");

    const returnAsset = useReturnAsset();

    const [form, setForm] = useState({

        returnDate: "",

        assetCondition: "Good",

        checklist: {

            charger: false,

            battery: false,

            accessories: false,

            packaging: false,

        },

        damageReported: false,

        damageDescription: "",

        remarks: "",

        photos: [],

    });

    const handleChange = (e) => {

        const { name, value, type, checked } = e.target;

        setForm((prev) => ({

            ...prev,

            [name]:

                type === "checkbox"

                    ? checked

                    : value,

        }));

    };

    const handleChecklist = (e) => {

        const { name, checked } = e.target;

        setForm((prev) => ({

            ...prev,

            checklist: {

                ...prev.checklist,

                [name]: checked,

            },

        }));

    };

    const handlePhotos = (e) => {

        setForm((prev) => ({

            ...prev,

            photos: Array.from(e.target.files),

        }));

    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            const formData = new FormData();

            formData.append(

                "returnDate",

                form.returnDate

            );

            formData.append(

                "assetCondition",

                form.assetCondition

            );

            formData.append(

                "damageReported",

                form.damageReported

            );

            formData.append(

                "damageDescription",

                form.damageDescription

            );

            formData.append(

                "remarks",

                form.remarks

            );

            formData.append(

                "checklist",

                JSON.stringify(form.checklist)

            );

            form.photos.forEach((photo) => {

                formData.append(

                    "photos",

                    photo

                );

            });

            await returnAsset.mutateAsync({

                id: allocationId,

                data: formData,

            });

            toast.success(

                "Asset Returned Successfully"

            );

            navigate("/allocations");

        }

        catch (error) {

            toast.error(

                error?.response?.data?.message ||

                "Unable to return asset."

            );

        }

    };

    return (

        <div className="space-y-6">

            <PageHeader

                title="Return Asset"

                subtitle="Complete the asset return process"

            />

            <AppCard>

                <form

                    onSubmit={handleSubmit}

                    className="space-y-8"

                >

                    <div className="rounded-xl border bg-slate-50 p-6">

                        <h2 className="text-xl font-semibold">

                            Allocation Information

                        </h2>

                        <div className="mt-5 grid grid-cols-2 gap-5">

                            <Info

                                label="Allocation ID"

                                value={allocationId || "-"}

                            />

                            <Info

                                label="Asset"

                                value="Dell Latitude 7440"

                            />

                            <Info

                                label="Current Holder"

                                value="Mohammad Hafiz Shah"

                            />

                            <Info

                                label="Department"

                                value="IT Department"

                            />

                        </div>

                    </div>

                    <div className="grid grid-cols-2 gap-6">

                        <div>

                            <label className="mb-2 block font-medium">

                                Return Date

                            </label>

                            <input

                                type="date"

                                name="returnDate"

                                value={form.returnDate}

                                onChange={handleChange}

                                className="w-full rounded-xl border p-3"

                                required

                            />

                        </div>

                        <div>

                            <label className="mb-2 block font-medium">

                                Asset Condition

                            </label>

                            <select

                                name="assetCondition"

                                value={form.assetCondition}

                                onChange={handleChange}

                                className="w-full rounded-xl border p-3"

                            >

                                <option>

                                    Excellent

                                </option>

                                <option>

                                    Good

                                </option>

                                <option>

                                    Fair

                                </option>

                                <option>

                                    Damaged

                                </option>

                            </select>

                        </div>

                    </div>

                    <div>

                        <h2 className="mb-4 text-xl font-semibold">

                            Return Checklist

                        </h2>

                        <div className="grid grid-cols-2 gap-4">

                            <CheckItem

                                name="charger"

                                checked={form.checklist.charger}

                                onChange={handleChecklist}

                                label="Charger Returned"

                            />

                            <CheckItem

                                name="battery"

                                checked={form.checklist.battery}

                                onChange={handleChecklist}

                                label="Battery Verified"

                            />

                            <CheckItem

                                name="accessories"

                                checked={form.checklist.accessories}

                                onChange={handleChecklist}

                                label="Accessories Returned"

                            />

                            <CheckItem

                                name="packaging"

                                checked={form.checklist.packaging}

                                onChange={handleChecklist}

                                label="Original Packaging"

                            />

                        </div>

                    </div>

                    <div>

                        <label className="flex items-center gap-3">

                            <input

                                type="checkbox"

                                name="damageReported"

                                checked={form.damageReported}

                                onChange={handleChange}

                            />

                            Damage Reported

                        </label>

                    </div>

                    {

                        form.damageReported && (

                            <div>

                                <label className="mb-2 block font-medium">

                                    Damage Description

                                </label>

                                <textarea

                                    rows={4}

                                    name="damageDescription"

                                    value={form.damageDescription}

                                    onChange={handleChange}

                                    className="w-full rounded-xl border p-3"

                                />

                            </div>

                        )

                    }

                    <div>

                        <label className="mb-2 block font-medium">

                            Upload Return Photos

                        </label>

                        <input

                            type="file"

                            multiple

                            onChange={handlePhotos}

                            className="w-full rounded-xl border p-3"

                        />

                    </div>

                    <div>

                        <label className="mb-2 block font-medium">

                            Remarks

                        </label>

                        <textarea

                            rows={4}

                            name="remarks"

                            value={form.remarks}

                            onChange={handleChange}

                            className="w-full rounded-xl border p-3"

                        />

                    </div>

                    <div className="flex justify-end">

                        <AppButton

                            type="submit"

                            disabled={returnAsset.isPending}

                        >

                            {

                                returnAsset.isPending

                                    ? "Returning..."

                                    : "Return Asset"

                            }

                        </AppButton>

                    </div>

                </form>

            </AppCard>

        </div>

    );

}

function Info({

    label,

    value,

}) {

    return (

        <div>

            <p className="text-sm text-slate-500">

                {label}

            </p>

            <h3 className="mt-2 font-semibold">

                {value}

            </h3>

        </div>

    );

}

function CheckItem({

    name,

    checked,

    onChange,

    label,

}) {

    return (

        <label className="flex items-center gap-3 rounded-lg border p-4">

            <input

                type="checkbox"

                name={name}

                checked={checked}

                onChange={onChange}

            />

            {label}

        </label>

    );

}