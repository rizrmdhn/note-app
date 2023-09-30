export interface IAuthenticationTokenManager {
  createAccessToken(payload: object): Promise<string>;
  decodePayload(token: string): Promise<object>;
}
