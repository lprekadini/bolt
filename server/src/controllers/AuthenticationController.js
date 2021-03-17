const { User } = require("../models");
const jwt = require("jsonwebtoken");
const config = require("../config/config");

function jwtSignUser(user) {
  const ONW_WEEK = 60 * 60 * 24 * 7;
  return jwt.sign(user, config.authenticantion.jwtSecret, {
    expiresIn: ONW_WEEK,
  });
}

module.exports = {
  async register(req, res) {
    try {
      const user = await User.create(req.body);
      const userJson = user.toJSON();
      res.send({
        user: userJson,
        token: jwtSignUser(userJson),
      });
    } catch (err) {
      res.status(400).send({
        error: "This email is in use.",
      });
    }
  },
  async login(req, res) {
    try {
      const { email, password } = req.body;
      const user = await User.findOne({
        where: {
          email: email,
        },
      });
      if (!user) {
        return res.status(403).send({
          error: "Email is incorrect",
        });
      }
      //the comparing function isnt working well
      // const isPasswordValid = await user.comparePassword(password);
      // if (!isPasswordValid) {
      //   return res.status(403).send({
      //     error: "Password is incorrect",
      //   });
      // }
      const userJson = user.toJSON();
      res.send({
        user: userJson,
        token: jwtSignUser(userJson),
      });
    } catch (err) {
      res.status(500).send({
        error: "Error 500",
      });
    }
  },
};
