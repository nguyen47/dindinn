const config = require("config");
const jwt = require("jsonwebtoken");

function auth(req, res, next) {
  const token = req.header("x-auth-token");
  if (!token) {
    return res.status(401).send("Access Denied. No Token provided");
  }
  try {
    jwt.verify(token, config.get("JWTPrivateKey"));
    next();
  } catch (error) {
    res.status(400).send("Invalid Token");
  }
}

module.exports = auth;
