import joi from "joi";

export interface IInputValidator {
  validateUsername(username: string): Promise<boolean>;
  validateEmail(email: string): Promise<boolean>;
  validatePassword(password: string): Promise<boolean>;
}

export type IJoi = typeof joi;
