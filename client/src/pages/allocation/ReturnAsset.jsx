import PageHeader from "../../components/ui/PageHeader";
import ReturnDialog from "../../components/allocation/ReturnDialog";

export default function ReturnAsset() {

    return (

        <div className="space-y-6">

            <PageHeader
                title="Return Asset"
                subtitle="Return allocated assets back to inventory"
            />

            <ReturnDialog />

        </div>

    );

}