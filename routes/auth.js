const config = require("config");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { validate } = require("../models/users");
const express = require("express");
const router = express.Router();

router.post("/", async (req, res) => {
  const { error } = validate(req.body);
  if (error) {
    res.status(400).send(error.details[0].message);
    return;
  }

  const query = `SELECT * FROM users WHERE email = "${req.body.email}"`;

  database.query(query, (err, user) => {
    if (err) {
      console.error(`Error: ${err}`);
    }
    if (user.length === 0) {
      return res.status(400).send("Invalid email or password");
    }
    const validPassword = bcrypt.compare(req.body.password, user[0].password);
    if (!validPassword) {
      return res.status(400).send("Invalid email or password");
    }

    const token = jwt.sign({ id: user[0].id }, config.get("JWTPrivateKey"));
    res.send(token);
  });
});

module.exports = router;
