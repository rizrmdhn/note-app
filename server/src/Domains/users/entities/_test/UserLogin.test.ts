import UserLogin from "../UserLogin";

describe("a UserLogin entities", () => {
  it("should throw error when payload did not contain needed property email or username", () => {
    // Arrange
    const payload = {
      password: "super_password",
    };

    // Action & Assert
    expect(() => new UserLogin(payload)).toThrowError(
      "USER_LOGIN.NOT_CONTAIN_USERNAME_OR_EMAIL"
    );
  });

  it("should throw error when payload did not contain needed property password", () => {
    // Arrange
    const payload = {
      email: "dicoding@mail.com",
    };

    // Action & Assert
    // @ts-expect-error testing purpose
    expect(() => new UserLogin(payload)).toThrowError(
      "USER_LOGIN.NOT_CONTAIN_PASSWORD"
    );
  });

  it("should throw error when payload did not meet data type specification", () => {
    // Arrange
    const payload = {
      username: 123,
      password: "super_password",
    };

    // Action & Assert
    // @ts-expect-error testing purpose
    expect(() => new UserLogin(payload)).toThrowError(
      "USER_LOGIN.EMAIL_OR_USERNAME_NOT_MEET_DATA_TYPE_SPECIFICATION"
    );
  });

  it("should throw error when username or email not meet data type specification", () => {
    // Arrange
    const payload = {
      username: "dicoding",
      password: {},
    };

    // Action & Assert
    // @ts-expect-error testing purpose
    expect(() => new UserLogin(payload)).toThrowError(
      "USER_LOGIN.PASSWORD_NOT_MEET_DATA_TYPE_SPECIFICATION"
    );
  });

  it("should throw error when username length more than 50 character", () => {
    // Arrange
    const payload = {
      username:
        "dicodasdaasdadadasdasdadadadasdasdasdasdawdawdasdadaaadadasdasd",
      password: "super_password",
    };

    // Action & Assert
    expect(() => new UserLogin(payload)).toThrowError(
      "USER_LOGIN.USERNAME_LIMIT_CHAR"
    );
  });

  it("should throw error when email length more than 50 character", () => {
    // Arrange
    const payload = {
      email: "dicodasdaasdadadasdasdadadadasdasdasdasdawdawdasdada@mail.com",
      password: "super_password",
    };

    // Action & Assert
    expect(() => new UserLogin(payload)).toThrowError(
      "USER_LOGIN.EMAIL_LIMIT_CHAR"
    );
  });

  it("should throw error when username contain restricted character", () => {
    // Arrange
    const payload = {
      username: "dicoding*",
      password: "super_password",
    };

    // Action & Assert
    expect(() => new UserLogin(payload)).toThrowError(
      "USER_LOGIN.USERNAME_CONTAIN_RESTRICTED_CHARACTER"
    );
  });

  it("should throw error when password length less than 8 character", () => {
    // Arrange
    const payload = {
      username: "dicoding",
      password: "super",
    };

    // Action & Assert
    expect(() => new UserLogin(payload)).toThrowError(
      "USER_LOGIN.PASSWORD_LIMIT_CHAR"
    );
  });

  it("should at least contain username or email and password", () => {
    // Arrange
    const payload = {
      password: "super_password",
    };

    // Action & Assert
    expect(() => new UserLogin(payload)).toThrowError(
      "USER_LOGIN.NOT_CONTAIN_USERNAME_OR_EMAIL"
    );
  });

  it("should create UserLogin object correctly with email and password", () => {
    // Arrange
    const payload = {
      email: "dicoding@mail.com",
      password: "super_password",
    };

    // Action
    const { email, password } = new UserLogin(payload);

    // Assert
    expect(email).toEqual(payload.email);
    expect(password).toEqual(payload.password);
  });
});
