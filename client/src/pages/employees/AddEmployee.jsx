import { useState } from "react";

import AppCard from "../../components/ui/AppCard";
import AppInput from "../../components/ui/AppInput";
import AppButton from "../../components/ui/AppButton";

export default function AddEmployee() {

    const [employee,setEmployee]=useState({
        firstName:"",
        lastName:"",
        email:"",
        phone:"",
        department:"",
        designation:"",
    });

    const handleChange=(e)=>{
        setEmployee({
            ...employee,
            [e.target.name]:e.target.value,
        });
    };

    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(employee);
    };

    return (

        <AppCard title="Add Employee">

            <form
                onSubmit={handleSubmit}
                className="space-y-5"
            >

                <div className="grid grid-cols-2 gap-5">

                    <AppInput
                        label="First Name"
                        name="firstName"
                        value={employee.firstName}
                        onChange={handleChange}
                    />

                    <AppInput
                        label="Last Name"
                        name="lastName"
                        value={employee.lastName}
                        onChange={handleChange}
                    />

                </div>

                <AppInput
                    label="Email"
                    name="email"
                    type="email"
                    value={employee.email}
                    onChange={handleChange}
                />

                <AppInput
                    label="Phone Number"
                    name="phone"
                    value={employee.phone}
                    onChange={handleChange}
                />

                <AppInput
                    label="Department"
                    name="department"
                    value={employee.department}
                    onChange={handleChange}
                />

                <AppInput
                    label="Designation"
                    name="designation"
                    value={employee.designation}
                    onChange={handleChange}
                />

                <AppButton type="submit">
                    Save Employee
                </AppButton>

            </form>

        </AppCard>

    );
}