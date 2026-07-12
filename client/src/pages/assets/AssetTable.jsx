import {
    Eye,
    Pencil,
    Trash2,
} from "lucide-react";

const assets = [

    {
        tag:"AF-0001",
        name:"Dell Latitude 5520",
        category:"Laptop",
        department:"IT",
        holder:"Rahul",
        status:"Allocated"
    },

    {
        tag:"AF-0002",
        name:"Canon Printer",
        category:"Printer",
        department:"Admin",
        holder:"Available",
        status:"Available"
    },

    {
        tag:"AF-0003",
        name:"Conference Projector",
        category:"Projector",
        department:"HR",
        holder:"Sarah",
        status:"Maintenance"
    }

];

export default function AssetTable(){

    return(

        <div className="overflow-hidden rounded-2xl border bg-white">

            <table className="w-full">

                <thead className="bg-slate-100">

                    <tr>

                        <th className="px-5 py-4 text-left">
                            Asset Tag
                        </th>

                        <th className="px-5 py-4 text-left">
                            Asset
                        </th>

                        <th className="px-5 py-4 text-left">
                            Category
                        </th>

                        <th className="px-5 py-4 text-left">
                            Department
                        </th>

                        <th className="px-5 py-4 text-left">
                            Holder
                        </th>

                        <th className="px-5 py-4 text-left">
                            Status
                        </th>

                        <th className="px-5 py-4 text-center">
                            Actions
                        </th>

                    </tr>

                </thead>

                <tbody>

                    {assets.map((asset,index)=>(

                        <tr
                            key={index}
                            className="border-t hover:bg-slate-50"
                        >

                            <td className="px-5 py-4 font-medium">
                                {asset.tag}
                            </td>

                            <td className="px-5 py-4">
                                {asset.name}
                            </td>

                            <td className="px-5 py-4">
                                {asset.category}
                            </td>

                            <td className="px-5 py-4">
                                {asset.department}
                            </td>

                            <td className="px-5 py-4">
                                {asset.holder}
                            </td>

                            <td className="px-5 py-4">

                                <span
                                    className={`rounded-full px-3 py-1 text-xs font-medium

                                    ${
                                        asset.status==="Available"
                                        ?"bg-green-100 text-green-700"

                                        :asset.status==="Allocated"
                                        ?"bg-blue-100 text-blue-700"

                                        :"bg-orange-100 text-orange-700"

                                    }`}
                                >

                                    {asset.status}

                                </span>

                            </td>

                            <td className="px-5 py-4">

                                <div className="flex justify-center gap-4">

                                    <Eye
                                        size={18}
                                        className="cursor-pointer text-indigo-600"
                                    />

                                    <Pencil
                                        size={18}
                                        className="cursor-pointer text-amber-600"
                                    />

                                    <Trash2
                                        size={18}
                                        className="cursor-pointer text-red-600"
                                    />

                                </div>

                            </td>

                        </tr>

                    ))}

                </tbody>

            </table>

        </div>

    );

}