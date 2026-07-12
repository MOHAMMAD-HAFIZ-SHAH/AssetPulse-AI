import { useState } from "react";
import { Link } from "react-router-dom";
import AppButton from "../../components/ui/AppButton";
import AppInput from "../../components/ui/AppInput";

export default function ForgotPassword() {
    const [email, setEmail] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(email);
    };

    return (
        <div className="flex min-h-screen items-center justify-center bg-slate-100 px-6">
            <form
                onSubmit={handleSubmit}
                className="w-full max-w-md rounded-2xl bg-white p-8 shadow-lg"
            >
                <h2 className="text-3xl font-bold">
                    Forgot Password
                </h2>

                <p className="mt-2 text-slate-500">
                    Enter your registered email to receive a reset link.
                </p>

                <div className="mt-8 space-y-5">
                    <AppInput
                        label="Email Address"
                        type="email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="example@gmail.com"
                    />

                    <AppButton
                        type="submit"
                        className="w-full"
                    >
                        Send Reset Link
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