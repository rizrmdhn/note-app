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

    if (username && username.length > 50) {
      throw new Error("USER_LOGIN.USERNAME_LIMIT_CHAR");
    }

    if (email && email.length > 50) {
      throw new Error("USER_LOGIN.EMAIL_LIMIT_CHAR");
    }

    const usernameRegex = new RegExp(/^[a-zA-Z0-9]+$/);
    if (username && !usernameRegex.test(username)) {
      throw new Error("USER_LOGIN.USERNAME_CONTAIN_RESTRICTED_CHARACTER");
    }

    if (password.length < 8) {
      throw new Error("USER_LOGIN.PASSWORD_LIMIT_CHAR");
    }
  }
}
