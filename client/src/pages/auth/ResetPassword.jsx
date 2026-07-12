import { useState } from "react";
import { Link } from "react-router-dom";
import AppButton from "../../components/ui/AppButton";
import AppInput from "../../components/ui/AppInput";

export default function ResetPassword() {
    const [formData, setFormData] = useState({
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
        <div className="flex min-h-screen items-center justify-center bg-slate-100 px-6">
            <form
                onSubmit={handleSubmit}
                className="w-full max-w-md rounded-2xl bg-white p-8 shadow-lg"
            >
                <h2 className="text-3xl font-bold">
                    Reset Password
                </h2>

                <p className="mt-2 text-slate-500">
                    Enter your new password.
                </p>

                <div className="mt-8 space-y-5">
                    <AppInput
                        label="New Password"
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                    />

                    <AppInput
                        label="Confirm Password"
                        type="password"
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                    />

                    <AppButton
                        type="submit"
                        className="w-full"
                    >
                        Reset Password
                    </AppButton>

                    <div className="text-center">
                        <Link
                            to="/login"
                            className="text-indigo-600 font-medium"
                        >
                            Back to Login
                        </Link>
                    </div>
                </div>
            </form>
        </div>
    );
}