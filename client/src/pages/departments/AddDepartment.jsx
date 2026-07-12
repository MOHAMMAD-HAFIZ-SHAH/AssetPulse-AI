import { useState } from "react";

import AppButton from "../../components/ui/AppButton";
import AppCard from "../../components/ui/AppCard";
import AppInput from "../../components/ui/AppInput";

export default function AddDepartment() {

    const [department, setDepartment] = useState({
        name: "",
        head: "",
        parentDepartment: "",
    });

    const handleChange = (e) => {
        setDepartment({
            ...department,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(department);
    };

    return (
        <AppCard title="Add Department">

            <form
                onSubmit={handleSubmit}
                className="space-y-5"
            >

                <AppInput
                    label="Department Name"
                    name="name"
                    value={department.name}
                    onChange={handleChange}
                />

                <AppInput
                    label="Department Head"
                    name="head"
                    value={department.head}
                    onChange={handleChange}
                />

                <AppInput
                    label="Parent Department"
                    name="parentDepartment"
                    value={department.parentDepartment}
                    onChange={handleChange}
                />

                <AppButton type="submit">
                    Save Department
                </AppButton>

            </form>

        </AppCard>
    );
}