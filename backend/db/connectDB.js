import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        const mongo_uri = process.env.MONGO_URI;
        const conn = await mongoose.connect(process.env.MONGO_URI)
        if (!mongo_uri) {
            throw new Error("MONGO_URI is not defined in the environment variables");
        }
        await mongoose.connect(mongo_uri);
        console.log("MongoDB connected successfully");

    } catch (error) {
        console.error("MongoDB connection failed:", error.message);
        process.exit(1);
    }
};      