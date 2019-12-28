const Joi = require("joi");

function validateTreasure(treasure) {
  const schema = {
    lat: Joi.number()
      .min(0)
      .max(90)
      .required(),
    long: Joi.number()
      .min(-180)
      .max(180)
      .required(),
    distance: Joi.number()
      .valid([1, 10])
      .required(),
    prize: Joi.number()
      .integer()
      .min(10)
      .max(30)
  };

  return Joi.validate(treasure, schema);
}

module.exports.validate = validateTreasure;
