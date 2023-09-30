import NotFoundError from "../NotFoundError";

describe("NotFoundError", () => {
  it("should create NotFoundError correctly", () => {
    const notFoundError = new NotFoundError("not found error");

    expect(notFoundError).toBeInstanceOf(NotFoundError);
    expect(notFoundError.name).toEqual("NotFoundError");
    expect(notFoundError.message).toEqual("not found error");
    expect(notFoundError.statusCode).toEqual(404);
  });
});
