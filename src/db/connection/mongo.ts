import { MongoClient } from "mongodb";
import { MONGO_URL } from "../../utils/envs/Daatbase.env";

// db.js

import mongoose from 'mongoose';

// Establece la conexión a MongoDB
async function connectDB() {
        try {
                await mongoose.connect(MONGO_URL)
                const db = mongoose.connection
                console.log('Conexión a MongoDB exitosa')
                return db
        } catch (error) {
                console.error("❌ System Error:", error)
                return null
        }
}
await connectDB()

export { connectDB }