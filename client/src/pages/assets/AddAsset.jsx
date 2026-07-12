import { useState } from "react";

import AppCard from "../../components/ui/AppCard";
import AppInput from "../../components/ui/AppInput";
import AppButton from "../../components/ui/AppButton";

export default function AddAsset() {

    const [asset, setAsset] = useState({
        assetName: "",
        category: "",
        serialNumber: "",
        acquisitionDate: "",
        acquisitionCost: "",
        department: "",
        location: "",
        condition: "",
        warranty: "",
        description: "",
    });

    const handleChange = (e) => {
        setAsset({
            ...asset,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(asset);
    };

    return (

        <AppCard title="Register New Asset">

            <form
                onSubmit={handleSubmit}
                className="grid grid-cols-2 gap-6"
            >

                <AppInput
                    label="Asset Name"
                    name="assetName"
                    value={asset.assetName}
                    onChange={handleChange}
                />

                <AppInput
                    label="Category"
                    name="category"
                    value={asset.category}
                    onChange={handleChange}
                />

                <AppInput
                    label="Serial Number"
                    name="serialNumber"
                    value={asset.serialNumber}
                    onChange={handleChange}
                />

                <AppInput
                    label="Acquisition Date"
                    name="acquisitionDate"
                    type="date"
                    value={asset.acquisitionDate}
                    onChange={handleChange}
                />

                <AppInput
                    label="Acquisition Cost"
                    name="acquisitionCost"
                    type="number"
                    value={asset.acquisitionCost}
                    onChange={handleChange}
                />

                <AppInput
                    label="Department"
                    name="department"
                    value={asset.department}
                    onChange={handleChange}
                />

                <AppInput
                    label="Location"
                    name="location"
                    value={asset.location}
                    onChange={handleChange}
                />

                <AppInput
                    label="Condition"
                    name="condition"
                    value={asset.condition}
                    onChange={handleChange}
                />

                <AppInput
                    label="Warranty Expiry"
                    name="warranty"
                    type="date"
                    value={asset.warranty}
                    onChange={handleChange}
                />

                <div className="col-span-2">

                    <label className="mb-2 block font-semibold">
                        Description
                    </label>

                    <textarea
                        rows="4"
                        name="description"
                        value={asset.description}
                        onChange={handleChange}
                        className="w-full rounded-xl border border-slate-300 p-3 outline-none focus:border-indigo-600"
                    />

                </div>

                <div className="col-span-2 flex justify-end">

                    <AppButton type="submit">
                        Register Asset
                    </AppButton>

                </div>

            </form>

        </AppCard>

    );

}