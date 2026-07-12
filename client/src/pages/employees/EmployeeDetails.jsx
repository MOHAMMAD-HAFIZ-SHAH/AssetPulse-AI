import AppCard from "../../components/ui/AppCard";

export default function EmployeeDetails() {

    return (

        <AppCard title="Employee Details">

            <div className="grid grid-cols-2 gap-6">

                <div>
                    <h3 className="font-semibold">
                        Employee ID
                    </h3>

                    <p>EMP001</p>
                </div>

                <div>
                    <h3 className="font-semibold">
                        Name
                    </h3>

                    <p>Mohammad Hafiz Shah</p>
                </div>

                <div>
                    <h3 className="font-semibold">
                        Email
                    </h3>

                    <p>hafiz@gmail.com</p>
                </div>

                <div>
                    <h3 className="font-semibold">
                        Department
                    </h3>

                    <p>Computer Science</p>
                </div>

                <div>
                    <h3 className="font-semibold">
                        Role
                    </h3>

                    <p>Asset Manager</p>
                </div>

                <div>
                    <h3 className="font-semibold">
                        Status
                    </h3>

                    <p>Active</p>
                </div>

            </div>

        </AppCard>

    );

}