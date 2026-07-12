import { useNavigate, useSearchParams } from "react-router-dom";
import { useState } from "react";
import toast from "react-hot-toast";

import PageHeader from "../../../components/ui/PageHeader";
import AppCard from "../../../components/ui/AppCard";
import AppButton from "../../../components/ui/AppButton";

import {
    useTransferAllocation,
} from "../hooks/useAllocation";

export default function TransferAsset() {

    const navigate = useNavigate();

    const [searchParams] = useSearchParams();

    const allocationId = searchParams.get("allocation");

    const transferAllocation = useTransferAllocation();

    const [form, setForm] = useState({

        allocationType: "Employee",

        employeeId: "",

        departmentId: "",

        transferDate: "",

        reason: "",

        remarks: "",

    });

    const employees = [

        {

            id: "1",

            employeeId: "EMP001",

            fullName: "Mohammad Hafiz Shah",

        },

        {

            id: "2",

            employeeId: "EMP002",

            fullName: "Rahul Sharma",

        },

        {

            id: "3",

            employeeId: "EMP003",

            fullName: "Amit Kumar",

        },

    ];

    const departments = [

        {

            id: "1",

            name: "IT Department",

        },

        {

            id: "2",

            name: "Finance",

        },

        {

            id: "3",

            name: "Human Resources",

        },

    ];

    const handleChange = (e) => {

        setForm({

            ...form,

            [e.target.name]: e.target.value,

        });

    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            await transferAllocation.mutateAsync({

                id: allocationId,

                data: form,

            });

            toast.success(

                "Asset transferred successfully."

            );

            navigate("/allocations");

        }

        catch (error) {

            toast.error(

                error?.response?.data?.message ||

                "Transfer failed."

            );

        }

    };

    return (

        <div className="space-y-6">

            <PageHeader

                title="Transfer Asset"

                subtitle="Transfer an allocated asset to another employee or department"

            />

            <AppCard>

                <form

                    onSubmit={handleSubmit}

                    className="space-y-6"

                >

                    <div className="rounded-xl border bg-slate-50 p-5">

                        <h3 className="text-lg font-semibold">

                            Current Allocation

                        </h3>

                        <div className="mt-4 grid grid-cols-2 gap-5">

                            <Info

                                label="Allocation ID"

                                value={allocationId || "-"}

                            />

                            <Info

                                label="Current Holder"

                                value="Mohammad Hafiz Shah"

                            />

                            <Info

                                label="Asset"

                                value="Dell Latitude 7440"

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

                                Transfer To

                            </label>

                            <select

                                name="allocationType"

                                value={form.allocationType}

                                onChange={handleChange}

                                className="w-full rounded-xl border p-3"

                            >

                                <option value="Employee">

                                    Employee

                                </option>

                                <option value="Department">

                                    Department

                                </option>

                            </select>

                        </div>

                        {

                            form.allocationType === "Employee"

                            ? (

                                <div>

                                    <label className="mb-2 block font-medium">

                                        Employee

                                    </label>

                                    <select

                                        name="employeeId"

                                        value={form.employeeId}

                                        onChange={handleChange}

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

                                </div>

                            )

                            : (

                                <div>

                                    <label className="mb-2 block font-medium">

                                        Department

                                    </label>

                                    <select

                                        name="departmentId"

                                        value={form.departmentId}

                                        onChange={handleChange}

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

                                </div>

                            )

                        }

                        <div>

                            <label className="mb-2 block font-medium">

                                Transfer Date

                            </label>

                            <input

                                type="date"

                                name="transferDate"

                                value={form.transferDate}

                                onChange={handleChange}

                                className="w-full rounded-xl border p-3"

                            />

                        </div>

                    </div>

                    <div>

                        <label className="mb-2 block font-medium">

                            Transfer Reason

                        </label>

                        <textarea

                            rows={4}

                            name="reason"

                            value={form.reason}

                            onChange={handleChange}

                            className="w-full rounded-xl border p-3"

                        />

                    </div>

                    <div>

                        <label className="mb-2 block font-medium">

                            Remarks

                        </label>

                        <textarea

                            rows={3}

                            name="remarks"

                            value={form.remarks}

                            onChange={handleChange}

                            className="w-full rounded-xl border p-3"

                        />

                    </div>

                    <div className="flex justify-end">

                        <AppButton

                            type="submit"

                            disabled={transferAllocation.isPending}

                        >

                            {

                                transferAllocation.isPending

                                    ? "Transferring..."

                                    : "Transfer Asset"

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