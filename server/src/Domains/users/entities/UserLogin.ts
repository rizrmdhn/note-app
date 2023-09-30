import { IUserLogin } from "@/types/users";

export default class UserLogin implements IUserLogin {
  username?: string | undefined;
  email?: string | undefined;
  password: string;

  constructor(payload: IUserLogin) {
    this._validatePayload(payload);
    const { username, password, email } = payload;
    this.username = username;
    this.email = email;
    this.password = password;
  }

  _validatePayload({ username, email, password }: IUserLogin) {
    if (!username && !email) {
      throw new Error("USER_LOGIN.NOT_CONTAIN_USERNAME_OR_EMAIL");
    }

    if (!password) {
      throw new Error("USER_LOGIN.NOT_CONTAIN_PASSWORD");
    }

    if (typeof username !== "string" && typeof email !== "string") {
      throw new Error(
        "USER_LOGIN.EMAIL_OR_USERNAME_NOT_MEET_DATA_TYPE_SPECIFICATION"
      );
    }

    if (typeof password !== "string") {
      throw new Error("USER_LOGIN.PASSWORD_NOT_MEET_DATA_TYPE_SPECIFICATION");
    }
  }
}
