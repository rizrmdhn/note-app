import InvariantError from "./InvariantError";

interface Directories {
  [key: string]: InvariantError;
}

const DomainErrorTranslator = {
  _directories: {
    "GET_USER.NOT_CONTAIN_NEEDED_PROPERTY": new InvariantError(
      "tidak dapat membuat user baru karena properti yang dibutuhkan tidak ada"
    ),
    "GET_USER.NOT_MEET_DATA_TYPE_SPECIFICATION": new InvariantError(
      "tidak dapat membuat user baru karena tipe data tidak sesuai"
    ),
    "REGISTERED_USER.NOT_CONTAIN_NEEDED_PROPERTY": new InvariantError(
      "tidak dapat membuat user baru karena properti yang dibutuhkan tidak ada"
    ),
    "REGISTERED_USER.NOT_MEET_DATA_TYPE_SPECIFICATION": new InvariantError(
      "tidak dapat membuat user baru karena tipe data tidak sesuai"
    ),
    "REGISTER_USER.NOT_CONTAIN_NEEDED_PROPERTY": new InvariantError(
      "tidak dapat membuat user baru karena properti yang dibutuhkan tidak ada"
    ),
    "REGISTER_USER.NOT_MEET_DATA_TYPE_SPECIFICATION": new InvariantError(
      "tidak dapat membuat user baru karena tipe data tidak sesuai"
    ),
    "REGISTER_USER.USERNAME_EMAIL_LIMIT_CHAR": new InvariantError(
      "tidak dapat membuat user baru karena karakter username dan email melebihi batas limit"
    ),
    "REGISTER_USER.USERNAME_CONTAIN_RESTRICTED_CHARACTER": new InvariantError(
      "tidak dapat membuat user baru karena username mengandung karakter terlarang"
    ),
    "REGISTER_USER.PASSWORD_LIMIT_CHAR": new InvariantError(
      "tidak dapat membuat user baru karena karakter password kurang dari 8"
    ),
    "UPDATE_FULLNAME.NOT_CONTAIN_NEEDED_PROPERTY": new InvariantError(
      "tidak dapat memperbarui user karena properti yang dibutuhkan tidak ada"
    ),
    "UPDATE_FULLNAME.NOT_MEET_DATA_TYPE_SPECIFICATION": new InvariantError(
      "tidak dapat memperbarui user karena tipe data tidak sesuai"
    ),
    "UPDATE_PASSWORD.NOT_CONTAIN_NEEDED_PROPERTY": new InvariantError(
      "tidak dapat memperbarui user karena properti yang dibutuhkan tidak ada"
    ),
    "UPDATE_PASSWORD.NOT_MEET_DATA_TYPE_SPECIFICATION": new InvariantError(
      "tidak dapat memperbarui user karena tipe data tidak sesuai"
    ),
    "UPDATE_PASSWORD.PASSWORD_NOT_MATCH": new InvariantError(
      "tidak dapat memperbarui user karena password tidak sesuai"
    ),
    "USER_LOGIN.NOT_CONTAIN_USERNAME_OR_EMAIL": new InvariantError(
      "harus mengirimkan username atau email"
    ),
    "USER_LOGIN.NOT_CONTAIN_PASSWORD": new InvariantError(
      "harus mengirimkan password"
    ),
    "USER_LOGIN.NOT_MEET_DATA_TYPE_SPECIFICATION": new InvariantError(
      "username atau email dan password harus string"
    ),
    "USER_LOGIN.EMAIL_OR_USERNAME_NOT_FOUND": new InvariantError(
      "username atau email tidak ditemukan"
    ),
    "USER_LOGIN.PASSWORD_NOT_MATCH": new InvariantError(
      "password yang anda masukkan salah"
    ),
    "USER_LOGIN.EMAIL_OR_USERNAME_NOT_MEET_DATA_TYPE_SPECIFICATION":
      new InvariantError("username atau email harus string"),
    "USER_LOGIN.PASSWORD_NOT_MEET_DATA_TYPE_SPECIFICATION": new InvariantError(
      "password harus string"
    ),
  } as Directories, // add type annotation
  translate(error: Error): InvariantError {
    return DomainErrorTranslator._directories[error.message] || error;
  },
};

export default DomainErrorTranslator;
