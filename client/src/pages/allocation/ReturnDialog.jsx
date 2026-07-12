import { useState } from "react";

import AppCard from "../ui/AppCard";
import AppInput from "../ui/AppInput";
import AppButton from "../ui/AppButton";

export default function ReturnDialog() {

    const [returnData, setReturnData] = useState({
        assetTag: "",
        employee: "",
        returnDate: "",
        condition: "",
        remarks: "",
    });

    const handleChange = (e) => {

        setReturnData({

            ...returnData,

            [e.target.name]: e.target.value,

        });

    };

    const handleSubmit = (e) => {

        e.preventDefault();

        console.log(returnData);

    };

    return (

        <AppCard title="Return Asset">

            <form
                onSubmit={handleSubmit}
                className="grid grid-cols-2 gap-6"
            >

                <AppInput
                    label="Asset Tag"
                    name="assetTag"
                    value={returnData.assetTag}
                    onChange={handleChange}
                    placeholder="AF-0001"
                />

                <AppInput
                    label="Employee"
                    name="employee"
                    value={returnData.employee}
                    onChange={handleChange}
                />

                <AppInput
                    label="Return Date"
                    type="date"
                    name="returnDate"
                    value={returnData.returnDate}
                    onChange={handleChange}
                />

                <div>

                    <label className="mb-2 block font-semibold">
                        Asset Condition
                    </label>

                    <select
                        name="condition"
                        value={returnData.condition}
                        onChange={handleChange}
                        className="w-full rounded-xl border border-slate-300 p-3 outline-none focus:border-indigo-600"
                    >

                        <option value="">
                            Select Condition
                        </option>

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

                <div className="col-span-2">

                    <label className="mb-2 block font-semibold">
                        Return Remarks
                    </label>

                    <textarea
                        rows="4"
                        name="remarks"
                        value={returnData.remarks}
                        onChange={handleChange}
                        className="w-full rounded-xl border border-slate-300 p-3 outline-none focus:border-indigo-600"
                    />

                </div>

                <div className="col-span-2 flex justify-end">

                    <AppButton type="submit">

                        Return Asset

                    </AppButton>

                </div>

            </form>

        </AppCard>

    );

}