import express, { Application, NextFunction, Request, Response } from "express";
import dotenv from "dotenv";
import connectDB from "./config/db";
import initializeApp from "./config/app";
import userRoutes from "./routes/userRoutes";
import inquiryRoutes from "./routes/inquiryRoutes";
import { errorHandler } from "./middlewares/errorMiddleware";

dotenv.config();

const app: Application = express();

// App setup
initializeApp(app);

// Database connection
connectDB();

// Routes
app.use("/api/v1/users", userRoutes);
app.use("/api/v1/inquiries", inquiryRoutes);

// 404 Handler for undefined routes
app.use((req: Request, res: Response, next: NextFunction) => {
  res.status(404).json({ success: false, message: "Route not found" });
});

// Error Handling Middleware (placed after all routes)
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
