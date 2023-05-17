import { createPool } from "mysql2/promise";

const pool = createPool({
  //conexión con BD Planetscale
  host: "aws.connect.psdb.cloud",
  user: "uvocpjt0pdi8og7m9sm5",
  password: "pscale_pw_nXzWv4921UZ5nNois2THbrxlqTgxNE01NwUXUJJwk0D",
  port: 3306,
  database: "usuariosfotodb",
  ssl: {
    rejectUnauthorized: false,
  },

  // config base de datos local
  // host: "localhost",
  // user: "root",
  // password: "hijo0010",
  // port: 3306,
  // database: "usuariosfotodb",
});

export { pool };
