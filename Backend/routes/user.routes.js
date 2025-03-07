const express = require("express");
const { body } = require("express-validator");
const router = express.Router();
const userController = require("../controllers/user.controller");
const middlewares = require("../middlewares/auth.middleware");

router.post(
  "/register",
  [
    body("email").isEmail().withMessage("Invalid email"),
    body("fullname.firstname")
      .isLength({ min: 3 })
      .withMessage("Firstname atleast 3 character long"),
    body("password")
      .isLength({ min: 6 })
      .withMessage("Password much be 6 character long"),
  ],
  userController.registerUser
);

router.post(
  "/login",
  [
    body("email").isEmail().withMessage("Invalid email"),
    body("password")
      .isLength({ min: 6 })
      .withMessage("Password much be 6 character long"),
  ],
  userController.loginUser
);

router.get("/profile", middlewares.authUser, userController.getUserProfile);

router.get("/logout", userController.logoutUser);

module.exports = router;

