import PageHeader from "../../components/ui/PageHeader";
import TransferDialog from "../../components/allocation/TransferDialog";

export default function TransferAsset() {

    return (

        <div className="space-y-6">

            <PageHeader
                title="Transfer Asset"
                subtitle="Transfer an allocated asset to another employee"
            />

            <TransferDialog />

        </div>

    );

}