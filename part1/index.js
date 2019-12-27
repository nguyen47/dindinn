const mysql = require("mysql");
const morgan = require("morgan");
const helmet = require("helmet");
const express = require("express");
const treasures = require("./routes/treasures");
const app = express();

const connection = mysql.createConnection({
  host: "localhost",
  user: "me",
  password: "secret",
  database: "my_db"
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(helmet());
app.use(morgan("tiny"));
app.use("/api/treasures", treasures);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port} ...`));
