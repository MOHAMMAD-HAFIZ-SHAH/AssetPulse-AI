import AppCard from "../../components/ui/AppCard";

export default function AssetDetails() {

    return (

        <AppCard title="Asset Details">

            <div className="grid grid-cols-2 gap-6">

                <div>
                    <h3 className="font-semibold">Asset Tag</h3>
                    <p>AF-0001</p>
                </div>

                <div>
                    <h3 className="font-semibold">Asset Name</h3>
                    <p>Dell Latitude 5520</p>
                </div>

                <div>
                    <h3 className="font-semibold">Category</h3>
                    <p>Laptop</p>
                </div>

                <div>
                    <h3 className="font-semibold">Department</h3>
                    <p>IT Department</p>
                </div>

                <div>
                    <h3 className="font-semibold">Current Holder</h3>
                    <p>Mohammad Hafiz Shah</p>
                </div>

                <div>
                    <h3 className="font-semibold">Status</h3>
                    <p>Allocated</p>
                </div>

                <div>
                    <h3 className="font-semibold">Location</h3>
                    <p>Block A</p>
                </div>

                <div>
                    <h3 className="font-semibold">Condition</h3>
                    <p>Excellent</p>
                </div>

            </div>

        </AppCard>

    );

}