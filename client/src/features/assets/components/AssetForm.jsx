import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { assetSchema } from "../schemas/assetSchema";
import { AssetStatusOptions } from "../constants/assetStatus";

import AppInput from "../../../components/ui/AppInput";
import AppButton from "../../../components/ui/AppButton";

export default function AssetForm({
    defaultValues = {},
    departments = [],
    categories = [],
    loading = false,
    onSubmit,
}) {

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({

        resolver: zodResolver(assetSchema),

        defaultValues: {

            assetName: "",
            categoryId: "",
            serialNumber: "",
            acquisitionDate: "",
            acquisitionCost: "",
            departmentId: "",
            location: "",
            condition: "",
            warrantyExpiry: "",
            description: "",
            isBookable: false,
            status: "Available",

            ...defaultValues,

        },

    });

    return (

        <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-6"
        >

            <div className="grid grid-cols-2 gap-6">

                <AppInput
                    label="Asset Name"
                    {...register("assetName")}
                    error={errors.assetName?.message}
                />

                <div>

                    <label className="mb-2 block font-medium">
                        Category
                    </label>

                    <select
                        {...register("categoryId")}
                        className="w-full rounded-xl border p-3"
                    >

                        <option value="">
                            Select Category
                        </option>

                        {

                            categories.map((category)=>(

                                <option
                                    key={category.id}
                                    value={category.id}
                                >

                                    {category.name}

                                </option>

                            ))

                        }

                    </select>

                    <p className="text-red-500 text-sm mt-1">
                        {errors.categoryId?.message}
                    </p>

                </div>

                <AppInput
                    label="Serial Number"
                    {...register("serialNumber")}
                    error={errors.serialNumber?.message}
                />

                <AppInput
                    type="date"
                    label="Acquisition Date"
                    {...register("acquisitionDate")}
                    error={errors.acquisitionDate?.message}
                />

                <AppInput
                    type="number"
                    label="Acquisition Cost"
                    {...register("acquisitionCost")}
                    error={errors.acquisitionCost?.message}
                />

                <div>

                    <label className="mb-2 block font-medium">
                        Department
                    </label>

                    <select
                        {...register("departmentId")}
                        className="w-full rounded-xl border p-3"
                    >

                        <option value="">
                            Select Department
                        </option>

                        {

                            departments.map((department)=>(

                                <option
                                    key={department.id}
                                    value={department.id}
                                >

                                    {department.name}

                                </option>

                            ))

                        }

                    </select>

                    <p className="text-red-500 text-sm mt-1">
                        {errors.departmentId?.message}
                    </p>

                </div>

                <AppInput
                    label="Location"
                    {...register("location")}
                    error={errors.location?.message}
                />

                <AppInput
                    label="Condition"
                    {...register("condition")}
                    error={errors.condition?.message}
                />

                <AppInput
                    type="date"
                    label="Warranty Expiry"
                    {...register("warrantyExpiry")}
                />

                <div>

                    <label className="mb-2 block font-medium">
                        Asset Status
                    </label>

                    <select
                        {...register("status")}
                        className="w-full rounded-xl border p-3"
                    >

                        {

                            AssetStatusOptions.map((status)=>(

                                <option
                                    key={status.value}
                                    value={status.value}
                                >

                                    {status.label}

                                </option>

                            ))

                        }

                    </select>

                </div>

            </div>

            <div>

                <label className="mb-2 block font-medium">
                    Description
                </label>

                <textarea
                    rows={5}
                    {...register("description")}
                    className="w-full rounded-xl border p-3"
                />

            </div>

            <div className="flex items-center gap-3">

                <input
                    type="checkbox"
                    {...register("isBookable")}
                />

                <label>

                    This asset can be booked

                </label>

            </div>

            <div className="flex justify-end">

                <AppButton
                    type="submit"
                    disabled={loading}
                >

                    {

                        loading
                            ? "Saving..."
                            : "Save Asset"

                    }

                </AppButton>

            </div>

        </form>

    );

}