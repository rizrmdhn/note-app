import { INewAuth } from "@/types/auth";

export default class NewAuth {
  accessToken: string;

  constructor(payload: INewAuth) {
    this._validatePayload(payload);

    const { accessToken } = payload;

    this.accessToken = accessToken;
  }

  _validatePayload({ accessToken }: INewAuth) {
    if (!accessToken) {
      throw new Error("NEW_AUTH.NOT_CONTAIN_NEEDED_PROPERTY");
    }

    if (typeof accessToken !== "string") {
      throw new Error("NEW_AUTH.NOT_MEET_DATA_TYPE_SPECIFICATION");
    }
  }
}
