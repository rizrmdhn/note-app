// Domains Entities Types for Users

import { IAuthenticationRepository, IAuthenticationTokenManager } from "./auth";
import { IPasswordHash } from "./hash";

export interface IGetUser {
  id: string;
  username: string;
  email: string;
  fullname: string;
}

export interface IRegisterUser {
  username: string;
  password: string;
  email: string;
  fullname: string;
}

export interface IRegisteredUser {
  id: string;
  username: string;
  email: string;
  fullname: string;
}

export interface IUpdateFullname {
  id: string;
  fullname: string;
}

export interface IUpdatePassword {
  id: string;
  password: string;
  confirmPassword: string;
}

export interface IUserLogin {
  username?: string;
  email?: string;
  password: string;
}

// Domains Repositories Types for Users

export interface IUserRepository {
  addUser(payload: IRegisterUser): Promise<string>;
  getUserByUsername(username: string): Promise<IGetUser>;
  getUserById(id: string): Promise<IGetUser>;
  getOwnProfile(id: string): Promise<IGetUser>;
  getPasswordByUsername(username: string): Promise<string>;
  getPasswordByEmail(email: string): Promise<string>;
  getPasswordById(id: string): Promise<string>;
  getIdByUsername(username: string): Promise<string>;
  getIdByEmail(email: string): Promise<string>;
  updateFullname(payload: IUpdateFullname): Promise<void>;
  updatePassword(payload: IUpdatePassword): Promise<void>;
  checkAvailabilityUsername(username: string): Promise<boolean>;
  checkAvailabilityEmail(email: string): Promise<boolean>;
  checkAvailabilityUserById(id: string): Promise<boolean>;
  verifyUserCredential(payload: IUserLogin): Promise<string>;
}

// Applications Types for Users

export type TUserRepository = IUserRepository;

export type TUserLoginUseCase = {
  userRepository: TUserRepository;
  authenticationRepository: IAuthenticationRepository;
  authenticationTokenManager: IAuthenticationTokenManager;
  passwordHash: IPasswordHash;
};
export interface IUserLoginUseCase {
  execute(payload: IUserLogin): Promise<object>;
}
