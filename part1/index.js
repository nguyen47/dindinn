const mysql = require("mysql");
const morgan = require("morgan");
const helmet = require("helmet");
const express = require("express");
const treasures = require("./routes/treasures");
const app = express();

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

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port} ...`));
