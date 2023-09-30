import AuthenticationTokenManager from "@/Applications/security/AuthenticationTokenManager";
import InvariantError from "@/Commons/Exceptions/InvariantError";
import { IJwt, IJwtTokenManager } from "@/types/auth";

export default class JwtTokenManager
  extends AuthenticationTokenManager
  implements IJwtTokenManager
{
  jwt: IJwt;
  constructor(jwt: IJwt) {
    super();
    this.jwt = jwt;
  }

  async createAccessToken(payload: object): Promise<string> {
    return this.jwt.token.generate(
      payload,
      process.env.ACCESS_TOKEN_KEY as string
    );
  }

  async decodePayload(token: string): Promise<object> {
    try {
      const artifacts = this.jwt.token.decode(token);
      return artifacts.decoded.payload;
    } catch (error) {
      throw new InvariantError("access token tidak valid");
    }
  }
}
