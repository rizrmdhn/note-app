import bcrypt from "bcrypt";

export interface IPasswordHash {
  hash(password: string): Promise<string>;
  compare(password: string, hashedPassword: string): Promise<boolean>;
  compareNewPasswordWithOldPassword(
    newPassword: string,
    oldPassword: string
  ): Promise<boolean>;
}

export type IBcrypt = typeof bcrypt;

export interface IBcryptPasswordHash {
  hash(password: string): Promise<string>;
  compare(password: string, hashedPassword: string): Promise<boolean>;
  compareNewPasswordWithOldPassword(
    newPassword: string,
    oldPassword: string
  ): Promise<boolean>;
}
