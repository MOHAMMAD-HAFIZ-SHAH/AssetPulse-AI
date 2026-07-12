import { TriangleAlert } from "lucide-react";

export default function ErrorState({
    message = "Something went wrong."
}) {
    return (
        <div className="flex flex-col items-center justify-center rounded-2xl border bg-white py-16">
            <TriangleAlert
                size={48}
                className="text-red-500"
            />

            <p className="mt-4 font-medium">
                {message}
            </p>
        </div>
    );
}