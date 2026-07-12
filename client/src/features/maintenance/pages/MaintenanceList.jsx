import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Plus } from "lucide-react";
import toast from "react-hot-toast";

import PageHeader from "../../../components/ui/PageHeader";
import AppButton from "../../../components/ui/AppButton";
import Loading from "../../../components/ui/Loading";
import EmptyState from "../../../components/ui/EmptyState";

import MaintenanceTable from "../components/MaintenanceTable";
import MaintenanceDrawer from "../components/MaintenanceDrawer";

import {
    useMaintenanceRequests,
    useDeleteMaintenance,
} from "../hooks/useMaintenance";

export default function MaintenanceList() {

    const navigate = useNavigate();

    const [page, setPage] = useState(1);

    const [selectedMaintenance, setSelectedMaintenance] = useState(null);

    const [drawerOpen, setDrawerOpen] = useState(false);

    const [filters] = useState({

        search: "",

        status: "",

        priority: "",

    });

    const {

        data,

        isLoading,

        error,

    } = useMaintenanceRequests({

        page,

        ...filters,

    });

    const deleteMaintenance = useDeleteMaintenance();

    const maintenance = useMemo(() => {

        return data?.maintenance || [];

    }, [data]);

    const totalPages = data?.totalPages || 1;

    const handleView = (item) => {

        setSelectedMaintenance(item);

        setDrawerOpen(true);

    };

    const handleDelete = async (item) => {

        if (

            !window.confirm(

                `Delete ${item.requestNumber}?`

            )

        ) return;

        try {

            await deleteMaintenance.mutateAsync(item.id);

            toast.success(

                "Maintenance Deleted"

            );

        }

        catch {

            toast.error(

                "Unable to delete maintenance."

            );

        }

    };

    if (isLoading) {

        return <Loading />;

    }

    if (error) {

        return (

            <EmptyState

                title="Unable to load maintenance"

                description="Please refresh."

            />

        );

    }

    return (

        <div className="space-y-6">

            <PageHeader

                title="Maintenance"

                subtitle="Track all maintenance requests"

                action={

                    <AppButton

                        onClick={()=>

                            navigate("/maintenance/new")

                        }

                    >

                        <Plus size={18}/>

                        <span className="ml-2">

                            Create Request

                        </span>

                    </AppButton>

                }

            />

            <MaintenanceTable

                maintenance={maintenance}

                loading={false}

                page={page}

                totalPages={totalPages}

                onPageChange={setPage}

                onView={handleView}

                onEdit={(item)=>

                    navigate(

                        `/maintenance/${item.id}/edit`

                    )

                }

                onDelete={handleDelete}

            />

            <MaintenanceDrawer

                open={drawerOpen}

                maintenance={selectedMaintenance}

                onClose={()=>

                    setDrawerOpen(false)

                }

                onApprove={()=>

                    toast.success(

                        "Maintenance Approved"

                    )

                }

                onReject={()=>

                    toast.success(

                        "Maintenance Rejected"

                    )

                }

                onStart={()=>

                    toast.success(

                        "Maintenance Started"

                    )

                }

                onComplete={()=>

                    toast.success(

                        "Maintenance Completed"

                    )

                }

                onPrint={()=>

                    window.print()

                }

            />

        </div>

    );

}