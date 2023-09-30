import { IInputValidator } from "@/types/validator";

export default class InputValidator implements IInputValidator {
  validateUsername(username: string): boolean {
    throw new Error("INPUT_VALIDATOR.METHOD_NOT_IMPLEMENTED");
  }

  validateEmail(email: string): boolean {
    throw new Error("INPUT_VALIDATOR.METHOD_NOT_IMPLEMENTED");
  }

  validatePassword(password: string): boolean {
    throw new Error("INPUT_VALIDATOR.METHOD_NOT_IMPLEMENTED");
  }
}
