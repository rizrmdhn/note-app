import InputValidator from "../InputValidator";

describe("InputValidator", () => {
  it("should throw error when invoke abstract behavior", async () => {
    // Arrange
    const inputValidator = new InputValidator();

    // Action & Assert
    await expect(
      inputValidator.validateUsername("any_username")
    ).rejects.toThrowError("INPUT_VALIDATOR.METHOD_NOT_IMPLEMENTED");

    await expect(
      inputValidator.validateEmail("any_email")
    ).rejects.toThrowError("INPUT_VALIDATOR.METHOD_NOT_IMPLEMENTED");

    await expect(
      inputValidator.validatePassword("any_password")
    ).rejects.toThrowError("INPUT_VALIDATOR.METHOD_NOT_IMPLEMENTED");
  });
});
