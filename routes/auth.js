var express = require("express");
var router = express.Router();
const { check, validationResult } = require("express-validator");
const { signout, signup } = require("../controllers/auth.js");

router.post(
  "/signup",
  [
    check("name", "Name Should be at least 3 charecters").isLength({ min: 5 }),
    check("email", "email is Required").isEmail(),
    check("password", "Password Should be atleast 3 char").isLength({ min: 3 }),
  ],
  signup
);
router.get("/signout", signout); //get:- Getting from Database ,post:- Putting to DB ,delete:- Deleting ,put:- Update in DB

module.exports = router;
