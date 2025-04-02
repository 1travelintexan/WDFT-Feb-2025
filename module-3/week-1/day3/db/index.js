//make a variable for mongoose
const mongoose = require("mongoose");

//here is we connect to the db
mongoose
  .connect("mongodb://127.0.0.1:27017/our-pet-db")
  .then(() => {
    console.log("connected to the DB, nice work");
  })
  .catch((err) => console.log(err));
