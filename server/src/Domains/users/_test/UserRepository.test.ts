import UserRepository from "../UserRepository";

describe("UserRepository interface", () => {
  it("should throw error when invoke abstract behavior", async () => {
    // Arrange
    const userRepository = new UserRepository();

    // Action & Assert
    await expect(
      userRepository.addUser({
        username: "",
        password: "",
        fullname: "",
        email: "",
      })
    ).rejects.toThrowError("USER_REPOSITORY.METHOD_NOT_IMPLEMENTED");

    await expect(userRepository.getUserByUsername("")).rejects.toThrowError(
      "USER_REPOSITORY.METHOD_NOT_IMPLEMENTED"
    );

    await expect(userRepository.getUserById("")).rejects.toThrowError(
      "USER_REPOSITORY.METHOD_NOT_IMPLEMENTED"
    );

    await expect(userRepository.getOwnProfile("")).rejects.toThrowError(
      "USER_REPOSITORY.METHOD_NOT_IMPLEMENTED"
    );

    await expect(userRepository.getPasswordByUsername("")).rejects.toThrowError(
      "USER_REPOSITORY.METHOD_NOT_IMPLEMENTED"
    );

    await expect(userRepository.getPasswordByEmail("")).rejects.toThrowError(
      "USER_REPOSITORY.METHOD_NOT_IMPLEMENTED"
    );

    await expect(userRepository.getPasswordById("")).rejects.toThrowError(
      "USER_REPOSITORY.METHOD_NOT_IMPLEMENTED"
    );

    await expect(userRepository.getIdByUsername("")).rejects.toThrowError(
      "USER_REPOSITORY.METHOD_NOT_IMPLEMENTED"
    );

    await expect(userRepository.getIdByEmail("")).rejects.toThrowError(
      "USER_REPOSITORY.METHOD_NOT_IMPLEMENTED"
    );

    await expect(
      userRepository.updateFullname({
        id: "",
        fullname: "",
      })
    ).rejects.toThrowError("USER_REPOSITORY.METHOD_NOT_IMPLEMENTED");

    await expect(
      userRepository.updatePassword({
        id: "",
        password: "",
        confirmPassword: "",
      })
    ).rejects.toThrowError("USER_REPOSITORY.METHOD_NOT_IMPLEMENTED");

    await expect(
      userRepository.checkAvailabilityUsername("")
    ).rejects.toThrowError("USER_REPOSITORY.METHOD_NOT_IMPLEMENTED");

    await expect(
      userRepository.checkAvailabilityEmail("")
    ).rejects.toThrowError("USER_REPOSITORY.METHOD_NOT_IMPLEMENTED");

    await expect(
      userRepository.checkAvailabilityUserById("")
    ).rejects.toThrowError("USER_REPOSITORY.METHOD_NOT_IMPLEMENTED");

    await expect(
      userRepository.verifyUserCredential({
        username: "",
        password: "",
      })
    ).rejects.toThrowError("USER_REPOSITORY.METHOD_NOT_IMPLEMENTED");
  });
});
