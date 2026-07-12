import PageHeader from "../../components/ui/PageHeader";
import TransferTable from "../../components/allocation/TransferTable";

export default function TransferHistory() {

    return (

        <div className="space-y-6">

            <PageHeader
                title="Transfer History"
                subtitle="View all asset transfer requests"
            />

            <TransferTable />

        </div>

    );

}