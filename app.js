const express = require("express");
const mongoose = require("mongoose");
const app = express();

mongoose
  .connect('mongodb://localhost:27017/tshirt', {
    useNewUrlParser: true,             //compulsoryyyyyy
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => {
    console.log("DB Connected ... ");
  });

// const port = 8000;
const port = process.env.PORT || 3000  //Standard Way

app.listen(port, () => {
  console.log(`App is running at ${port}`);
});
