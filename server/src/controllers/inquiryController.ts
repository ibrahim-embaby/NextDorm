import { NextFunction, Request, Response } from "express";
import InquiryService from "../services/inquiryService";

class InquiryController {
  static async createInquiry(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response | void> {
    try {
      const inquiryData = req.body;
      const newInquiry = await InquiryService.createInquiry(inquiryData);
      res.status(201).json(newInquiry);
    } catch (error) {
      next(error);
    }
  }

  static async getInquiries(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response | void> {
    try {
      const inquiries = await InquiryService.getInquiries();
      res.status(200).json(inquiries);
    } catch (error) {
      next(error);
    }
  }

  static async getInquiryById(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response | void> {
    try {
      const inquiryId = req.params.id;
      const inquiry = await InquiryService.getInquiryById(inquiryId);
      if (!inquiry) {
        return res.status(404).json({ message: "Inquiry not found" });
      }
      res.status(200).json(inquiry);
    } catch (error) {
      next(error);
    }
  }

  static async updateInquiry(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response | void> {
    try {
      const inquiryId = req.params.id;
      const updateData = req.body;
      const updatedInquiry = await InquiryService.updateInquiry(
        inquiryId,
        updateData
      );
      if (!updatedInquiry) {
        return res.status(404).json({ message: "Inquiry not found" });
      }
      res.status(200).json(updatedInquiry);
    } catch (error) {
      next(error);
    }
  }

  static async deleteInquiry(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response | void> {
    try {
      const inquiryId = req.params.id;
      const deletedInquiry = await InquiryService.deleteInquiry(inquiryId);
      if (!deletedInquiry) {
        return res.status(404).json({ message: "Inquiry not found" });
      }
      res.status(200).json({ message: "Inquiry deleted successfully" });
    } catch (error) {
      next(error);
    }
  }
}

export default InquiryController;
