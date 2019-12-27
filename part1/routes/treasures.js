const Joi = require("joi");
const express = require("express");
const router = express.Router();

const locations = [];

router.post("/find", (req, res) => {
  const { error } = validateTreasure(req.body);
  if (error) {
    res.status(400).send(error.details[0].message);
    return;
  }
  const location = {
    lat: req.body.lat,
    long: req.body.long,
    distance: req.body.distance
  };
  locations.push(location);
  res.send(location);
});

function validateTreasure(treasure) {
  const schema = {
    lat: Joi.number().required(),
    long: Joi.number().required(),
    distance: Joi.number().required() // Validate again
  };

  return Joi.validate(treasure, schema);
}

module.exports = router;
