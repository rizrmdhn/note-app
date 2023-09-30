import InputValidator from "../InputValidator";

describe("InputValidator", () => {
  it("should throw error when invoke abstract behavior", () => {
    // Arrange
    const inputValidator = new InputValidator();

    // Action & Assert
    expect(() => inputValidator.validateUsername("")).toThrowError(
      "INPUT_VALIDATOR.METHOD_NOT_IMPLEMENTED"
    );
    expect(() => inputValidator.validateEmail("")).toThrowError(
      "INPUT_VALIDATOR.METHOD_NOT_IMPLEMENTED"
    );
    expect(() => inputValidator.validatePassword("")).toThrowError(
      "INPUT_VALIDATOR.METHOD_NOT_IMPLEMENTED"
    );
  });
});
