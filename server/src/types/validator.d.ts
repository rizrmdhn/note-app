import joi from "joi";

export interface IInputValidator {
  validateUsername(username: string): boolean;
  validateEmail(email: string): boolean;
  validatePassword(password: string): boolean;
}

export type IJoi = typeof joi;
