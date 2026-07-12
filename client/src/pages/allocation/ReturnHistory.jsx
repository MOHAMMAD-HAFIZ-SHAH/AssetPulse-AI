import PageHeader from "../../components/ui/PageHeader";
import ReturnTable from "../../components/allocation/ReturnTable";

export default function ReturnHistory() {

    return (

        <div className="space-y-6">

            <PageHeader
                title="Return History"
                subtitle="View returned asset records"
            />

            <ReturnTable />

        </div>

    );

}