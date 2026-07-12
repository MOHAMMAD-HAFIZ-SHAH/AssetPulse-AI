import { useState } from "react";

import AppCard from "../ui/AppCard";
import AppInput from "../ui/AppInput";
import AppButton from "../ui/AppButton";

export default function TransferDialog() {

    const [transfer, setTransfer] = useState({
        assetTag: "",
        currentHolder: "",
        newHolder: "",
        department: "",
        reason: "",
    });

    const handleChange = (e) => {
        setTransfer({
            ...transfer,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(transfer);
    };

    return (

        <AppCard title="Transfer Request">

            <form
                onSubmit={handleSubmit}
                className="grid grid-cols-2 gap-6"
            >

                <AppInput
                    label="Asset Tag"
                    name="assetTag"
                    value={transfer.assetTag}
                    onChange={handleChange}
                    placeholder="AF-0001"
                />

                <AppInput
                    label="Current Holder"
                    name="currentHolder"
                    value={transfer.currentHolder}
                    onChange={handleChange}
                />

                <AppInput
                    label="Transfer To"
                    name="newHolder"
                    value={transfer.newHolder}
                    onChange={handleChange}
                />

                <AppInput
                    label="Department"
                    name="department"
                    value={transfer.department}
                    onChange={handleChange}
                />

                <div className="col-span-2">

                    <label className="mb-2 block font-semibold">
                        Reason
                    </label>

                    <textarea
                        rows="4"
                        name="reason"
                        value={transfer.reason}
                        onChange={handleChange}
                        className="w-full rounded-xl border border-slate-300 p-3 outline-none focus:border-indigo-600"
                    />

                </div>

                <div className="col-span-2 flex justify-end">

                    <AppButton type="submit">

                        Submit Transfer Request

                    </AppButton>

                </div>

            </form>

        </AppCard>

    );

}