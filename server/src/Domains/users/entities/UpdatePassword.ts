import { IUpdatePassword } from "@/types/users";

export default class UpdatePassword {
  id: string;
  password: string;
  confirmPassword: string;

  constructor(payload: IUpdatePassword) {
    this._validatePayload(payload);
    const { id, password } = payload;
    this.id = id;
    this.password = password;
    this.confirmPassword = password;
  }

  _validatePayload({ id, password, confirmPassword }: IUpdatePassword) {
    if (!id || !password || !confirmPassword) {
      throw new Error("UPDATE_PASSWORD.NOT_CONTAIN_NEEDED_PROPERTY");
    }

    if (
      typeof id !== "string" ||
      typeof password !== "string" ||
      typeof confirmPassword !== "string"
    ) {
      throw new Error("UPDATE_PASSWORD.NOT_MEET_DATA_TYPE_SPECIFICATION");
    }

    if (password !== confirmPassword) {
      throw new Error("UPDATE_PASSWORD.PASSWORD_NOT_MATCH");
    }
  }
}
