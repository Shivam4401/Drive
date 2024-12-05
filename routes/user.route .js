const express = require("express");

const router = express.Router();

const User = require("./../models/user");

const { body, validationResult } = require("express-validator");

router.get("/", (req, res) => {
  res.render("register");
});

router.post(
  "/",
  body("email").trim().isEmail().isLength({ min: 13 }),
  body("password").trim().isLength({ min: 5 }),
  body("username").trim().isLength({ min: 3 }),

  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.status(400).json({
        errors: errors.array(),
        message: "Invalid data",
      });
    }
    res.send(errors);
  }
);

router.get("/", (req, res) => {
  res.render("login");
});
module.exports = router;
