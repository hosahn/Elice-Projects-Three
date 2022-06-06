import { default as mysql } from "mysql2/promise";
import "./src/config/env.js";

const pool = mysql.createPool({
  host: process.env.MYSQL_HOST,
  port: 3306,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: "ai_project",
});

export { pool };
