const User = require("../models/user");
const { check, validationResult } = require("express-validator");

// exports.signup = (req, res) => {
//   console.log("REQ BODY", req.body);
//   res.json({
//     message: "Signup Route Works !",
//   });
// };

exports.signup = (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({
      error: errors.array()[0].msg,
    });
  }
  const user = new User(req.body);
  user.save((err, user) => {
    if (err) {
      return res.status(400).json({
        err: "Not able to save in DB", //It will come if required fields are not Given
      });
    }
    // res.json(user);//Iw will Show all the Fields ...
    res.json({
      name: user.name,
      email: user.email,
      id: user._id,
    });
  });
};

exports.signout = (req, res) => {
  res.json({
    message: "User Signout",
  });
};
