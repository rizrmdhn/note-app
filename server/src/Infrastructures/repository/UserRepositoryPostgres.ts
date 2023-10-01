import InvariantError from "@/Commons/Exceptions/InvariantError";
import AuthenticationError from "@/Commons/Exceptions/AuthenticationError";
import RegisteredUser from "@/Domains/users/entities/RegisteredUser";
import UserRepository from "@/Domains/users/UserRepository";
import {
  IGetUser,
  IRegisterUser,
  IRegisteredUser,
  IUpdatePassword,
} from "@/types/users";
import { TPool } from "@/types/pool";
import { TNanoId } from "@/types/nanoid";
import AuthorizationError from "@/Commons/Exceptions/AuthorizationError";

export default class UserRepositoryPostgres extends UserRepository {
  _pool: TPool;
  _idGenerator: TNanoId;

  constructor(pool: TPool, idGenerator: TNanoId) {
    super();
    this._pool = pool;
    this._idGenerator = idGenerator;
  }

  async addUser(payload: IRegisterUser): Promise<IRegisteredUser> {
    const { username, password, email, fullname } = payload;

    const id = `user-${this._idGenerator()}`;
    const query = {
      text: "INSERT INTO users VALUES($1, $2, $3, $4, $5) RETURNING id, username, email, fullname",
      values: [id, username, password, fullname, email],
    };

    const result = await this._pool.query(query);

    return new RegisteredUser({
      ...result.rows[0],
    });
  }

  async getUserByUsername(username: string): Promise<IGetUser> {
    const query = {
      text: "SELECT id, username, email, fullname FROM users WHERE username = $1",
      values: [username],
    };

    const result = await this._pool.query(query);

    if (!result.rowCount) {
      throw new InvariantError("User tidak ditemukan");
    }

    return result.rows[0];
  }

  async getUserById(id: string): Promise<IGetUser> {
    const query = {
      text: "SELECT id, username, email, fullname FROM users WHERE id = $1",
      values: [id],
    };

    const result = await this._pool.query(query);

    if (!result.rowCount) {
      throw new InvariantError("User tidak ditemukan");
    }

    return result.rows[0];
  }

  async getOwnProfile(id: string): Promise<IGetUser> {
    const query = {
      text: "SELECT id, username, email, fullname FROM users WHERE id = $1",
      values: [id],
    };

    const result = await this._pool.query(query);

    if (!result.rowCount) {
      throw new InvariantError("User tidak ditemukan");
    }

    return result.rows[0];
  }

  async getPasswordByUsername(username: string): Promise<string> {
    const query = {
      text: "SELECT password FROM users WHERE username = $1",
      values: [username],
    };

    const result = await this._pool.query(query);

    if (!result.rowCount) {
      throw new AuthenticationError("Akun dengan username ini tidak ditemukan");
    }

    return result.rows[0].password;
  }

  async getPasswordByEmail(email: string): Promise<string> {
    const query = {
      text: "SELECT password FROM users WHERE email = $1",
      values: [email],
    };

    const result = await this._pool.query(query);

    if (!result.rowCount) {
      throw new AuthenticationError("Akun dengan email ini tidak ditemukan");
    }

    return result.rows[0].password;
  }

  async getPasswordById(id: string): Promise<string> {
    const query = {
      text: "SELECT password FROM users WHERE id = $1",
      values: [id],
    };

    const result = await this._pool.query(query);

    if (!result.rowCount) {
      throw new AuthorizationError("Anda tidak berhak mengakses resource ini");
    }

    return result.rows[0].password;
  }

  async getIdByUsername(username: string): Promise<string> {
    const query = {
      text: "SELECT id FROM users WHERE username = $1",
      values: [username],
    };

    const result = await this._pool.query(query);

    if (!result.rowCount) {
      throw new InvariantError("User tidak ditemukan");
    }

    return result.rows[0].id;
  }

  async getIdByEmail(email: string): Promise<string> {
    const query = {
      text: "SELECT id FROM users WHERE email = $1",
      values: [email],
    };

    const result = await this._pool.query(query);

    if (!result.rowCount) {
      throw new InvariantError("User tidak ditemukan");
    }

    return result.rows[0].id;
  }

  async updateFullname(payload: IGetUser): Promise<void> {
    const { id, fullname } = payload;

    const query = {
      text: "UPDATE users SET fullname = $1 WHERE id = $2",
      values: [fullname, id],
    };

    await this._pool.query(query);
  }

  async updatePassword(payload: IUpdatePassword): Promise<void> {
    const { id, password } = payload;

    const query = {
      text: "UPDATE users SET password = $1 WHERE id = $2",
      values: [password, id],
    };

    await this._pool.query(query);
  }

  async checkAvailabilityUsername(username: string): Promise<boolean> {
    const query = {
      text: "SELECT username FROM users WHERE username = $1",
      values: [username],
    };

    const result = await this._pool.query(query);

    if (result.rowCount) {
      throw new InvariantError("Username sudah digunakan");
    }

    return true;
  }

  async checkAvailabilityEmail(email: string): Promise<boolean> {
    const query = {
      text: "SELECT email FROM users WHERE email = $1",
      values: [email],
    };

    const result = await this._pool.query(query);

    if (result.rowCount) {
      throw new InvariantError("Email sudah digunakan");
    }

    return true;
  }

  async checkAvailabilityUserById(id: string): Promise<boolean> {
    const query = {
      text: "SELECT id FROM users WHERE id = $1",
      values: [id],
    };

    const result = await this._pool.query(query);

    if (!result.rowCount) {
      throw new InvariantError("User tidak ditemukan");
    }

    return true;
  }

  async verifyUserCredential(payload: IRegisterUser): Promise<string> {
    const { username, password } = payload;

    const query = {
      text: "SELECT id FROM users WHERE username = $1 AND password = $2",
      values: [username, password],
    };

    const result = await this._pool.query(query);

    if (!result.rowCount) {
      throw new AuthenticationError("Kredensial yang Anda berikan salah");
    }

    return result.rows[0].id;
  }
}
