import Inquiry from "../models/inquiryModel";
import { IInquiry } from "../types";
import { CustomError } from "../utils/customError";

class InquiryService {
  static async createInquiry(inquiryData: IInquiry): Promise<IInquiry> {
    const newInquiry = new Inquiry(inquiryData);
    return await newInquiry.save();
  }

  static async getInquiries(): Promise<IInquiry[]> {
    return await Inquiry.find();
  }

  static async getInquiryById(inquiryId: string): Promise<IInquiry | null> {
    if (!inquiryId) throw new CustomError("inquiryId is required", 400);
    return await Inquiry.findById(inquiryId);
  }

  static async updateInquiry(
    inquiryId: string,
    updateData: Partial<IInquiry>
  ): Promise<IInquiry | null> {
    if (!inquiryId) throw new CustomError("inquiryId is required", 400);
    return await Inquiry.findByIdAndUpdate(inquiryId, updateData, {
      new: true,
    });
  }

  static async deleteInquiry(inquiryId: string): Promise<IInquiry | null> {
    if (!inquiryId) throw new CustomError("inquiryId is required", 400);
    return await Inquiry.findByIdAndDelete(inquiryId);
  }
}

export default InquiryService;
