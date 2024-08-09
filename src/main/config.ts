import dotenv from 'dotenv';
dotenv.config();

export const PORT = process.env.PORT || 5000;   

export const MONGO_URI = process.env.MONGO_URI || "mongodb://mongo:27017/auth-service";

export const JWT_SECRET = process.env.JWT_SECRET || "starportal_notification";

