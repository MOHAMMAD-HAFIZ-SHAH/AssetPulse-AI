import dotenv from "dotenv";
dotenv.config();

import http from "http";

import app from "./app.js";
import connectDB from "./config/database.js";

import { Server } from "socket.io";

const PORT = process.env.PORT || 5000;
const allowedOrigins = [
    process.env.CLIENT_URL,
    "http://localhost:5173",
    "http://127.0.0.1:5173",
].filter(Boolean);

const server = http.createServer(app);

export const io = new Server(server, {
    cors: {
        origin: (origin, callback) => {
            if (!origin || allowedOrigins.includes(origin)) {
                callback(null, true);
                return;
            }

            callback(null, false);
        },
        credentials: true,
    },
});

io.on("connection", (socket) => {

    console.log(`Socket Connected: ${socket.id}`);

    socket.on("join-room", (room) => {

        socket.join(room);

    });

    socket.on("leave-room", (room) => {

        socket.leave(room);

    });

    socket.on("disconnect", () => {

        console.log(`Socket Disconnected: ${socket.id}`);

    });

});

const startServer = async () => {

    try {

        await connectDB();

        server.listen(PORT, () => {

            console.log("");

            console.log("======================================");

            console.log("🚀 AssetPulse AI Backend Started");

            console.log("======================================");

            console.log(`🌐 Server : http://localhost:${PORT}`);

            console.log(`📦 Environment : ${process.env.NODE_ENV}`);

            console.log(`📡 Socket.io : Enabled`);

            console.log("======================================");

            console.log("");

        });

    }

    catch (error) {

        console.error("Failed to start server");

        console.error(error.message);

        process.exit(1);

    }

};

startServer();

process.on("SIGINT", () => {

    console.log("Server stopped.");

    process.exit(0);

});

process.on("SIGTERM", () => {

    console.log("Server terminated.");

    process.exit(0);

});