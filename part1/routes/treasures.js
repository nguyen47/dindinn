const _ = require("lodash");
const Joi = require("joi");
const express = require("express");
const router = express.Router();

router.post("/find", (req, res) => {
  const { error } = validateTreasure(req.body);
  if (error) {
    res.status(400).send(error.details[0].message);
    return;
  }
  // get all distance from treasures table
  let query =
    "SELECT id, latitude, longtitude, Name, amt FROM treasures T1 INNER JOIN money_values T2 ON T1.id = T2.treasure_id";
  database.query(query, async (err, results) => {
    if (err) {
      console.log(`Error: ${err}`);
    }
    // calculate each distance.
    const treasures = [];
    results.forEach(result => {
      const distance = getDistance(
        req.body.lat,
        req.body.long,
        result.latitude,
        result.longtitude
      );
      result.distance = distance;
      if (distance < req.body.distance) {
        treasures.push(result);
      }
    });
    if (req.body.prize) {
      const filterByPrice = treasures.filter(treasure => {
        return treasure.amt > req.body.prize;
      });
      res.send(filterByPrice);
    } else {
      res.send(treasures);
    }
  });
});

function validateTreasure(treasure) {
  const schema = {
    lat: Joi.number().required(),
    long: Joi.number().required(),
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

// calculate distance between two points
function getDistance(lat1, lon1, lat2, lon2) {
  var R = 6371; // km
  var dLat = toRad(lat2 - lat1);
  var dLon = toRad(lon2 - lon1);
  var lat1 = toRad(lat1);
  var lat2 = toRad(lat2);

  var a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.sin(dLon / 2) * Math.sin(dLon / 2) * Math.cos(lat1) * Math.cos(lat2);
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  var d = R * c;
  return d;
}

// Converts numeric degrees to radians
function toRad(Value) {
  return (Value * Math.PI) / 180;
}

function mergeNames(arr) {
  return _.chain(arr)
    .groupBy("id")
    .mapValues(function(v) {
      return _.chain(v)
        .pluck("amt")
        .flattenDeep();
    })
    .value();
}

module.exports = router;
