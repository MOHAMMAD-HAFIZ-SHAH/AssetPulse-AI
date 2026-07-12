import mongoose from "mongoose";

const connectDB = async () => {
    try {
        const connection = await mongoose.connect(process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/assetpulse-ai");

        console.log("=================================");
        console.log("✅ MongoDB Connected");
        console.log(`Database : ${connection.connection.name}`);
        console.log(`Host     : ${connection.connection.host}`);
        console.log("=================================");
    } catch (error) {
        console.warn("⚠️ MongoDB connection failed, continuing without database for local startup.");
        console.warn(error.message);
    }
};

export default connectDB;