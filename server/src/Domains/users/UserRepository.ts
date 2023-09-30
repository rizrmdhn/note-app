import {
  IGetUser,
  IRegisterUser,
  IRegisteredUser,
  IUpdateFullname,
  IUpdatePassword,
  IUserLogin,
  IUserRepository,
} from "@/types/users";

export default class UserRepository implements IUserRepository {
  async addUser(payload: IRegisterUser): Promise<IRegisteredUser> {
    throw new Error("USER_REPOSITORY.METHOD_NOT_IMPLEMENTED");
  }

  async getUserByUsername(username: string): Promise<IGetUser> {
    throw new Error("USER_REPOSITORY.METHOD_NOT_IMPLEMENTED");
  }

  async getUserById(id: string): Promise<IGetUser> {
    throw new Error("USER_REPOSITORY.METHOD_NOT_IMPLEMENTED");
  }

  async getOwnProfile(id: string): Promise<IGetUser> {
    throw new Error("USER_REPOSITORY.METHOD_NOT_IMPLEMENTED");
  }

  async getPasswordByUsername(username: string): Promise<string> {
    throw new Error("USER_REPOSITORY.METHOD_NOT_IMPLEMENTED");
  }

  async getPasswordByEmail(email: string): Promise<string> {
    throw new Error("USER_REPOSITORY.METHOD_NOT_IMPLEMENTED");
  }

  async getPasswordById(id: string): Promise<string> {
    throw new Error("USER_REPOSITORY.METHOD_NOT_IMPLEMENTED");
  }

  async getIdByUsername(username: string): Promise<string> {
    throw new Error("USER_REPOSITORY.METHOD_NOT_IMPLEMENTED");
  }

  async getIdByEmail(email: string): Promise<string> {
    throw new Error("USER_REPOSITORY.METHOD_NOT_IMPLEMENTED");
  }

  async updateFullname(payload: IUpdateFullname): Promise<void> {
    throw new Error("USER_REPOSITORY.METHOD_NOT_IMPLEMENTED");
  }

  async updatePassword(payload: IUpdatePassword): Promise<void> {
    throw new Error("USER_REPOSITORY.METHOD_NOT_IMPLEMENTED");
  }

  async checkAvailabilityUsername(username: string): Promise<boolean> {
    throw new Error("USER_REPOSITORY.METHOD_NOT_IMPLEMENTED");
  }

  async checkAvailabilityEmail(email: string): Promise<boolean> {
    throw new Error("USER_REPOSITORY.METHOD_NOT_IMPLEMENTED");
  }

  async checkAvailabilityUserById(id: string): Promise<boolean> {
    throw new Error("USER_REPOSITORY.METHOD_NOT_IMPLEMENTED");
  }

  async verifyUserCredential(payload: IUserLogin): Promise<string> {
    throw new Error("USER_REPOSITORY.METHOD_NOT_IMPLEMENTED");
  }
}
