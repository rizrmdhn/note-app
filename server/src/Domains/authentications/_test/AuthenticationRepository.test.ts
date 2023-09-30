import AuthenticationRepository from "../AuthenticationRepository";

describe("AuthenticationRepository interface", () => {
  it("should throw error when invoke abstract behavior", async () => {
    // Arrange
    const authenticationRepository = new AuthenticationRepository();

    // Action & Assert
    await expect(authenticationRepository.addToken("")).rejects.toThrowError(
      "AUTHENTICATION_REPOSITORY.METHOD_NOT_IMPLEMENTED"
    );
  });
});
