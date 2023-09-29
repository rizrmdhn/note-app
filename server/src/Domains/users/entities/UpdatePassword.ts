import { IUpdatePassword } from "@/types/users";

export default class UpdatePassword implements IUpdatePassword {
  id: string;
  password: string;

  constructor(payload: UpdatePassword) {
    this._validatePayload(payload);
    const { id, password } = payload;
    this.id = id;
    this.password = password;
  }

  _validatePayload({ id, password }: UpdatePassword) {
    if (!id || !password) {
      throw new Error("UPDATE_PASSWORD.NOT_CONTAIN_NEEDED_PROPERTY");
    }

    if (typeof id !== "string" || typeof password !== "string") {
      throw new Error("UPDATE_PASSWORD.NOT_MEET_DATA_TYPE_SPECIFICATION");
    }
  }
}
