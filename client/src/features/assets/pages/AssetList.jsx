import { useMemo, useState } from "react";
import { Plus } from "lucide-react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

import PageHeader from "../../../components/ui/PageHeader";
import AppButton from "../../../components/ui/AppButton";
import Loading from "../../../components/ui/Loading";
import EmptyState from "../../../components/ui/EmptyState";

import AssetFilters from "../components/AssetFilters";
import AssetTable from "../components/AssetTable";
import AssetDrawer from "../components/AssetDrawer";

import {
    useAssets,
    useDeleteAsset,
} from "../hooks/useAssets";

export default function AssetList() {

    const navigate = useNavigate();

    const [page, setPage] = useState(1);

    const [drawerOpen, setDrawerOpen] = useState(false);

    const [selectedAsset, setSelectedAsset] = useState(null);

    const [filters, setFilters] = useState({

        search: "",
        category: "",
        department: "",
        status: "",
        purchaseDate: "",

    });

    const {
        data,
        isLoading,
        error,
    } = useAssets({

        page,

        ...filters,

    });

    const deleteAsset = useDeleteAsset();

    const assets = useMemo(() => {

        return data?.assets || [];

    }, [data]);

    const totalPages = data?.totalPages || 1;

    const handleFilterChange = (key, value) => {

        setFilters((prev) => ({

            ...prev,

            [key]: value,

        }));

    };

    const resetFilters = () => {

        setFilters({

            search: "",
            category: "",
            department: "",
            status: "",
            purchaseDate: "",

        });

    };

    const handleView = (asset) => {

        setSelectedAsset(asset);

        setDrawerOpen(true);

    };

    const handleDelete = async (asset) => {

        const confirmed = window.confirm(

            `Delete ${asset.assetName}?`

        );

        if (!confirmed) return;

        try {

            await deleteAsset.mutateAsync(asset.id);

            toast.success("Asset deleted successfully");

        }

        catch {

            toast.error("Unable to delete asset");

        }

    };

    if (isLoading) {

        return <Loading />;

    }

    if (error) {

        return (

            <EmptyState

                title="Unable to load assets"

                description="Please refresh the page."

            />

        );

    }

    return (

        <div className="space-y-6">

            <PageHeader

                title="Assets"

                subtitle="Manage enterprise assets"

                action={

                    <AppButton

                        onClick={() =>

                            navigate("/assets/new")

                        }

                    >

                        <Plus size={18} />

                        <span className="ml-2">

                            Register Asset

                        </span>

                    </AppButton>

                }

            />

            <AssetFilters

                filters={filters}

                departments={data?.departments || []}

                categories={data?.categories || []}

                onChange={handleFilterChange}

                onReset={resetFilters}

            />

            <AssetTable

                assets={assets}

                loading={isLoading}

                page={page}

                totalPages={totalPages}

                onPageChange={setPage}

                onView={handleView}

                onEdit={(asset)=>

                    navigate(`/assets/${asset.id}/edit`)

                }

                onDelete={handleDelete}

                onQRCode={(asset)=>

                    navigate(`/assets/${asset.id}/qr`)

                }

                onHistory={(asset)=>

                    navigate(`/assets/${asset.id}`)

                }

            />

            <AssetDrawer

                open={drawerOpen}

                asset={selectedAsset}

                onClose={() =>

                    setDrawerOpen(false)

                }

                onEdit={(asset)=>

                    navigate(`/assets/${asset.id}/edit`)

                }

                onTransfer={(asset)=>

                    navigate(`/allocation?asset=${asset.id}`)

                }

                onQRCode={(asset)=>

                    navigate(`/assets/${asset.id}/qr`)

                }

            />

        </div>

    );

}