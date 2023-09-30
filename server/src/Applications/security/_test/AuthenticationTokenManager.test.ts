import AuthenticationTokenManager from "../AuthenticationTokenManager";

describe("AuthenticationTokenManager interface", () => {
  it("should throw error when invoke abstract behavior", async () => {
    // Arrange
    const authenticationTokenManager = new AuthenticationTokenManager();

    // Action & Assert
    await expect(
      authenticationTokenManager.createAccessToken({ payload: "any_payload" })
    ).rejects.toThrowError(
      "AUTHENTICATION_TOKEN_MANAGER.METHOD_NOT_IMPLEMENTED"
    );
    await expect(
      authenticationTokenManager.decodePayload("any_token")
    ).rejects.toThrowError(
      "AUTHENTICATION_TOKEN_MANAGER.METHOD_NOT_IMPLEMENTED"
    );
  });
});
