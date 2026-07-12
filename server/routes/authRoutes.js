import express from "express";

const router = express.Router();

router.post("/register", (req, res) => {
    res.status(200).json({ success: true, message: "Auth register stub ready" });
});

router.post("/login", (req, res) => {
    const { email, password } = req.body || {};

    if (!email || !password) {
        return res.status(400).json({ success: false, message: "Email and password are required." });
    }

    return res.status(200).json({
        success: true,
        message: "Login successful",
        token: "demo-token",
        user: {
            id: "demo-user",
            email,
            fullName: email.split("@")[0],
            role: "admin",
        },
    });
});

router.post("/logout", (req, res) => {
    res.status(200).json({ success: true, message: "Auth logout stub ready" });
});

router.post("/refresh-token", (req, res) => {
    res.status(200).json({ success: true, message: "Refresh token stub ready" });
});

router.post("/forgot-password", (req, res) => {
    res.status(200).json({ success: true, message: "Forgot password stub ready" });
});

router.post("/reset-password/:token", (req, res) => {
    res.status(200).json({ success: true, message: "Reset password stub ready" });
});

router.put("/change-password", (req, res) => {
    res.status(200).json({ success: true, message: "Change password stub ready" });
});

router.get("/profile", (req, res) => {
    res.status(200).json({ success: true, message: "Profile stub ready" });
});

router.put("/profile", (req, res) => {
    res.status(200).json({ success: true, message: "Profile update stub ready" });
});

export default router;