// src/utils/customError.ts
export class CustomError extends Error {
  statusCode: number;

  constructor(message: string, statusCode: number) {
    super(message);
    this.statusCode = statusCode;

    // Ensure the instance of the Error is correctly created
    Object.setPrototypeOf(this, CustomError.prototype);
  }
}
