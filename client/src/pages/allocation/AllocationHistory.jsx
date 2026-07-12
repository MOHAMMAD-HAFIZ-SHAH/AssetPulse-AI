import PageHeader from "../../components/ui/PageHeader";
import AllocationTable from "../../components/allocation/AllocationTable";

export default function AllocationHistory(){

return(

<div className="space-y-6">

<PageHeader

title="Allocation History"

subtitle="Track every asset allocation"

 />

<AllocationTable/>

</div>

);

}