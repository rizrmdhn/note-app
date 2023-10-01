/* istanbul ignore file */
import pool from "@/Infrastructures/database/postgres/pool";

const UsersTableTestHelper = {
  async addUser({
    id = "user-123",
    email = "dicoding@mail.com",
    username = "dicoding",
    fullname = "Dicoding Indonesia",
    password = "super_password",
  }: {
    id?: string;
    email?: string;
    username?: string;
    fullname?: string;
    password?: string;
  }) {
    const query = {
      text: "INSERT INTO users VALUES($1, $2, $3, $4, $5)",
      values: [id, username, password, fullname, email],
    };

    await pool.query(query);
  },

  async findUserById(id: string) {
    const query = {
      text: "SELECT * FROM users WHERE id = $1",
      values: [id],
    };

    const result = await pool.query(query);

    return result.rows;
  },

  async cleanTable() {
    await pool.query("DELETE FROM users WHERE 1=1");
  },
};

export default UsersTableTestHelper;
