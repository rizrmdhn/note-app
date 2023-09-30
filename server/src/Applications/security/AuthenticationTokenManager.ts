import { IAuthenticationTokenManager } from "@/types/auth";

export default class AuthenticationTokenManager
  implements IAuthenticationTokenManager
{
  async createAccessToken(payload: object): Promise<string> {
    throw new Error("AUTHENTICATION_TOKEN_MANAGER.METHOD_NOT_IMPLEMENTED");
  }

  async decodePayload(token: string): Promise<object> {
    throw new Error("AUTHENTICATION_TOKEN_MANAGER.METHOD_NOT_IMPLEMENTED");
  }
}
