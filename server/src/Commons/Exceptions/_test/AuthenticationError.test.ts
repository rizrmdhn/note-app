import AuthenticationError from "../AuthenticationError";

describe("AuthenticationError", () => {
  it("should create AuthenticationError correctly", () => {
    const authenticationError = new AuthenticationError("authentication error");

    expect(authenticationError).toBeInstanceOf(AuthenticationError);
    expect(authenticationError.name).toEqual("AuthenticationError");
    expect(authenticationError.message).toEqual("authentication error");
    expect(authenticationError.statusCode).toEqual(401);
  });
});
