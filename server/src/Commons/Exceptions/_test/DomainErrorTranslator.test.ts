import DomainErrorTranslator from "../DomainErrorTranslator";
import InvariantError from "../InvariantError";

describe("DomainErrorTranslator", () => {
  it("should translate error correctly", () => {
    const expectedError = new InvariantError(
      "tidak dapat membuat user baru karena properti yang dibutuhkan tidak ada"
    );
    const registerUserError = DomainErrorTranslator.translate(
      new Error("REGISTER_USER.NOT_CONTAIN_NEEDED_PROPERTY")
    );

    expect(registerUserError).toStrictEqual(expectedError);
  });

  it("should return error correctly when error message is not found", () => {
    const expectedError = new Error("error");
    const registerUserError = DomainErrorTranslator.translate(
      new Error("error")
    );

    expect(registerUserError).toStrictEqual(expectedError);
  });
});
