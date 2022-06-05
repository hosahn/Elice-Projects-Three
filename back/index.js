import { app } from "./src/app.js";
import "./src/config/env.js";
import "./src/db/index.js";
import mysql2 from "mysql2";

const connection = mysql2.createConnection({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: "ai_project",
});

connection.connect(function (err) {
  if (err) throw err;
  console.log("connected to DB");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`정상적으로 서버를 시작하였습니다. http://localhost:${PORT}`);
});
