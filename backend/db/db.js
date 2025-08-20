import mongoose from 'mongoose';

export const connectDataBase = async () => {
    try {
        await mongoose.connect("mongodb+srv://himanshu2025:himanshu0101@cluster01.eruv5z1.mongodb.net/barberDB?retryWrites=true&w=majority&appName=cluster01", {
           
        });
        console.log("✅ DB Connected");
    } catch (error) {
        console.error("❌ Database connection failed:", error.message);
    }
};
