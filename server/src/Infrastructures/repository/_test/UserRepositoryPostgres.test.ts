import UsersTableTestHelper from "@/Helpers/UsersTableTestHelper";
import PasswordCompareTestHelper from "@/Helpers/PasswordCompareTestHelper";
import AuthenticationError from "@/Commons/Exceptions/AuthenticationError";
import AuthorizationError from "@/Commons/Exceptions/AuthorizationError";
import InvariantError from "@/Commons/Exceptions/InvariantError";
import RegisterUser from "@/Domains/users/entities/RegisterUser";
import RegisteredUser from "@/Domains/users/entities/RegisteredUser";
import UserRepositoryPostgres from "../UserRepositoryPostgres";
import pool from "@/Infrastructures/database/postgres/pool";

describe("UserRepositoryPostgres", () => {
  afterEach(async () => {
    await UsersTableTestHelper.cleanTable();
  });

  afterAll(async () => {
    await pool.end();
  });

  describe("addUser function", () => {
    it("should persist register user and return registered user correctly", async () => {
      // Arrange
      const regsterUser = new RegisterUser({
        email: "dicoding@mail.com",
        fullname: "Dicoding Indonesia",
        password: "super_password",
        username: "dicoding",
      });

      const fakeIdGenerator = () => "123";

      const userRepositoryPostgres = new UserRepositoryPostgres(
        pool,
        fakeIdGenerator
      );

      // Action
      const registeredUser = await userRepositoryPostgres.addUser(regsterUser);

      // Assert
      expect(registeredUser).toStrictEqual(
        new RegisteredUser({
          id: "user-123",
          username: "dicoding",
          email: "dicoding@mail.com",
          fullname: "Dicoding Indonesia",
        })
      );
    });
  });

  describe("getUserByUsername function", () => {
    it("should throw InvariantError when user not found", async () => {
      // Arrange
      // @ts-expect-error testing purpose
      const userRepositoryPostgres = new UserRepositoryPostgres(pool, () => {});

      // Action & Assert
      await expect(
        userRepositoryPostgres.getUserByUsername("dicoding")
      ).rejects.toThrowError(InvariantError);
    });

    it("should return user correctly", async () => {
      // Arrange
      const registerUser = new RegisterUser({
        email: "dicoding@mail.com",
        fullname: "Dicoding Indonesia",
        password: "super_password",
        username: "dicoding",
      });

      const fakeIdGenerator = () => "123";

      const userRepositoryPostgres = new UserRepositoryPostgres(
        pool,
        fakeIdGenerator
      );

      await userRepositoryPostgres.addUser(registerUser);

      // Action
      const user = await userRepositoryPostgres.getUserByUsername("dicoding");

      // Assert
      expect(user).toStrictEqual({
        id: "user-123",
        username: "dicoding",
        email: "dicoding@mail.com",
        fullname: "Dicoding Indonesia",
      });
    });
  });

  describe("getUserById function", () => {
    it("should throw InvariantError when user not found", async () => {
      // Arrange
      // @ts-expect-error testing purpose
      const userRepositoryPostgres = new UserRepositoryPostgres(pool, () => {});

      // Action & Assert
      await expect(
        userRepositoryPostgres.getUserById("user-123")
      ).rejects.toThrowError(InvariantError);
    });

    it("should return user correctly", async () => {
      // Arrange
      const registerUser = new RegisterUser({
        email: "dicoding@mail.com",
        fullname: "Dicoding Indonesia",
        password: "super_password",
        username: "dicoding",
      });

      const fakeIdGenerator = () => "123";

      const userRepositoryPostgres = new UserRepositoryPostgres(
        pool,
        fakeIdGenerator
      );

      await userRepositoryPostgres.addUser(registerUser);

      // Action
      const user = await userRepositoryPostgres.getUserById("user-123");

      // Assert
      expect(user).toStrictEqual({
        id: "user-123",
        username: "dicoding",
        email: "dicoding@mail.com",
        fullname: "Dicoding Indonesia",
      });
    });
  });

  describe("getOwnProfile function", () => {
    it("should throw InvariantError when user not found", async () => {
      // Arrange
      // @ts-expect-error testing purpose
      const userRepositoryPostgres = new UserRepositoryPostgres(pool, () => {});

      // Action & Assert
      await expect(
        userRepositoryPostgres.getOwnProfile("user-123")
      ).rejects.toThrowError(InvariantError);
    });

    it("should return user correctly", async () => {
      // Arrange
      const registerUser = new RegisterUser({
        email: "dicoding@mail.com",
        fullname: "Dicoding Indonesia",
        password: "super_password",
        username: "dicoding",
      });

      const fakeIdGenerator = () => "123";

      const userRepositoryPostgres = new UserRepositoryPostgres(
        pool,
        fakeIdGenerator
      );

      await userRepositoryPostgres.addUser(registerUser);

      // Action
      const user = await userRepositoryPostgres.getOwnProfile("user-123");

      // Assert
      expect(user).toStrictEqual({
        id: "user-123",
        username: "dicoding",
        email: "dicoding@mail.com",
        fullname: "Dicoding Indonesia",
      });
    });
  });

  describe("getPasswordByUsername function", () => {
    it("should throw AuthenticationError when user not found", async () => {
      // Arrange
      // @ts-expect-error testing purpose
      const userRepositoryPostgres = new UserRepositoryPostgres(pool, () => {});

      // Action & Assert
      await expect(
        userRepositoryPostgres.getPasswordByUsername("dicoding")
      ).rejects.toThrowError(AuthenticationError);
    });

    it("should return user password correctly", async () => {
      // Arrange
      // @ts-expect-error testing purpose
      const userRepositoryPostgres = new UserRepositoryPostgres(pool, {});
      await UsersTableTestHelper.addUser({ username: "dicoding" });

      // Action & Assert
      const password = await userRepositoryPostgres.getPasswordByUsername(
        "dicoding"
      );

      expect(password).toEqual("super_password");
    });
  });

  describe("getPasswordByEmail function", () => {
    it("should throw AuthenticationError when user not found", async () => {
      // Arrange
      // @ts-expect-error testing purpose
      const userRepositoryPostgres = new UserRepositoryPostgres(pool, () => {});

      // Action & Assert
      await expect(
        userRepositoryPostgres.getPasswordByEmail("dicoding")
      ).rejects.toThrowError(AuthenticationError);
    });

    it("should return user password correctly", async () => {
      // Arrange
      // @ts-expect-error testing purpose
      const userRepositoryPostgres = new UserRepositoryPostgres(pool, {});
      await UsersTableTestHelper.addUser({ email: "testuser@mail.com" });

      // Action & Assert
      const password = await userRepositoryPostgres.getPasswordByEmail(
        "testuser@mail.com"
      );

      expect(password).toEqual("super_password");
    });
  });

  describe("getPasswordById function", () => {
    it("should throw AuthorizationError when user not found", async () => {
      // Arrange
      // @ts-expect-error testing purpose
      const userRepositoryPostgres = new UserRepositoryPostgres(pool, () => {});

      // Action & Assert
      await expect(
        userRepositoryPostgres.getPasswordById("user-123")
      ).rejects.toThrowError(AuthorizationError);
    });

    it("should return user password correctly", async () => {
      // Arrange
      // @ts-expect-error testing purpose
      const userRepositoryPostgres = new UserRepositoryPostgres(pool, {});
      await UsersTableTestHelper.addUser({ id: "user-123" });

      // Action & Assert
      const password = await userRepositoryPostgres.getPasswordById("user-123");

      expect(password).toEqual("super_password");
    });
  });

  describe("getIdByUsername function", () => {
    it("should throw InvariantError when user not found", async () => {
      // Arrange
      // @ts-expect-error testing purpose
      const userRepositoryPostgres = new UserRepositoryPostgres(pool, () => {});

      // Action & Assert
      await expect(
        userRepositoryPostgres.getIdByUsername("dicoding")
      ).rejects.toThrowError(InvariantError);
    });

    it("should return user id correctly", async () => {
      // Arrange
      // @ts-expect-error testing purpose
      const userRepositoryPostgres = new UserRepositoryPostgres(pool, {});
      await UsersTableTestHelper.addUser({ username: "dicoding" });

      // Action & Assert
      const id = await userRepositoryPostgres.getIdByUsername("dicoding");

      expect(id).toEqual("user-123");
    });
  });

  describe("getIdByEmail function", () => {
    it("should throw InvariantError when user not found", async () => {
      // Arrange
      // @ts-expect-error testing purpose
      const userRepositoryPostgres = new UserRepositoryPostgres(pool, () => {});

      // Action & Assert
      await expect(
        userRepositoryPostgres.getIdByEmail("dicoding")
      ).rejects.toThrowError(InvariantError);
    });

    it("should return user id correctly", async () => {
      // Arrange
      // @ts-expect-error testing purpose
      const userRepositoryPostgres = new UserRepositoryPostgres(pool, {});
      await UsersTableTestHelper.addUser({ email: "test@mail.com" });

      // Action & Assert
      const id = await userRepositoryPostgres.getIdByEmail("test@mail.com");

      expect(id).toEqual("user-123");
    });
  });

  describe("updateFullname function", () => {
    it("should update fullname correctly", async () => {
      // Arrange
      const registerUser = new RegisterUser({
        email: "test@mail.com",
        fullname: "Dicoding Indonesia",
        password: "super_password",
        username: "dicoding",
      });

      const fakeIdGenerator = () => "123";

      const userRepositoryPostgres = new UserRepositoryPostgres(
        pool,
        fakeIdGenerator
      );

      await userRepositoryPostgres.addUser(registerUser);

      // Action
      await userRepositoryPostgres.updateFullname({
        id: "user-123",
        fullname: "Dicoding",
        email: "test@mail.com",
        username: "dicoding",
      });

      // Assert
      const users = await UsersTableTestHelper.findUserById("user-123");

      expect(users).toHaveLength(1);
      expect(users[0].fullname).toEqual("Dicoding");
    });
  });

  describe("updatePassword function", () => {
    it("should update password correctly", async () => {
      // Arrange
      const registerUser = new RegisterUser({
        email: "test@mail.com",
        fullname: "Dicoding Indonesia",
        password: "super_password",
        username: "dicoding",
      });

      const fakeIdGenerator = () => "123";

      const userRepositoryPostgres = new UserRepositoryPostgres(
        pool,
        fakeIdGenerator
      );

      await userRepositoryPostgres.addUser(registerUser);

      // Action
      await userRepositoryPostgres.updatePassword({
        id: "user-123",
        password: "super_secret_password",
        confirmPassword: "super_secret_password",
      });

      // Assert
      const users = await UsersTableTestHelper.findUserById("user-123");

      expect(users).toHaveLength(1);
      expect(users[0].password).toEqual("super_secret_password");
    });
  });

  describe("checkAvailabilityUsername function", () => {
    it("should throw InvariantError when username already taken", async () => {
      // Arrange
      // @ts-expect-error testing purpose
      const userRepositoryPostgres = new UserRepositoryPostgres(pool, {});
      await UsersTableTestHelper.addUser({ username: "dicoding" });

      // Action & Assert
      await expect(
        userRepositoryPostgres.checkAvailabilityUsername("dicoding")
      ).rejects.toThrowError(InvariantError);
    });

    it("should return true when username available", async () => {
      // Arrange
      // @ts-expect-error testing purpose
      const userRepositoryPostgres = new UserRepositoryPostgres(pool, {});

      // Action
      const result = await userRepositoryPostgres.checkAvailabilityUsername(
        "dicoding"
      );

      // Assert
      expect(result).toEqual(true);
    });
  });

  describe("checkAvailabilityEmail function", () => {
    it("should throw InvariantError when email already taken", async () => {
      // Arrange
      // @ts-expect-error testing purpose
      const userRepositoryPostgres = new UserRepositoryPostgres(pool, {});
      await UsersTableTestHelper.addUser({ email: "test@mail.com" });

      // Action & Assert
      await expect(
        userRepositoryPostgres.checkAvailabilityEmail("test@mail.com")
      ).rejects.toThrowError(InvariantError);
    });

    it("should return true when email available", async () => {
      // Arrange
      // @ts-expect-error testing purpose
      const userRepositoryPostgres = new UserRepositoryPostgres(pool, {});

      // Action
      const result = await userRepositoryPostgres.checkAvailabilityEmail(
        "test@mail.com"
      );

      // Assert
      expect(result).toEqual(true);
    });
  });

  describe("checkAvailabilityUserById function", () => {
    it("should throw InvariantError when user not found", async () => {
      // Arrange
      // @ts-expect-error testing purpose
      const userRepositoryPostgres = new UserRepositoryPostgres(pool, () => {});

      // Action & Assert
      await expect(
        userRepositoryPostgres.checkAvailabilityUserById("user-123")
      ).rejects.toThrowError(InvariantError);
    });

    it("should return true when user available", async () => {
      // Arrange
      // @ts-expect-error testing purpose
      const userRepositoryPostgres = new UserRepositoryPostgres(pool, {});
      await UsersTableTestHelper.addUser({ id: "user-123" });

      // Action
      const result = await userRepositoryPostgres.checkAvailabilityUserById(
        "user-123"
      );

      // Assert
      expect(result).toEqual(true);
    });
  });

  describe("verifyUserCredential function", () => {
    it("should throw AuthenticationError when username not found", async () => {
      // Arrange
      // @ts-expect-error testing purpose
      const userRepositoryPostgres = new UserRepositoryPostgres(pool, {});
      await UsersTableTestHelper.addUser({ username: "dicoding" });

      // Action & Assert
      await expect(
        userRepositoryPostgres.verifyUserCredential({
          username: "dicoding1",
          password: "super_password",
          email: "test@mail.com",
          fullname: "Dicoding Indonesia",
        })
      ).rejects.toThrowError(AuthenticationError);
    });

    it("should return id correctly", async () => {
      // Arrange
      const registerUser = new RegisterUser({
        email: "test@mail.com",
        fullname: "Dicoding Indonesia",
        password: "super_password",
        username: "dicoding",
      });

      const fakeIdGenerator = () => "123";

      const userRepositoryPostgres = new UserRepositoryPostgres(
        pool,
        fakeIdGenerator
      );

      await userRepositoryPostgres.addUser(registerUser);

      // Action
      const id = await userRepositoryPostgres.verifyUserCredential({
        username: "dicoding",
        password: "super_password",
        email: "test@mail.com",
        fullname: "Dicoding Indonesia",
      });

      // Assert
      expect(id).toEqual("user-123");
    });
  });
});
