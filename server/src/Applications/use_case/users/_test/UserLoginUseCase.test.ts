import UserRepository from "@/Domains/users/UserRepository";
import AuthenticationRepository from "@/Domains/authentications/AuthenticationRepository";
import AuthenticationTokenManager from "@/Applications/security/AuthenticationTokenManager";
import PasswordHash from "@/Applications/security/PasswordHash";
import UserLoginUseCase from "@/Applications/use_case/users/UserLoginUseCase";
import UserLogin from "@/Domains/users/entities/UserLogin";
import NewAuth from "@/Domains/authentications/entities/NewAuth";

describe("UserLoginUseCase", () => {
  it("should orchestrating the login action correctly with username and password", async () => {
    // Arrange
    const useCasePayload = {
      username: "dicoding",
      password: "super_password",
    };

    const expectedNewAuth = new NewAuth({
      accessToken: "access_token",
    });

    // mock dependency
    const mockUserRepository = new UserRepository();
    const mockAuthenticationRepository = new AuthenticationRepository();
    const mockAuthenticationTokenManager = new AuthenticationTokenManager();
    const mockPasswordHash = new PasswordHash();

    // mock function
    mockUserRepository.getPasswordByUsername = jest
      .fn()
      .mockImplementation(() => Promise.resolve("encrypted_password"));
    mockUserRepository.getIdByUsername = jest
      .fn()
      .mockImplementation(() => Promise.resolve("user-123"));
    mockPasswordHash.compare = jest
      .fn()
      .mockImplementation(() => Promise.resolve());
    mockAuthenticationTokenManager.createAccessToken = jest
      .fn()
      .mockImplementation(() => Promise.resolve(expectedNewAuth.accessToken));

    // create use case instance
    const userLoginUseCase = new UserLoginUseCase({
      authenticationRepository: mockAuthenticationRepository,
      authenticationTokenManager: mockAuthenticationTokenManager,
      passwordHash: mockPasswordHash,
      userRepository: mockUserRepository,
    });

    // Action
    const actualNewAuth = await userLoginUseCase.execute(
      useCasePayload as UserLogin
    );

    // Assert
    expect(actualNewAuth).toStrictEqual(expectedNewAuth);
    expect(mockUserRepository.getPasswordByUsername).toBeCalledWith(
      useCasePayload.username
    );
    expect(mockUserRepository.getIdByUsername).toBeCalledWith(
      useCasePayload.username
    );
    expect(mockPasswordHash.compare).toBeCalledWith(
      useCasePayload.password,
      "encrypted_password"
    );
  });

  it("should orchestrating the login action correctly with email and password", async () => {
    // Arrange
    const useCasePayload = {
      email: "dicoding@mail.com",
      password: "super_password",
    };

    const expectedNewAuth = new NewAuth({
      accessToken: "access_token",
    });

    // mock dependency
    const mockUserRepository = new UserRepository();
    const mockAuthenticationRepository = new AuthenticationRepository();
    const mockAuthenticationTokenManager = new AuthenticationTokenManager();
    const mockPasswordHash = new PasswordHash();

    // mock function
    mockUserRepository.getPasswordByEmail = jest
      .fn()
      .mockImplementation(() => Promise.resolve("encrypted_password"));
    mockUserRepository.getIdByEmail = jest
      .fn()
      .mockImplementation(() => Promise.resolve("user-123"));
    mockPasswordHash.compare = jest
      .fn()
      .mockImplementation(() => Promise.resolve());
    mockAuthenticationTokenManager.createAccessToken = jest
      .fn()
      .mockImplementation(() => Promise.resolve(expectedNewAuth.accessToken));

    // create use case instance
    const userLoginUseCase = new UserLoginUseCase({
      authenticationRepository: mockAuthenticationRepository,
      authenticationTokenManager: mockAuthenticationTokenManager,
      passwordHash: mockPasswordHash,
      userRepository: mockUserRepository,
    });

    // Action
    const actualNewAuth = await userLoginUseCase.execute(
      useCasePayload as UserLogin
    );

    // Assert
    expect(actualNewAuth).toStrictEqual(expectedNewAuth);
    expect(mockUserRepository.getPasswordByEmail).toBeCalledWith(
      useCasePayload.email
    );
    expect(mockUserRepository.getIdByEmail).toBeCalledWith(
      useCasePayload.email
    );
    expect(mockPasswordHash.compare).toBeCalledWith(
      useCasePayload.password,
      "encrypted_password"
    );
  });
});
