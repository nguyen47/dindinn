const auth = require("../middleware/auth");
const _ = require("lodash");
const { getDistance } = require("../ultils/geo");
const { validate } = require("../models/treasures");
const express = require("express");
const router = express.Router();

router.post("/find", auth, (req, res) => {
  const { error } = validate(req.body);
  if (error) {
    res.status(400).send(error.details[0].message);
    return;
  }
  // get all distance from treasures table
  let query =
    "SELECT id, latitude, longtitude, Name, amt FROM treasures T1 INNER JOIN money_values T2 ON T1.id = T2.treasure_id";
  database.query(query, (err, results) => {
    if (err) {
      console.error(`Error: ${err}`);
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
      // filter treasures with distance meet the requirement
      if (distance < req.body.distance) {
        treasures.push(result);
      }
    });
    if (req.body.prize) {
      // filter price
      const filterByPrice = treasures.filter(treasure => {
        return treasure.amt >= req.body.prize;
      });
      // filter price based on min value
      const result = _(filterByPrice)
        .groupBy("id")
        .map(group => _.minBy(group, "amt"))
        .value();
      res.send(result);
    } else {
      // remove duplicate
      const result = _.uniqBy(treasures, "id");
      res.send(result);
    }
  });
});

module.exports = router;
