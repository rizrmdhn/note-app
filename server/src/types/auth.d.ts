import jwt from "@hapi/jwt";

export interface INewAuth {
  accessToken: string;
}

export interface IAuthenticationRepository {
  addToken(token: string): Promise<string>;
}
export interface IAuthenticationTokenManager {
  createAccessToken(payload: object): Promise<string>;
  decodePayload(token: string): Promise<object>;
}

export type IJwt = typeof jwt;

export interface IJwtTokenManager {
  createAccessToken(payload: object): Promise<string>;
  decodePayload(token: string): Promise<object>;
}
