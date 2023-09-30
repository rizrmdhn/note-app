import PasswordHash from "../PasswordHash";

describe("PasswordHash", () => {
  it("should throw error when invoke abstract behavior", async () => {
    // Arrange
    const passwordHash = new PasswordHash();

    // Action & Assert
    await expect(passwordHash.hash("any_password")).rejects.toThrowError(
      "PASSWORD_HASH.METHOD_NOT_IMPLEMENTED"
    );
    await expect(
      passwordHash.compare("any_password", "any_hashed_password")
    ).rejects.toThrowError("PASSWORD_HASH.METHOD_NOT_IMPLEMENTED");
    await expect(
      passwordHash.compareNewPasswordWithOldPassword(
        "any_password",
        "any_hashed_password"
      )
    ).rejects.toThrowError("PASSWORD_HASH.METHOD_NOT_IMPLEMENTED");
  });
});
