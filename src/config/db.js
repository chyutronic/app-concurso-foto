import { createPool } from "mysql2/promise";

const pool = createPool({
  host: "localhost",
  user: "root",
  password: "hijo0010",
  port: 3306,
  database: "usuariosfotodb",
});

export { pool };
