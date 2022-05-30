var express = require("express");
var router = express.Router();
const { signout, signup } = require("../controllers/auth.js");

router.post("/signup", signup);
router.get("/signout", signout); //get:- Getting from Database ,post:- Putting to DB ,delete:- Deleting ,put:- Update in DB

module.exports = router;
