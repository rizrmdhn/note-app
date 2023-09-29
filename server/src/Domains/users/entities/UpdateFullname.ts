import { IUpdateFullname } from "@/types/users";

export default class UpdateFullname implements IUpdateFullname {
  id: string;
  fullname: string;

  constructor(payload: UpdateFullname) {
    this._validatePayload(payload);
    const { id, fullname } = payload;
    this.id = id;
    this.fullname = fullname;
  }

  _validatePayload({ id, fullname }: UpdateFullname) {
    if (!id || !fullname) {
      throw new Error("UPDATE_FULLNAME.NOT_CONTAIN_NEEDED_PROPERTY");
    }

    if (typeof id !== "string" || typeof fullname !== "string") {
      throw new Error("UPDATE_FULLNAME.NOT_MEET_DATA_TYPE_SPECIFICATION");
    }
  }
}
