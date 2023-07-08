import { createPool } from "mysql2/promise";

const pool = createPool({
  //conexión con BD Planetscale
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  port: 3306,
  database: "usuariosfotodb",
  ssl: {
    rejectUnauthorized: false,
  },
});

export { pool };
