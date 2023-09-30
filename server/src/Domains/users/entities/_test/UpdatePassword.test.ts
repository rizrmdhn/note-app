import UpdatePassword from "../UpdatePassword";

describe("a UpdatePassword entities", () => {
  it("should throw error when payload did not contain needed property", () => {
    // Arrange
    const payload = {
      id: "",
      password: "",
      confirmPassword: "",
    };

    // Action & Assert
    expect(() => new UpdatePassword(payload)).toThrowError(
      "UPDATE_PASSWORD.NOT_CONTAIN_NEEDED_PROPERTY"
    );
  });

  it("should throw error when payload did not meet data type specification", () => {
    // Arrange
    const payload = {
      id: 123,
      password: 123,
      confirmPassword: 123,
    };

    // Action & Assert
    // @ts-expect-error testing purpose
    expect(() => new UpdatePassword(payload)).toThrowError(
      "UPDATE_PASSWORD.NOT_MEET_DATA_TYPE_SPECIFICATION"
    );
  });

  it("should throw error when password not match", () => {
    // Arrange
    const payload = {
      id: "user-123",
      password: "super_password",
      confirmPassword: "super_password2",
    };

    // Action & Assert
    expect(() => new UpdatePassword(payload)).toThrowError(
      "UPDATE_PASSWORD.PASSWORD_NOT_MATCH"
    );
  });

  it("should create updatePassword object correctly", () => {
    // Arrange
    const payload = {
      id: "user-123",
      password: "super_password",
      confirmPassword: "super_password",
    };

    // Action
    const { id, password, confirmPassword } = new UpdatePassword(payload);

    // Assert
    expect(id).toEqual(payload.id);
    expect(password).toEqual(payload.password);
    expect(confirmPassword).toEqual(payload.confirmPassword);
  });
});
