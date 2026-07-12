import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AppButton from "../../components/ui/AppButton";
import AppInput from "../../components/ui/AppInput";
import { useAuth } from "../../context/AuthContext";
import api from "../../lib/axios";

export default function Login() {
    const navigate = useNavigate();
    const { login } = useAuth();
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        setLoading(true);

        try {
            const response = await api.post("/auth/login", formData);
            const payload = response?.data || {};
            const token = payload.token || payload.accessToken;
            const user = payload.user || { email: formData.email };

            if (token || payload.success) {
                login(user, token || "demo-token");
                navigate("/dashboard");
                return;
            }

            setError(payload.message || "Login failed. Please try again.");
        } catch (err) {
            const message = err?.response?.data?.message || err?.message || "Login failed. Please try again.";
            setError(message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex min-h-screen bg-slate-100">
            <div className="hidden lg:flex lg:w-1/2 bg-indigo-600 text-white items-center justify-center p-10">
                <div>
                    <h1 className="text-5xl font-bold">
                        AssetPulse AI
                    </h1>

                    <p className="mt-6 text-lg leading-8">
                        AI Powered Enterprise Asset &
                        Resource Management Platform
                    </p>
                </div>
            </div>

            <div className="flex flex-1 items-center justify-center p-10">
                <form
                    onSubmit={handleSubmit}
                    className="w-full max-w-md rounded-2xl bg-white p-8 shadow-lg"
                >
                    <h2 className="text-3xl font-bold">
                        Login
                    </h2>

                    <p className="mt-2 text-slate-500">
                        Welcome back.
                    </p>

                    <div className="mt-8 space-y-5">
                        {error ? (
                            <div className="rounded-lg border border-red-200 bg-red-50 p-3 text-sm text-red-700">
                                {error}
                            </div>
                        ) : null}

                        <AppInput
                            label="Email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Enter email"
                        />

                        <AppInput
                            label="Password"
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            placeholder="Enter password"
                        />

                        <AppButton
                            type="submit"
                            className="w-full"
                            disabled={loading}
                        >
                            {loading ? "Logging in..." : "Login"}
                        </AppButton>

                        <div className="flex justify-between text-sm">
                            <Link
                                to="/forgot-password"
                                className="text-indigo-600"
                            >
                                Forgot Password?
                            </Link>

                            <Link
                                to="/signup"
                                className="text-indigo-600"
                            >
                                Create Account
                            </Link>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}