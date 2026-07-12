import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import rateLimit from "express-rate-limit";

import authRoutes from "./routes/authRoutes.js";
import assetRoutes from "./routes/assetRoutes.js";
import allocationRoutes from "./routes/allocationRoutes.js";
import maintenanceRoutes from "./routes/maintenanceRoutes.js";
import bookingRoutes from "./routes/bookingRoutes.js";
import auditRoutes from "./routes/auditRoutes.js";
import departmentRoutes from "./routes/departmentRoutes.js";
import employeeRoutes from "./routes/employeeRoutes.js";
import dashboardRoutes from "./routes/dashboardRoutes.js";
import notificationRoutes from "./routes/notificationRoutes.js";

import errorHandler from "./middleware/errorHandler.js";

const app = express();
const allowedOrigins = [
    process.env.CLIENT_URL,
    "http://localhost:5173",
    "http://127.0.0.1:5173",
].filter(Boolean);

app.disable("x-powered-by");

app.use(
    helmet({
        crossOriginResourcePolicy: false,
    })
);

app.use(
    cors({
        origin: (origin, callback) => {
            if (!origin || allowedOrigins.includes(origin)) {
                callback(null, true);
                return;
            }

            callback(null, false);
        },
        credentials: true,
    })
);

app.use(morgan("dev"));

app.use(cookieParser());

app.use(express.json({ limit: "20mb" }));

app.use(
    express.urlencoded({
        extended: true,
        limit: "20mb",
    })
);

const limiter = rateLimit({

    windowMs:
        Number(process.env.RATE_LIMIT_WINDOW || 15) *
        60 *
        1000,

    max:
        Number(process.env.RATE_LIMIT_MAX || 100),

    standardHeaders: true,

    legacyHeaders: false,

});

app.use("/api", limiter);

app.use("/uploads", express.static("uploads"));

app.get("/", (req, res) => {

    res.status(200).json({

        success: true,

        application: "AssetPulse AI",

        version: "1.0.0",

        message: "Enterprise Asset Management API",

        status: "Running",

        timestamp: new Date(),

    });

});

app.get("/api/health", (req, res) => {

    res.status(200).json({

        success: true,

        server: "Healthy",

        uptime: process.uptime(),

        timestamp: new Date(),

    });

});

app.use("/api/auth", authRoutes);

app.use("/api/assets", assetRoutes);

app.use("/api/allocations", allocationRoutes);

app.use("/api/maintenance", maintenanceRoutes);

app.use("/api/bookings", bookingRoutes);

app.use("/api/audits", auditRoutes);

app.use("/api/departments", departmentRoutes);

app.use("/api/employees", employeeRoutes);

app.use("/api/dashboard", dashboardRoutes);

app.use("/api/notifications", notificationRoutes);

app.use("*", (req, res) => {

    res.status(404).json({

        success: false,

        message: "Route Not Found",

    });

});

app.use(errorHandler);

export default app;