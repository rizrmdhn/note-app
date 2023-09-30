import RegisterUser from "@/Domains/users/entities/RegisterUser";
import { IPasswordHash } from "@/types/hash";
import {
  IRegisterUser,
  IRegisteredUser,
  IUserRegisterUseCase,
  IUserRepository,
  TUserRegisterUseCase,
} from "@/types/users";
import { IInputValidator } from "@/types/validator";

export default class UserRegisterUseCase implements IUserRegisterUseCase {
  _userRepository: IUserRepository;
  _passwordHash: IPasswordHash;
  _inputValidator: IInputValidator;

  constructor({
    userRepository,
    passwordHash,
    inputValidator,
  }: TUserRegisterUseCase) {
    this._userRepository = userRepository;
    this._passwordHash = passwordHash;
    this._inputValidator = inputValidator;
  }

  async execute(useCasePayload: IRegisterUser): Promise<IRegisteredUser> {
    const { username, email, fullname, password } = new RegisterUser(
      useCasePayload
    );
    await this._inputValidator.validateEmail(email);
    await this._inputValidator.validateUsername(username);
    await this._inputValidator.validatePassword(password);
    await this._userRepository.checkAvailabilityUsername(username);
    await this._userRepository.checkAvailabilityEmail(email);
    const hashedPassword = await this._passwordHash.hash(password);
    return this._userRepository.addUser({
      username,
      email,
      fullname,
      password: hashedPassword,
    });
  }
}
