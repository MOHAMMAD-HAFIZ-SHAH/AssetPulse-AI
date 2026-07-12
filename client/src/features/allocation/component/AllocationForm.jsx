import { useWatch, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { allocationSchema } from "../schemas/allocationSchema";

import AppButton from "../../../components/ui/AppButton";
import AppInput from "../../../components/ui/AppInput";

export default function AllocationForm({

    assets = [],

    employees = [],

    departments = [],

    defaultValues = {},

    loading = false,

    onSubmit,

}) {

    const {

        register,

        control,

        handleSubmit,

        formState: { errors },

    } = useForm({

        resolver: zodResolver(allocationSchema),

        defaultValues: {

            assetId: "",

            allocationType: "",

            employeeId: "",

            departmentId: "",

            allocationDate: "",

            expectedReturnDate: "",

            purpose: "",

            remarks: "",

            ...defaultValues,

        },

    });

    const allocationType = useWatch({

        control,

        name: "allocationType",

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

                        Allocation Type

                    </label>

                    <select
                        {...register("allocationType")}
                        className="w-full rounded-xl border p-3"
                    >

                        <option value="">

                            Select Type

                        </option>

                        <option value="Employee">

                            Employee

                        </option>

                        <option value="Department">

                            Department

                        </option>

                    </select>

                    <p className="mt-1 text-sm text-red-500">

                        {errors.allocationType?.message}

                    </p>

                </div>

                {

                    allocationType === "Employee" && (

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

                                            {employee.employeeId}

                                            {" - "}

                                            {employee.fullName}

                                        </option>

                                    ))

                                }

                            </select>

                            <p className="mt-1 text-sm text-red-500">

                                {errors.employeeId?.message}

                            </p>

                        </div>

                    )

                }

                {

                    allocationType === "Department" && (

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

                                    departments.map(department => (

                                        <option
                                            key={department.id}
                                            value={department.id}
                                        >

                                            {department.name}

                                        </option>

                                    ))

                                }

                            </select>

                            <p className="mt-1 text-sm text-red-500">

                                {errors.departmentId?.message}

                            </p>

                        </div>

                    )

                }

                <AppInput
                    type="date"
                    label="Allocation Date"
                    {...register("allocationDate")}
                    error={errors.allocationDate?.message}
                />

                <AppInput
                    type="date"
                    label="Expected Return Date"
                    {...register("expectedReturnDate")}
                    error={errors.expectedReturnDate?.message}
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

                <p className="mt-1 text-sm text-red-500">

                    {errors.remarks?.message}

                </p>

            </div>

            <div className="flex justify-end">

                <AppButton
                    type="submit"
                    disabled={loading}
                >

                    {

                        loading

                            ? "Saving..."

                            : "Allocate Asset"

                    }

                </AppButton>

            </div>

        </form>

    );

}