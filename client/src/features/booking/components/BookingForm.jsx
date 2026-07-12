import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { bookingSchema } from "../schemas/bookingSchema";

import AppButton from "../../../components/ui/AppButton";
import AppInput from "../../../components/ui/AppInput";

export default function BookingForm({

    assets = [],

    employees = [],

    loading = false,

    defaultValues = {},

    onSubmit,

}) {

    const {

        register,

        handleSubmit,

        formState: { errors },

    } = useForm({

        resolver: zodResolver(bookingSchema),

        defaultValues: {

            assetId: "",

            employeeId: "",

            bookingDate: "",

            startTime: "",

            endTime: "",

            purpose: "",

            remarks: "",

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

                        Employee

                    </label>

                    <select
                        {...register("employeeId")}
                        className="w-full rounded-xl border p-3"
                    >

                        <option value="">

                            Select Employee

                        </option>

                        {

                            employees.map(employee => (

                                <option
                                    key={employee.id}
                                    value={employee.id}
                                >

                                    {employee.employeeId} - {employee.fullName}

                                </option>

                            ))

                        }

                    </select>

                    <p className="mt-1 text-sm text-red-500">

                        {errors.employeeId?.message}

                    </p>

                </div>

                <AppInput
                    type="date"
                    label="Booking Date"
                    {...register("bookingDate")}
                    error={errors.bookingDate?.message}
                />

                <AppInput
                    type="time"
                    label="Start Time"
                    {...register("startTime")}
                    error={errors.startTime?.message}
                />

                <AppInput
                    type="time"
                    label="End Time"
                    {...register("endTime")}
                    error={errors.endTime?.message}
                />

            </div>

            <div>

                <label className="mb-2 block font-medium">

                    Purpose

                </label>

                <textarea
                    rows={4}
                    {...register("purpose")}
                    className="w-full rounded-xl border p-3"
                />

                <p className="mt-1 text-sm text-red-500">

                    {errors.purpose?.message}

                </p>

            </div>

            <div>

                <label className="mb-2 block font-medium">

                    Remarks

                </label>

                <textarea
                    rows={3}
                    {...register("remarks")}
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

                            : "Save Booking"

                    }

                </AppButton>

            </div>

        </form>

    );

}