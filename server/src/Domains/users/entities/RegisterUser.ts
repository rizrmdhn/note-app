import { IRegisterUser } from "@/types/users";

export default class RegisterUser implements IRegisterUser {
  username: string;
  password: string;
  email: string;
  fullname: string;

  constructor(payload: RegisterUser) {
    this._validatePayload(payload);
    const { username, password, email, fullname } = payload;
    this.username = username;
    this.password = password;
    this.email = email;
    this.fullname = fullname;
  }

  _validatePayload({ username, password, email, fullname }: RegisterUser) {
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
  }
}
