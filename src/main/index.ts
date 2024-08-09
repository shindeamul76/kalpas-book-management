import "module-alias/register";
import { app } from "./app"
import { connectDB } from "@kalpas/main/db/connect"
import { MONGO_URI, PORT } from "@kalpas/main/config"
import dotenv from 'dotenv';
dotenv.config();


const start = async () => {
    try {
        await connectDB(MONGO_URI);
        app.listen(PORT, () => console.log(`server is running in port ${PORT}... `));
    } catch (error: any) {
        throw new Error(error.message)
    }
}


start();