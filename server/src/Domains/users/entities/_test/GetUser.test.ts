import GetUser from "../GetUser";

describe("a GetUser entities", () => {
  it("should throw error when payload did not contain needed property", () => {
    // Arrange
    const payload = {
      id: "",
      username: "dicoding",
      email: "",
      fullname: "",
    };

    // Action & Assert
    expect(() => new GetUser(payload)).toThrowError(
      "GET_USER.NOT_CONTAIN_NEEDED_PROPERTY"
    );
  });

  it("should throw error when payload did not meet data type specification", () => {
    // Arrange
    const payload = {
      id: 123,
      username: "dicoding",
      email: "test",
      fullname: "test",
    };

    // Action & Assert
    // @ts-expect-error Invalid payload for testing purposes.
    expect(() => new GetUser(payload)).toThrowError(
      "GET_USER.NOT_MEET_DATA_TYPE_SPECIFICATION"
    );
  });

  it("should create GetUser object correctly", () => {
    // Arrange
    const payload = {
      id: "user-123",
      username: "dicoding",
      email: "dicoding@mail.com",
      fullname: "Dicoding Indonesia",
    };

    // Action
    const { id, username, email, fullname } = new GetUser(payload);

    // Assert

    expect(id).toEqual(payload.id);
    expect(username).toEqual(payload.username);
    expect(email).toEqual(payload.email);
    expect(fullname).toEqual(payload.fullname);
  });
});
