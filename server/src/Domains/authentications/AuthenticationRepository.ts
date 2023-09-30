import { IAuthenticationRepository } from "@/types/auth";

export default class AuthenticationRepository
  implements IAuthenticationRepository
{
  async addToken(token: string): Promise<string> {
    throw new Error("AUTHENTICATION_REPOSITORY.METHOD_NOT_IMPLEMENTED");
  }
}
