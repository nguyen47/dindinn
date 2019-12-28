const _ = require("lodash");
const { validate } = require("../models/users");
const express = require("express");
const router = express.Router();

router.post("/", (req, res) => {
  console.log(req.body.email);
  // const { error } = validate(req.body);
  // if (error) {
  //   res.status(400).send(error.details[0].message);
  //   return;
  // }
  const query = `SELECT * FROM users WHERE email = ${req.body.email}`;
  database.query(query, (err, results) => {
    console.log(results);
  });
});

module.exports = router;
