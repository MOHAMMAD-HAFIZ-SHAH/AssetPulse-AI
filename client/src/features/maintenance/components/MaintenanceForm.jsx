import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { maintenanceSchema } from "../schemas/maintenanceSchema";

import AppButton from "../../../components/ui/AppButton";
import AppInput from "../../../components/ui/AppInput";

export default function MaintenanceForm({

    assets = [],

    technicians = [],

    defaultValues = {},

    loading = false,

    onSubmit,

}) {

    const {

        register,

        handleSubmit,

        formState: { errors },

    } = useForm({

        resolver: zodResolver(maintenanceSchema),

        defaultValues: {

            assetId: "",

            maintenanceType: "",

            priority: "",

            technicianId: "",

            startDate: "",

            dueDate: "",

            estimatedCost: "",

            description: "",

            notes: "",

            ...defaultValues,

        },

    });

    return (

        <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-6"
        >

            <div className="grid grid-cols-2 gap-6">

                <div>

                    <label className="mb-2 block font-medium">

                        Asset

                    </label>

                    <select
                        {...register("assetId")}
                        className="w-full rounded-xl border p-3"
                    >

                        <option value="">

                            Select Asset

                        </option>

                        {

                            assets.map(asset => (

                                <option
                                    key={asset.id}
                                    value={asset.id}
                                >

                                    {asset.assetTag} - {asset.assetName}

                                </option>

                            ))

                        }

                    </select>

                    <p className="mt-1 text-sm text-red-500">

                        {errors.assetId?.message}

                    </p>

                </div>

                <div>

                    <label className="mb-2 block font-medium">

                        Maintenance Type

                    </label>

                    <select
                        {...register("maintenanceType")}
                        className="w-full rounded-xl border p-3"
                    >

                        <option value="">

                            Select Type

                        </option>

                        <option value="Preventive">

                            Preventive

                        </option>

                        <option value="Corrective">

                            Corrective

                        </option>

                        <option value="Emergency">

                            Emergency

                        </option>

                    </select>

                    <p className="mt-1 text-sm text-red-500">

                        {errors.maintenanceType?.message}

                    </p>

                </div>

                <div>

                    <label className="mb-2 block font-medium">

                        Priority

                    </label>

                    <select
                        {...register("priority")}
                        className="w-full rounded-xl border p-3"
                    >

                        <option value="">

                            Select Priority

                        </option>

                        <option value="Low">

                            Low

                        </option>

                        <option value="Medium">

                            Medium

                        </option>

                        <option value="High">

                            High

                        </option>

                        <option value="Critical">

                            Critical

                        </option>

                    </select>

                    <p className="mt-1 text-sm text-red-500">

                        {errors.priority?.message}

                    </p>

                </div>

                <div>

                    <label className="mb-2 block font-medium">

                        Technician

                    </label>

                    <select
                        {...register("technicianId")}
                        className="w-full rounded-xl border p-3"
                    >

                        <option value="">

                            Assign Technician

                        </option>

                        {

                            technicians.map(technician => (

                                <option
                                    key={technician.id}
                                    value={technician.id}
                                >

                                    {technician.fullName}

                                </option>

                            ))

                        }

                    </select>

                </div>

                <AppInput
                    type="date"
                    label="Start Date"
                    {...register("startDate")}
                    error={errors.startDate?.message}
                />

                <AppInput
                    type="date"
                    label="Due Date"
                    {...register("dueDate")}
                    error={errors.dueDate?.message}
                />

                <AppInput
                    type="number"
                    label="Estimated Cost"
                    {...register("estimatedCost")}
                    error={errors.estimatedCost?.message}
                />

                <div>

                    <label className="mb-2 block font-medium">

                        Attach Images

                    </label>

                    <input
                        type="file"
                        multiple
                        {...register("attachments")}
                        className="w-full rounded-xl border p-3"
                    />

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

                <p className="mt-1 text-sm text-red-500">

                    {errors.description?.message}

                </p>

            </div>

            <div>

                <label className="mb-2 block font-medium">

                    Notes

                </label>

                <textarea
                    rows={4}
                    {...register("notes")}
                    className="w-full rounded-xl border p-3"
                />

            </div>

            <div className="flex justify-end">

                <AppButton
                    type="submit"
                    disabled={loading}
                >

                    {

                        loading

                            ? "Saving..."

                            : "Save Maintenance"

                    }

                </AppButton>

            </div>

        </form>

    );

}