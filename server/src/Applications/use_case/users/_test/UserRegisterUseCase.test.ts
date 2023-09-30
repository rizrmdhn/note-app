import RegisterUser from "@/Domains/users/entities/RegisterUser";
import RegisteredUser from "@/Domains/users/entities/RegisteredUser";
import UserRepository from "@/Domains/users/UserRepository";
import PasswordHash from "@/Applications/security/PasswordHash";
import InputValidator from "@/Applications/security/InputValidator";
import UserRegisterUseCase from "../UserRegisterUseCase";

describe("UserRegisterUseCase", () => {
  it("should orchestrating the user register action correctly", async () => {
    // Arrange
    const useCasePayload = {
      username: "dicoding",
      password: "secret_password",
      fullname: "Dicoding Indonesia",
      email: "dicoding@mail.com",
    };

    const expectedRegisteredUser = new RegisteredUser({
      id: "user-123",
      username: useCasePayload.username,
      fullname: useCasePayload.fullname,
      email: useCasePayload.email,
    });

    // mock dependency
    const mockUserRepository = new UserRepository();
    const mockPasswordHash = new PasswordHash();
    const mockInputValidator = new InputValidator();

    // mock function
    mockUserRepository.checkAvailabilityEmail = jest
      .fn()
      .mockImplementation(() => Promise.resolve());
    mockUserRepository.checkAvailabilityUsername = jest
      .fn()
      .mockImplementation(() => Promise.resolve());
    mockPasswordHash.hash = jest
      .fn()
      .mockImplementation(() => Promise.resolve("encrypted_password"));
    mockInputValidator.validateEmail = jest
      .fn()
      .mockImplementation(() => Promise.resolve());
    mockInputValidator.validatePassword = jest
      .fn()
      .mockImplementation(() => Promise.resolve());
    mockInputValidator.validateUsername = jest
      .fn()
      .mockImplementation(() => Promise.resolve());
    mockUserRepository.addUser = jest
      .fn()
      .mockImplementation(() => Promise.resolve(expectedRegisteredUser));

    // use case instance
    const getUserRegisterUseCase = new UserRegisterUseCase({
      userRepository: mockUserRepository,
      passwordHash: mockPasswordHash,
      inputValidator: mockInputValidator,
    });

    // Action
    const registeredUser = await getUserRegisterUseCase.execute(useCasePayload);

    // Assert
    expect(registeredUser).toStrictEqual(expectedRegisteredUser);
    expect(mockUserRepository.checkAvailabilityEmail).toBeCalledWith(
      useCasePayload.email
    );
    expect(mockUserRepository.checkAvailabilityUsername).toBeCalledWith(
      useCasePayload.username
    );
    expect(mockPasswordHash.hash).toBeCalledWith(useCasePayload.password);
    expect(mockInputValidator.validateEmail).toBeCalledWith(
      useCasePayload.email
    );
    expect(mockInputValidator.validatePassword).toBeCalledWith(
      useCasePayload.password
    );
    expect(mockInputValidator.validateUsername).toBeCalledWith(
      useCasePayload.username
    );
    expect(mockUserRepository.addUser).toBeCalledWith(
      new RegisterUser({
        username: useCasePayload.username,
        password: "encrypted_password",
        fullname: useCasePayload.fullname,
        email: useCasePayload.email,
      })
    );
  });
});
