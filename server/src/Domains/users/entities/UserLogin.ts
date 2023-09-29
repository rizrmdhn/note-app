import { IUserLogin } from "@/types/users";

export default class UserLogin implements IUserLogin {
  username: string;
  password: string;

  constructor(payload: IUserLogin) {
    this._validatePayload(payload);
    const { username, password } = payload;
    this.username = username;
    this.password = password;
  }

  _validatePayload({ username, password }: IUserLogin) {
    if (!username || !password) {
      throw new Error("USER_LOGIN.NOT_CONTAIN_NEEDED_PROPERTY");
    }

    if (typeof username !== "string" || typeof password !== "string") {
      throw new Error("USER_LOGIN.NOT_MEET_DATA_TYPE_SPECIFICATION");
    }
  }
}
