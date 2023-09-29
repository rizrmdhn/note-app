// Domains Entities Types for Users

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
  updateFullname(payload: IUpdateFullname): Promise<void>;
  updatePassword(payload: IUpdatePassword): Promise<void>;
  checkAvailabilityUsername(username: string): Promise<boolean>;
  checkAvailabilityEmail(email: string): Promise<boolean>;
  checkAvailabilityUserById(id: string): Promise<boolean>;
  verifyUserCredential(payload: IUserLogin): Promise<string>;
}
