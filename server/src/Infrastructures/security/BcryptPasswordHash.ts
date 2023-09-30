import { IBcrypt, IBcryptPasswordHash } from "@/types/hash";
import PasswordHash from "@/Applications/security/PasswordHash";
import AuthenticationError from "@/Commons/Exceptions/AuthenticationError";
import InvariantError from "@/Commons/Exceptions/InvariantError";

export default class BcryptPasswordHash
  extends PasswordHash
  implements IBcryptPasswordHash
{
  bcrypt: IBcrypt;
  saltRound: number;

  constructor(bcrypt: IBcrypt, saltRound = 10) {
    super();

    this.bcrypt = bcrypt;
    this.saltRound = saltRound;
  }

  async hash(password: string): Promise<string> {
    return this.bcrypt.hash(password, this.saltRound);
  }

  async compare(password: string, hashedPassword: string): Promise<boolean> {
    const result = await this.bcrypt.compare(password, hashedPassword);

    if (!result) {
      throw new AuthenticationError("Kredensial yang Anda masukkan salah");
    }

    return result;
  }

  async compareNewPasswordWithOldPassword(
    newPassword: string,
    oldPassword: string
  ): Promise<boolean> {
    const result = await this.bcrypt.compare(newPassword, oldPassword);

    if (result) {
      throw new InvariantError(
        "password baru tidak boleh sama dengan password lama"
      );
    }

    return result;
  }
}
