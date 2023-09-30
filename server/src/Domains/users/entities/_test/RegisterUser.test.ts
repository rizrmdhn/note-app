import RegisterUser from "../RegisterUser";

describe("RegisterUser entities", () => {
  it("should throw error when payload did not contain needed property", () => {
    // Arrange
    const payload = {
      username: "dicoding",
      email: "",
      fullname: "",
      password: "",
    };

    // Action & Assert
    expect(() => new RegisterUser(payload)).toThrowError(
      "REGISTER_USER.NOT_CONTAIN_NEEDED_PROPERTY"
    );
  });

  it("should throw error when payload did not meet data type specification", () => {
    // Arrange
    const payload = {
      username: 123,
      email: "dicoding@mail.com",
      fullname: "Dicoding Indonesia",
      password: "super_password",
    };

    // Action & Assert
    // @ts-expect-error testing purpose
    expect(() => new RegisterUser(payload)).toThrowError(
      "REGISTER_USER.NOT_MEET_DATA_TYPE_SPECIFICATION"
    );
  });

  it("should throw error when username length more than 50 character", () => {
    // Arrange
    const payload = {
      username:
        "dicodingindonesiadicodingindonesiadicodingindonesiadicodingindonesia",
      email:
        "dicodingindonesiadicodingindonesiadicodingindonesiadicodingindonesia@mail.com",
      fullname: "Dicoding Indonesia",
      password: "super_password",
    };

    // Action & Assert
    expect(() => new RegisterUser(payload)).toThrowError(
      "REGISTER_USER.USERNAME_EMAIL_LIMIT_CHAR"
    );
  });

  it("should throw error when username contain restricted character", () => {
    // Arrange
    const payload = {
      username: "dicoding indonesia",
      email: "dicoding@mail.com",
      fullname: "Dicoding Indonesia",
      password: "super_password",
    };

    // Action & Assert
    expect(() => new RegisterUser(payload)).toThrowError(
      "REGISTER_USER.USERNAME_CONTAIN_RESTRICTED_CHARACTER"
    );
  });

  it("should throw error when password length less than 8 character", () => {
    // Arrange
    const payload = {
      username: "dicoding",
      email: "dicoding@mail.com",
      fullname: "Dicoding Indonesia",
      password: "super",
    };

    // Action & Assert
    expect(() => new RegisterUser(payload)).toThrowError(
      "REGISTER_USER.PASSWORD_LIMIT_CHAR"
    );
  });

  it("should create registerUser object correctly", () => {
    // Arrange
    const payload = {
      username: "dicoding",
      email: "dicoding@mail.com",
      fullname: "Dicoding Indonesia",
      password: "super_password",
      _validatePayload: () => {},
    };

    // Action
    const { username, email, fullname, password } = new RegisterUser(payload);

    // Assert
    expect(username).toEqual(payload.username);
    expect(email).toEqual(payload.email);
    expect(fullname).toEqual(payload.fullname);
    expect(password).toEqual(payload.password);
  });
});
