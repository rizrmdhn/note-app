import InputValidator from "@/Applications/security/InputValidator";
import InvariantError from "@/Commons/Exceptions/InvariantError";
import { IJoi } from "@/types/validator";

export default class JoiInputValidator extends InputValidator {
  joi: IJoi;
  constructor(joi: IJoi) {
    super();

    this.joi = joi;
  }

  validateUsername(username: string): boolean {
    const usernameSchema = this.joi
      .string()
      .min(3)
      .max(50)
      .required()
      .regex(/^[a-zA-Z0-9]+$/);
    const { error } = usernameSchema.validate(username);
    if (error) {
      throw new InvariantError(error.message);
    }
    return true;
  }

  validateEmail(email: string): boolean {
    const emailSchema = this.joi.string().email().required();
    const { error } = emailSchema.validate(email);
    if (error) {
      throw new InvariantError(error.message);
    }
    return true;
  }

  validatePassword(password: string): boolean {
    const passwordSchema = this.joi.string().min(8).required();
    const { error } = passwordSchema.validate(password);
    if (error) {
      throw new InvariantError(error.message);
    }
    return true;
  }
}
