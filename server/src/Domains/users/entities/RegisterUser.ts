import { IRegisterUser } from "@/types/users";

export default class RegisterUser implements IRegisterUser {
  username: string;
  password: string;
  email: string;
  fullname: string;

  constructor(payload: IRegisterUser) {
    this._validatePayload(payload);
    const { username, password, email, fullname } = payload;
    this.username = username;
    this.password = password;
    this.email = email;
    this.fullname = fullname;
  }

  _validatePayload({ username, password, email, fullname }: IRegisterUser) {
    if (!username || !password || !email || !fullname) {
      throw new Error("REGISTER_USER.NOT_CONTAIN_NEEDED_PROPERTY");
    }

    if (
      typeof username !== "string" ||
      typeof password !== "string" ||
      typeof email !== "string" ||
      typeof fullname !== "string"
    ) {
      throw new Error("REGISTER_USER.NOT_MEET_DATA_TYPE_SPECIFICATION");
    }

    if ((username && username.length > 50) || (email && email.length > 50)) {
      throw new Error("REGISTER_USER.USERNAME_EMAIL_LIMIT_CHAR");
    }

    const usernameRegex = new RegExp(/^[a-zA-Z0-9]+$/);
    if (username && !usernameRegex.test(username)) {
      throw new Error("REGISTER_USER.USERNAME_CONTAIN_RESTRICTED_CHARACTER");
    }

    if (password.length < 8) {
      throw new Error("REGISTER_USER.PASSWORD_LIMIT_CHAR");
    }
  }
}
