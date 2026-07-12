import { useNavigate } from "react-router-dom";
import { useState } from "react";
import toast from "react-hot-toast";

import PageHeader from "../../../components/ui/PageHeader";
import AppCard from "../../../components/ui/AppCard";

import AllocationForm from "../components/AllocationForm";

import {
    useCreateAllocation,
} from "../hooks/useAllocation";

export default function AllocateAsset() {

    const navigate = useNavigate();

    const createAllocation = useCreateAllocation();

    const [assets] = useState([
        {
            id: "1",
            assetTag: "AST-001",
            assetName: "Dell Latitude 7440",
        },
        {
            id: "2",
            assetTag: "AST-002",
            assetName: "MacBook Pro M3",
        },
        {
            id: "3",
            assetTag: "AST-003",
            assetName: "Canon Projector",
        },
    ]);

    const [employees] = useState([
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
    ]);

    const [departments] = useState([
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
    ]);

    const handleSubmit = async (form) => {

        try {

            await createAllocation.mutateAsync(form);

            toast.success(
                "Asset Allocated Successfully"
            );

            navigate("/allocations");

        }

        catch (error) {

            toast.error(

                error?.response?.data?.message ||

                "Unable to allocate asset."

            );

        }

    };

    return (

        <div className="space-y-6">

            <PageHeader

                title="Allocate Asset"

                subtitle="Assign an asset to an employee or department"

            />

            <AppCard>

                <AllocationForm

                    assets={assets}

                    employees={employees}

                    departments={departments}

                    loading={createAllocation.isPending}

                    onSubmit={handleSubmit}

                />

            </AppCard>

        </div>

    );

}