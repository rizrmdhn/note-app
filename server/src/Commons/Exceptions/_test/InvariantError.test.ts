import InvariantError from "../InvariantError";

describe("InvariantError", () => {
  it("should create InvariantError correctly", () => {
    const invariantError = new InvariantError("invariant error");

    expect(invariantError).toBeInstanceOf(InvariantError);
    expect(invariantError.name).toEqual("InvariantError");
    expect(invariantError.message).toEqual("invariant error");
    expect(invariantError.statusCode).toEqual(400);
  });
});
