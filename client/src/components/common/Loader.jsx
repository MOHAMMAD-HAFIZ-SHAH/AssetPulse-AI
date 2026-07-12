import { LoaderCircle } from "lucide-react";

export default function Loader() {
    return (
        <div className="flex h-screen items-center justify-center">
            <LoaderCircle
                size={45}
                className="animate-spin text-indigo-600"
            />
        </div>
    );
}