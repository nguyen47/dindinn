const config = require("config");
const mysql = require("mysql");
const helmet = require("helmet");
const compression = require("compression");
const express = require("express");
const treasures = require("./routes/treasures");
const auth = require("./routes/auth");
const app = express();

if (!config.get("JWTPrivateKey")) {
  console.error("FATAL ERROR: JWTPrivateKey is not defined");
  process.exit(1);
}

const database = mysql.createConnection(config.get("db"));

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
app.use("/api/treasures", treasures);
app.use("/api/auth", auth);
app.use(helmet());
app.use(compression());
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port} ...`));
