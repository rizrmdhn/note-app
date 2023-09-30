// Types import
import {
  IUserLogin,
  IUserLoginUseCase,
  IUserRepository,
  TUserLoginUseCase,
} from "@/types/users";
import {
  IAuthenticationRepository,
  IAuthenticationTokenManager,
} from "@/types/auth";
import { IPasswordHash } from "@/types/hash";

// Entity import
import UserLogin from "@/Domains/users/entities/UserLogin";
import NewAuth from "@/Domains/authentications/entities/NewAuth";

export default class UserLoginUseCase implements IUserLoginUseCase {
  _userRepository: IUserRepository;
  _authenticationRepository: IAuthenticationRepository;
  _authenticationTokenManager: IAuthenticationTokenManager;
  _passwordHash: IPasswordHash;

  constructor({
    userRepository,
    authenticationRepository,
    authenticationTokenManager,
    passwordHash,
  }: TUserLoginUseCase) {
    this._userRepository = userRepository;
    this._authenticationRepository = authenticationRepository;
    this._authenticationTokenManager = authenticationTokenManager;
    this._passwordHash = passwordHash;
  }

  async execute(useCasePayload: IUserLogin): Promise<object> {
    const { username, email, password } = new UserLogin(useCasePayload);

    if (!username) {
      const encryptedPassword = await this._userRepository.getPasswordByEmail(
        email as string
      );

      await this._passwordHash.compare(password, encryptedPassword as string);

      const id = await this._userRepository.getIdByEmail(email as string);

      const accessToken =
        await this._authenticationTokenManager.createAccessToken({
          username,
          id,
        });

      const newAuthentication = new NewAuth({
        accessToken,
      });

      return newAuthentication;
    }

    const encryptedPassword = await this._userRepository.getPasswordByUsername(
      username
    );

    await this._passwordHash.compare(password, encryptedPassword as string);

    const id = await this._userRepository.getIdByUsername(username);

    const accessToken =
      await this._authenticationTokenManager.createAccessToken({ email, id });

    const newAuthentication = new NewAuth({
      accessToken,
    });

    return newAuthentication;
  }
}
