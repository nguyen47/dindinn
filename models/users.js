const Joi = require("joi");

function validateTreasure(treasure) {
  const schema = {
    email: Joi.string()
      .email()
      .required(),
    password: Joi.string().required()
  };

  return Joi.validate(treasure, schema);
}

module.exports.validate = validateTreasure;
