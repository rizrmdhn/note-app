import NewAuth from "../NewAuth";

describe("NewAuth entities", () => {
  it("should throw error when payload did not contain needed property", () => {
    // Arrange
    const payload = {
      accessToken: "",
    };

    // Action & Assert
    expect(() => new NewAuth(payload)).toThrowError(
      "NEW_AUTH.NOT_CONTAIN_NEEDED_PROPERTY"
    );
  });

  it("should throw error when payload did not meet data type specification", () => {
    // Arrange
    const payload = {
      accessToken: 123,
    };

    // Action & Assert
    // @ts-expect-error : accessToken should be string
    expect(() => new NewAuth(payload)).toThrowError(
      "NEW_AUTH.NOT_MEET_DATA_TYPE_SPECIFICATION"
    );
  });

  it("should create NewAuth object correctly", () => {
    // Arrange
    const payload = {
      accessToken: "access_token",
    };

    // Action
    const { accessToken } = new NewAuth(payload);

    // Assert
    expect(accessToken).toEqual(payload.accessToken);
  });
});
