import PageHeader from "../../components/ui/PageHeader";
import AllocationForm from "../../components/allocation/AllocationForm";

export default function AllocateAsset() {

    return (

        <div className="space-y-6">

            <PageHeader
                title="Allocate Asset"
                subtitle="Assign assets to employees or departments"
            />

            <AllocationForm/>

        </div>

    );

}