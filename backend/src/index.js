// // require('dotenv').config({path: './env'})
// import dotenv from "dotenv"
// import connectDB from "./db/index.js";
// import { app } from './app.js';
// dotenv.config({
//     path: './.env'
// })



// connectDB()
// .then(() => {
//     app.listen(process.env.PORT || 8000, () => {
//         console.log(`⚙️ Server is running at port : ${process.env.PORT}`);
//     })
// })
// .catch((err) => {
//     console.log("MONGO db connection failed !!! ", err);
// })

import dotenv from "dotenv";
import connectDB from "./db/index.js";
import { app } from './app.js';

// Load environment variables from .env file
dotenv.config({
    path: './.env'
});

/**
 * For Vercel Serverless Functions:
 * We connect to the database and then start the server. 
 * Vercel handles the underlying server infrastructure, 
 * but we still call app.listen for local compatibility.
 */
connectDB()
    .then(() => {
        app.on("error", (error) => {
            console.log("ERR: ", error);
        });

        // Use process.env.PORT provided by Vercel or default to 8000
        const port = process.env.PORT || 8000;
        app.listen(port, () => {
            console.log(`⚙️ Server is running at port : ${port}`);
        });
    })
    .catch((err) => {
        console.log("MONGO db connection failed !!! ", err);
        // Important: In a serverless environment, 
        // we want to know if the initial connection failed.
    });

/**
 * CRITICAL FOR VERCEL:
 * You must export the app instance as the default export.
 * This allows Vercel's Node.js builder to find your Express app
 * and turn it into a Serverless Function.
 */
export default app;
