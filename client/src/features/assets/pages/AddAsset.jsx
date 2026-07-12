import { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

import AssetForm from "../components/AssetForm";
import AssetImageUploader from "../components/AssetImageUploader";

import PageHeader from "../../../components/ui/PageHeader";
import AppCard from "../../../components/ui/AppCard";

import { useCreateAsset } from "../hooks/useAssets";

export default function AddAsset() {

    const navigate = useNavigate();

    const createAsset = useCreateAsset();

    const [image, setImage] = useState(null);

    const [preview, setPreview] = useState(null);

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
            name: "HR",
        },
    ];

    const categories = [
        {
            id: "1",
            name: "Laptop",
        },
        {
            id: "2",
            name: "Printer",
        },
        {
            id: "3",
            name: "Projector",
        },
    ];

    const handleImageChange = (e) => {

        const file = e.target.files[0];

        if (!file) return;

        setImage(file);

        setPreview(
            URL.createObjectURL(file)
        );

    };

    const removeImage = () => {

        setImage(null);

        setPreview(null);

    };

    const handleSubmit = async (data) => {

        try {

            const formData = new FormData();

            Object.keys(data).forEach((key) => {

                formData.append(
                    key,
                    data[key]
                );

            });

            if (image) {

                formData.append(
                    "image",
                    image
                );

            }

            await createAsset.mutateAsync(
                formData
            );

            toast.success(
                "Asset Registered Successfully"
            );

            navigate("/assets");

        }

        catch (error) {

            toast.error(
                error?.response?.data?.message ||
                "Unable to register asset."
            );

        }

    };

    return (

        <div className="space-y-6">

            <PageHeader
                title="Register Asset"
                subtitle="Add a new enterprise asset"
            />

            <div className="grid gap-6 lg:grid-cols-3">

                <div className="lg:col-span-2">

                    <AppCard>

                        <AssetForm
                            departments={departments}
                            categories={categories}
                            loading={
                                createAsset.isPending
                            }
                            onSubmit={handleSubmit}
                        />

                    </AppCard>

                </div>

                <div>

                    <AssetImageUploader
                        image={image}
                        preview={preview}
                        onChange={handleImageChange}
                        onRemove={removeImage}
                    />

                </div>

            </div>

        </div>

    );

}