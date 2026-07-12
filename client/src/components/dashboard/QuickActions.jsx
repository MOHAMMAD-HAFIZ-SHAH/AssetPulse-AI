import AppButton from "../ui/AppButton";

export default function QuickActions() {
    return (
        <div className="rounded-2xl border bg-white p-6">
            <h2 className="mb-5 text-lg font-semibold">
                Quick Actions
            </h2>

            <div className="grid gap-4">
                <AppButton>Add Asset</AppButton>

                <AppButton variant="secondary">
                    Book Resource
                </AppButton>

                <AppButton variant="success">
                    Raise Maintenance
                </AppButton>
            </div>
        </div>
    );
}