import AuthorizationError from "../AuthorizationError";

describe("AuthorizationError", () => {
  it("should create AuthorizationError correctly", () => {
    const authorizationError = new AuthorizationError("authorization error");

    expect(authorizationError).toBeInstanceOf(AuthorizationError);
    expect(authorizationError.name).toEqual("AuthorizationError");
    expect(authorizationError.message).toEqual("authorization error");
    expect(authorizationError.statusCode).toEqual(403);
  });
});
