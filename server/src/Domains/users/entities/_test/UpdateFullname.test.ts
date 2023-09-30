import UpdateFullname from "../UpdateFullname";

describe("a UpdateFullname entities", () => {
  it("should throw error when payload did not contain needed property", () => {
    // Arrange
    const payload = {
      id: "",
      fullname: "",
    };

    // Action & Assert
    expect(() => new UpdateFullname(payload)).toThrowError(
      "UPDATE_FULLNAME.NOT_CONTAIN_NEEDED_PROPERTY"
    );
  });

  it("should throw error when payload did not meet data type specification", () => {
    // Arrange
    const payload = {
      id: 123,
      fullname: 123,
    };

    // Action & Assert
    // @ts-expect-error testing purpose
    expect(() => new UpdateFullname(payload)).toThrowError(
      "UPDATE_FULLNAME.NOT_MEET_DATA_TYPE_SPECIFICATION"
    );
  });

  it("should create updateFullname object correctly", () => {
    // Arrange
    const payload = {
      id: "user-123",
      fullname: "Dicoding Indonesia",
    };

    // Action
    const { id, fullname } = new UpdateFullname(payload);

    // Assert
    expect(id).toEqual(payload.id);
    expect(fullname).toEqual(payload.fullname);
  });
});
