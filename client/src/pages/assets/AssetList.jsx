import { useState } from "react";
import { Plus } from "lucide-react";

import PageHeader from "../../components/ui/PageHeader";
import SearchInput from "../../components/ui/SearchInput";
import AppButton from "../../components/ui/AppButton";
import AssetTable from "../../components/assets/AssetTable";

export default function AssetList() {

    const [search, setSearch] = useState("");

    return (

        <div className="space-y-6">

            <PageHeader
                title="Assets"
                subtitle="Manage enterprise assets"
                action={
                    <AppButton>
                        <Plus size={18}/>
                        <span className="ml-2">
                            Register Asset
                        </span>
                    </AppButton>
                }
            />

            <SearchInput
                value={search}
                onChange={(e)=>setSearch(e.target.value)}
                placeholder="Search Asset..."
            />

            <AssetTable/>

        </div>

    );

}