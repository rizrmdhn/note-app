/* istanbul ignore file */
import { Pool } from "pg";
import type { PoolConfig } from "pg";

const testConfig: PoolConfig = {
  host: process.env.PGHOST_TEST,
  port: Number(process.env.PGPORT_TEST),
  user: process.env.PGUSER_TEST,
  password: process.env.PGPASSWORD_TEST,
  database: process.env.PGDATABASE_TEST,
};

const pool =
  process.env.NODE_ENV === "test" ? new Pool(testConfig) : new Pool();

export default pool;