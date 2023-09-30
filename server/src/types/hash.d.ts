export interface IPasswordHash {
  hash(password: string): Promise<string>;
  compare(password: string, hashedPassword: string): Promise<boolean>;
  compareNewPasswordWithOldPassword(
    newPassword: string,
    oldPassword: string
  ): Promise<boolean>;
}
