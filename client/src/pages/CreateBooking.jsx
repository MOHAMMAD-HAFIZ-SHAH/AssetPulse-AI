import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

import PageHeader from "../../../components/ui/PageHeader";
import AppCard from "../../../components/ui/AppCard";

import BookingForm from "../components/BookingForm";

import { useCreateBooking } from "../hooks/useBookings";

export default function CreateBooking() {

    const navigate = useNavigate();

    const createBooking = useCreateBooking();

    const assets = [
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
    ];

    const employees = [
        {
            id: "1",
            employeeId: "EMP001",
            fullName: "Mohammad Hafiz Shah",
        },
        {
            id: "2",
            employeeId: "EMP002",
            fullName: "Ali Ahmad",
        },
        {
            id: "3",
            employeeId: "EMP003",
            fullName: "Sarah Khan",
        },
    ];

    const handleSubmit = async (data) => {

        try {

            await createBooking.mutateAsync(data);

            toast.success(
                "Booking Created Successfully"
            );

            navigate("/bookings");

        }

        catch (error) {

            toast.error(

                error?.response?.data?.message ||

                "Unable to create booking."

            );

        }

    };

    return (

        <div className="space-y-6">

            <PageHeader

                title="Create Booking"

                subtitle="Reserve an enterprise asset"

            />

            <AppCard>

                <BookingForm

                    assets={assets}

                    employees={employees}

                    loading={createBooking.isPending}

                    onSubmit={handleSubmit}

                />

            </AppCard>

        </div>

    );

}