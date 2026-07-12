import { useState } from "react";
import { Link } from "react-router-dom";
import AppButton from "../../components/ui/AppButton";
import AppInput from "../../components/ui/AppInput";

export default function Signup() {
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        department: "",
        password: "",
        confirmPassword: "",
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    };

    return (
        <div className="flex min-h-screen bg-slate-100">
            <div className="hidden lg:flex lg:w-1/2 bg-indigo-600 text-white items-center justify-center p-10">
                <div>
                    <h1 className="text-5xl font-bold">
                        AssetPulse AI
                    </h1>

                    <p className="mt-6 text-lg">
                        Create your employee account to access the Enterprise Asset &
                        Resource Management Platform.
                    </p>
                </div>
            </div>

            <div className="flex flex-1 items-center justify-center p-10">
                <form
                    onSubmit={handleSubmit}
                    className="w-full max-w-lg rounded-2xl bg-white p-8 shadow-lg"
                >
                    <h2 className="text-3xl font-bold">
                        Create Account
                    </h2>

                    <p className="mt-2 text-slate-500">
                        Sign up as an employee.
                    </p>

                    <div className="mt-8 space-y-5">

                        <AppInput
                            label="Full Name"
                            name="fullName"
                            value={formData.fullName}
                            onChange={handleChange}
                            placeholder="John Doe"
                        />

                        <AppInput
                            label="Email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="john@example.com"
                        />

                        <AppInput
                            label="Department"
                            name="department"
                            value={formData.department}
                            onChange={handleChange}
                            placeholder="Computer Science"
                        />

                        <AppInput
                            label="Password"
                            name="password"
                            type="password"
                            value={formData.password}
                            onChange={handleChange}
                            placeholder="********"
                        />

                        <AppInput
                            label="Confirm Password"
                            name="confirmPassword"
                            type="password"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            placeholder="********"
                        />

                        <AppButton
                            type="submit"
                            className="w-full"
                        >
                            Create Account
                        </AppButton>

                        <div className="text-center text-sm">
                            Already have an account?{" "}
                            <Link
                                to="/login"
                                className="text-indigo-600 font-medium"
                            >
                                Login
                            </Link>
                        </div>

                    </div>
                </form>
            </div>
        </div>
    );
}