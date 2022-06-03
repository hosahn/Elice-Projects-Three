import { app } from "./src/app.js";
import "./src/config/env.js";
import "./src/db/index.js";
import mysql from "mysql";

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "final_project",
});

connection.connect(function (err) {
  if (err) throw err;
  console.log("connected to DB");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`정상적으로 서버를 시작하였습니다. http://localhost:${PORT}`);
});
