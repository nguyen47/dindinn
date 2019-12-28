const config = require("config");
const mysql = require("mysql");
const morgan = require("morgan");
const helmet = require("helmet");
const express = require("express");
const treasures = require("./routes/treasures");
const users = require("./routes/users");
const auth = require("./routes/auth");
const app = express();

if (!config.get("JWTPrivateKey")) {
  console.error("FATAL ERROR: JWTPrivateKey is not defined");
  process.exit(1);
}

const database = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "1",
  database: "dindinn"
});

// connect to database
database.connect(err => {
  if (err) {
    throw err;
  }
  console.log("Connected to database");
});
global.database = database;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(helmet());
// app.use(morgan("tiny"));
app.use("/api/treasures", treasures);
app.use("/api/users", users);
app.use("/api/auth", auth);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port} ...`));
