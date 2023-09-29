import { IRegisteredUser } from "@/types/users";

export default class RegisteredUser implements IRegisteredUser {
  id: string;
  username: string;
  email: string;
  fullname: string;

  constructor(payload: IRegisteredUser) {
    this._validatePayload(payload);
    const { id, username, email, fullname } = payload;
    this.id = id;
    this.username = username;
    this.email = email;
    this.fullname = fullname;
  }

  _validatePayload({ id, username, email, fullname }: IRegisteredUser) {
    if (!id || !username || !email || !fullname) {
      throw new Error("REGISTERED_USER.NOT_CONTAIN_NEEDED_PROPERTY");
    }

    if (
      typeof id !== "string" ||
      typeof username !== "string" ||
      typeof email !== "string" ||
      typeof fullname !== "string"
    ) {
      throw new Error("REGISTERED_USER.NOT_MEET_DATA_TYPE_SPECIFICATION");
    }
  }
}
