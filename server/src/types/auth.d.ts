import jwt from "@hapi/jwt";

export interface IAuthenticationTokenManager {
  createAccessToken(payload: object): Promise<string>;
  decodePayload(token: string): Promise<object>;
}

export type IJwt = typeof jwt;

export interface IJwtTokenManager {
  createAccessToken(payload: object): Promise<string>;
  decodePayload(token: string): Promise<object>;
}
