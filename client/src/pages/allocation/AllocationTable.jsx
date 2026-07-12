import AllocationStatusBadge from "./AllocationStatusBadge";

const allocations=[

{

asset:"AF-0001",

employee:"Mohammad Hafiz Shah",

department:"Computer Science",

returnDate:"20 Jul 2026",

status:"Active",

},

{

asset:"AF-0002",

employee:"Ali Ahmad",

department:"Finance",

returnDate:"15 Jul 2026",

status:"Overdue",

},

];

export default function AllocationTable(){

return(

<div className="overflow-hidden rounded-2xl border bg-white">

<table className="w-full">

<thead className="bg-slate-100">

<tr>

<th className="px-5 py-4 text-left">Asset</th>

<th className="px-5 py-4 text-left">Employee</th>

<th className="px-5 py-4 text-left">Department</th>

<th className="px-5 py-4 text-left">Return Date</th>

<th className="px-5 py-4 text-left">Status</th>

</tr>

</thead>

<tbody>

{

allocations.map((allocation,index)=>(

<tr
key={index}
className="border-t"
>

<td className="px-5 py-4">

{allocation.asset}

</td>

<td className="px-5 py-4">

{allocation.employee}

</td>

<td className="px-5 py-4">

{allocation.department}

</td>

<td className="px-5 py-4">

{allocation.returnDate}

</td>

<td className="px-5 py-4">

<AllocationStatusBadge
status={allocation.status}
/>

</td>

</tr>

))

}

</tbody>

</table>

</div>

);

}