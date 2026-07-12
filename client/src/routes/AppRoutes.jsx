import { Routes, Route, Navigate } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";

import Login from "../pages/auth/Login";
import Dashboard from "../pages/dashboard/Dashboard";

export default function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Navigate to="/login" replace />} />

            <Route path="/login" element={<Login />} />

            <Route element={<MainLayout />}>
                <Route
                    path="/dashboard"
                    element={<Dashboard />}
                />
            </Route>
        </Routes>
    );
}