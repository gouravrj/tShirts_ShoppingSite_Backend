require("dotenv").config(); //reasons for saying this file bcoz .env file dont
//get uploaded on github pages

const express = require("express");
const mongoose = require("mongoose");
const app = express();
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const authRoutes = require("./routes/auth.js");

//DB Connection
mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true, //compulsoryyyyyy
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => {
    console.log("DB Connected ... ");
  });

//Middlewares
app.use(bodyParser.json()); //These all are Middleware
app.use(cookieParser());
app.use(cors());

//My Routes
app.use("/api", authRoutes);

//My PORT
// const port = 8000;
const port = process.env.PORT || 3000; //Standard Way

//Starting a Server
app.listen(port, () => {
  console.log(`App is running at ${port}`);
});
