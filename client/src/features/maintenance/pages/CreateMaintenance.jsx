import { useNavigate } from "react-router-dom";
import { useState } from "react";
import toast from "react-hot-toast";

import PageHeader from "../../../components/ui/PageHeader";
import AppCard from "../../../components/ui/AppCard";

import MaintenanceForm from "../components/MaintenanceForm";

import {
    useCreateMaintenance,
} from "../hooks/useMaintenance";

export default function CreateMaintenance() {

    const navigate = useNavigate();

    const createMaintenance = useCreateMaintenance();

    const [assets] = useState([
        {
            id: "1",
            assetTag: "AST-001",
            assetName: "Dell Latitude 7440",
        },
        {
            id: "2",
            assetTag: "AST-002",
            assetName: "Canon Projector",
        },
        {
            id: "3",
            assetTag: "AST-003",
            assetName: "MacBook Pro",
        },
    ]);

    const [technicians] = useState([
        {
            id: "1",
            fullName: "Rahul Sharma",
        },
        {
            id: "2",
            fullName: "Amit Kumar",
        },
        {
            id: "3",
            fullName: "Mohammad Hafiz Shah",
        },
    ]);

    const handleSubmit = async (form) => {

        try {

            const formData = new FormData();

            Object.keys(form).forEach((key) => {

                if (key !== "attachments") {

                    formData.append(
                        key,
                        form[key]
                    );

                }

            });

            if (form.attachments?.length) {

                Array.from(form.attachments).forEach((file) => {

                    formData.append(
                        "attachments",
                        file
                    );

                });

            }

            await createMaintenance.mutateAsync(
                formData
            );

            toast.success(
                "Maintenance Request Created Successfully"
            );

            navigate("/maintenance");

        }

        catch (error) {

            toast.error(

                error?.response?.data?.message ||

                "Unable to create maintenance request."

            );

        }

    };

    return (

        <div className="space-y-6">

            <PageHeader

                title="Create Maintenance Request"

                subtitle="Schedule preventive or corrective maintenance"

            />

            <AppCard>

                <MaintenanceForm

                    assets={assets}

                    technicians={technicians}

                    loading={createMaintenance.isPending}

                    onSubmit={handleSubmit}

                />

            </AppCard>

        </div>

    );

}