import { Router } from "express";
import authenticate from "../middlewares/authMiddleware"; // Middleware for authentication
import InquiryController from "../controllers/inquiryController";

const router = Router();

// Route for creating inquiry
router.post("/", authenticate, InquiryController.createInquiry);

export default router;
