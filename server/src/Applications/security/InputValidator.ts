import { IInputValidator } from "@/types/validator";

export default class InputValidator implements IInputValidator {
  async validateUsername(username: string): Promise<boolean> {
    throw new Error("INPUT_VALIDATOR.METHOD_NOT_IMPLEMENTED");
  }

  async validateEmail(email: string): Promise<boolean> {
    throw new Error("INPUT_VALIDATOR.METHOD_NOT_IMPLEMENTED");
  }

  async validatePassword(password: string): Promise<boolean> {
    throw new Error("INPUT_VALIDATOR.METHOD_NOT_IMPLEMENTED");
  }
}
