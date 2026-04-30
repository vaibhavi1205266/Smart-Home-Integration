// import express from 'express';
// import cors from 'cors';
// import cookieParser from 'cookie-parser';
// import helmet from "helmet";



// const app = express();

// app.use(cors({
//     origin: process.env.CORS_ORIGIN,
//     credentials: true
// }))

// app.use(helmet({
//     crossOriginOpenerPolicy: false,
//     crossOriginEmbedderPolicy: false
// }));

// app.use((req, res, next) => {
//     res.setHeader("Cross-Origin-Opener-Policy", "same-origin");
//     res.setHeader("Cross-Origin-Embedder-Policy", "require-corp");
//     next();
//   });  

// // middlewares
// app.use(express.json({limit: "16kb"}))
// app.use(express.urlencoded({extended: true, limit: "16kb"}))
// app.use(express.static("public"))
// app.use(cookieParser())

// // routes import
// import userRouter from './routes/user.routes.js'

// //routes declaration
// app.use("/api/v1/users", userRouter)

// // 404 handler
// app.use((req, res, next) => {
//     res.status(404).json({
//         success: false,
//         message: "Route not found"
//     });
// });

// // error handler
// app.use((err, req, res, next) => {
//     const statusCode = err.statusCode || 500;
//     res.status(statusCode).json({
//         success: false,
//         message: err.message || "Internal Server Error",
//         errors: err.errors || []
//     });
// });

// //http://localhost:8000/api/v1/users/register


// export { app };

import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import helmet from "helmet";

const app = express();

// --- 1. MIDDLEWARES ---
app.use(cors({
    origin: process.env.CORS_ORIGIN, // Make sure this is your Frontend URL in Vercel settings
    credentials: true
}));

app.use(helmet({
    crossOriginOpenerPolicy: false,
    crossOriginEmbedderPolicy: false
}));

app.use((req, res, next) => {
    res.setHeader("Cross-Origin-Opener-Policy", "same-origin");
    res.setHeader("Cross-Origin-Embedder-Policy", "require-corp");
    next();
});

app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));
app.use(cookieParser());

// --- 2. ROUTES IMPORT ---
import userRouter from './routes/user.routes.js';

// --- 3. ROUTES DECLARATION ---

// Healthy Home Route (This stops the "Route not found" error on the main page)
app.get("/", (req, res) => {
    res.status(200).json({
        success: true,
        message: "Smart Home API is running successfully!"
    });
});

app.use("/api/v1/users", userRouter);

// --- 4. ERROR HANDLING ---

// 404 handler (Triggered if no routes above match)
app.use((req, res, next) => {
    res.status(404).json({
        success: false,
        message: "Route not found"
    });
});

// Global Error handler
app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    res.status(statusCode).json({
        success: false,
        message: err.message || "Internal Server Error",
        errors: err.errors || []
    });
});

export { app };
