import { IPasswordHash } from "@/types/hash";

export default class PasswordHash implements IPasswordHash {
  async hash(password: string): Promise<string> {
    throw new Error("PASSWORD_HASH.METHOD_NOT_IMPLEMENTED");
  }

  async compare(password: string, hashedPassword: string): Promise<boolean> {
    throw new Error("PASSWORD_HASH.METHOD_NOT_IMPLEMENTED");
  }

  async compareNewPasswordWithOldPassword(
    newPassword: string,
    oldPassword: string
  ): Promise<boolean> {
    throw new Error("PASSWORD_HASH.METHOD_NOT_IMPLEMENTED");
  }
}
