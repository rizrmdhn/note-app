import { IGetUser } from "@/types/users";

export default class GetUser implements IGetUser {
  id: string;
  username: string;
  email: string;
  fullname: string;

  constructor(payload: GetUser) {
    this._validatePayload(payload);
    const { id, username, email, fullname } = payload;
    this.id = id;
    this.username = username;
    this.email = email;
    this.fullname = fullname;
  }

  _validatePayload({ id, username, email, fullname }: GetUser) {
    if (!id || !username || !email || !fullname) {
      throw new Error("GET_USER.NOT_CONTAIN_NEEDED_PROPERTY");
    }

    if (
      typeof id !== "string" ||
      typeof username !== "string" ||
      typeof email !== "string" ||
      typeof fullname !== "string"
    ) {
      throw new Error("GET_USER.NOT_MEET_DATA_TYPE_SPECIFICATION");
    }
  }
}
