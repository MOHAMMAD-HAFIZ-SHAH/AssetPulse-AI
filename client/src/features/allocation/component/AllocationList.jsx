import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Plus } from "lucide-react";
import toast from "react-hot-toast";

import PageHeader from "../../../components/ui/PageHeader";
import AppButton from "../../../components/ui/AppButton";
import Loading from "../../../components/ui/Loading";
import EmptyState from "../../../components/ui/EmptyState";

import AllocationTable from "../components/AllocationTable";
import AllocationDrawer from "../components/AllocationDrawer";

import {
    useAllocations,
    useDeleteAllocation,
} from "../hooks/useAllocation";

export default function AllocationList() {

    const navigate = useNavigate();

    const [page, setPage] = useState(1);

    const [drawerOpen, setDrawerOpen] = useState(false);

    const [selectedAllocation, setSelectedAllocation] = useState(null);

    const [filters] = useState({

        search: "",

        status: "",

        allocationType: "",

    });

    const {

        data,

        isLoading,

        error,

    } = useAllocations({

        page,

        ...filters,

    });

    const deleteAllocation = useDeleteAllocation();

    const allocations = useMemo(() => {

        return data?.allocations || [];

    }, [data]);

    const totalPages = data?.totalPages || 1;

    const handleView = (allocation) => {

        setSelectedAllocation(allocation);

        setDrawerOpen(true);

    };

    const handleDelete = async (allocation) => {

        const confirmDelete = window.confirm(

            `Delete Allocation ${allocation.allocationNumber}?`

        );

        if (!confirmDelete) return;

        try {

            await deleteAllocation.mutateAsync(

                allocation.id

            );

            toast.success(

                "Allocation deleted successfully."

            );

        }

        catch {

            toast.error(

                "Unable to delete allocation."

            );

        }

    };

    if (isLoading) {

        return <Loading />;

    }

    if (error) {

        return (

            <EmptyState

                title="Unable to load allocations"

                description="Please refresh the page."

            />

        );

    }

    return (

        <div className="space-y-6">

            <PageHeader

                title="Asset Allocations"

                subtitle="Manage asset allocation across employees and departments"

                action={

                    <AppButton

                        onClick={() =>

                            navigate("/allocations/new")

                        }

                    >

                        <Plus

                            size={18}

                        />

                        <span className="ml-2">

                            Allocate Asset

                        </span>

                    </AppButton>

                }

            />

            <AllocationTable

                allocations={allocations}

                loading={false}

                page={page}

                totalPages={totalPages}

                onPageChange={setPage}

                onView={handleView}

                onEdit={(allocation) =>

                    navigate(

                        `/allocations/${allocation.id}/edit`

                    )

                }

                onDelete={handleDelete}

            />

            <AllocationDrawer

                open={drawerOpen}

                allocation={selectedAllocation}

                onClose={() =>

                    setDrawerOpen(false)

                }

                onTransfer={(allocation) =>

                    navigate(

                        `/allocations/transfer?allocation=${allocation.id}`

                    )

                }

                onReturn={(allocation) =>

                    navigate(

                        `/allocations/return?allocation=${allocation.id}`

                    )

                }

                onPrint={() =>

                    window.print()

                }

                onDownload={() =>

                    toast.success(

                        "Downloading Allocation Report..."

                    )

                }

            />

        </div>

    );

}