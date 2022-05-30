require("dotenv").config(); //reasons for saying this file bcoz .env file dont
                            //get uploaded on github pages

const express = require("express");
const mongoose = require("mongoose");
const app = express();

mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true, //compulsoryyyyyy
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => {
    console.log("DB Connected ... ");
  });

// const port = 8000;
const port = process.env.PORT || 3000; //Standard Way

app.listen(port, () => {
  console.log(`App is running at ${port}`);
});
