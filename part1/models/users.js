const Joi = require("joi");

function validateTreasure(treasure) {
  const schema = {
    name: Joi.number()
      .min(0)
      .max(90)
      .required(),
    age: Joi.number()
      .min(-180)
      .max(180)
      .required(),
    password: Joi.number()
      .valid([1, 10])
      .required(),
    email: Joi.number()
      .integer()
      .min(10)
      .max(30)
  };

  return Joi.validate(treasure, schema);
}

module.exports.validate = validateTreasure;
