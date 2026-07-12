import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import toast from "react-hot-toast";

import PageHeader from "../../../components/ui/PageHeader";
import AppCard from "../../../components/ui/AppCard";
import Loading from "../../../components/ui/Loading";
import EmptyState from "../../../components/ui/EmptyState";

import AssetForm from "../components/AssetForm";
import AssetImageUploader from "../components/AssetImageUploader";

import {
    useAsset,
    useUpdateAsset,
} from "../hooks/useAssets";

export default function EditAsset() {

    const { id } = useParams();

    const navigate = useNavigate();

    const { data, isLoading, error } = useAsset(id);

    const updateAsset = useUpdateAsset();

    const [preview, setPreview] = useState(null);
    const [image, setImage] = useState(null);

    useEffect(() => {

        if (data?.imageUrl) {

            setPreview(data.imageUrl);

        }

    }, [data]);

    const handleImageChange = (e) => {

        const file = e.target.files[0];

        if (!file) return;

        setImage(file);

        setPreview(URL.createObjectURL(file));

    };

    const removeImage = () => {

        setImage(null);

        setPreview(null);

    };

    const handleSubmit = async (form) => {

        try {

            const formData = new FormData();

            Object.entries(form).forEach(([key, value]) => {

                formData.append(key, value);

            });

            if (image) {

                formData.append("image", image);

            }

            await updateAsset.mutateAsync({

                id,

                data: formData,

            });

            toast.success("Asset Updated Successfully");

            navigate("/assets");

        }

        catch (err) {

            toast.error(

                err?.response?.data?.message ||

                "Unable to update asset."

            );

        }

    };

    if (isLoading) {

        return <Loading />;

    }

    if (error || !data) {

        return (

            <EmptyState

                title="Asset Not Found"

                description="The requested asset could not be loaded."

            />

        );

    }

    return (

        <div className="space-y-6">

            <PageHeader

                title="Edit Asset"

                subtitle="Update asset information"

            />

            <div className="grid gap-6 lg:grid-cols-3">

                <div className="lg:col-span-2">

                    <AppCard>

                        <AssetForm

                            defaultValues={data}

                            departments={data.departments || []}

                            categories={data.categories || []}

                            loading={updateAsset.isPending}

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