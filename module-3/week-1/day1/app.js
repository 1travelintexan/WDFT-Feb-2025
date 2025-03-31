//this is the file that runs the server
const express = require("express");
const morgan = require("morgan");
//you cannot import this way on the backend
// import {express} from 'express'
const PORT = 5005;
//after importing the express package, we create a variable that equals a new instance of the package
const app = express();

//variable with all the pets
const arrayOfPets = [
  {
    name: "Ragnar",
    age: 4,
    type: "Dog",
  },
  {
    name: "Yuki",
    age: 1,
    type: "Dog",
  },
  // {
  //   name: "Feba",
  //   age: 9,
  //   type: "Cat",
  // },
];
//Here are the middlewares
//morgan just logs to the console all of the requests
app.use(morgan("dev"));
//express.json allows our server to receive json POST and PATCH request
app.use(express.json());
//express.static tells our server where to find our static files (css or assets)
app.use(express.static("public"));

//start creating routes here
//GET route for the / page
//.get( ) needs at least two arguments.
//first is the path
//second is the callback funtion that is called when the path and the verb match
app.get("/", (req, res) => {
  // const ourPath = __dirname;
  // console.log(ourPath);
  res.sendFile(__dirname + "/pages/homepage.html");
});
//one GET route for the about us page
app.get("/about", (req, res) => {
  res.sendFile(__dirname + "/pages/about.html");
});

//one GET route for the pets page
app.get("/pets", (req, res) => {
  res.sendFile(__dirname + "/pages/pets.html");
  // res.status(200).json({ message: "hello world" });
});

//GET route with path of pets-json that responds with json and the status of 200
//sends and object with the message of 'here are your pets' and data that equals an array of pets
app.get("/pets-json", (req, res) => {
  //inside of here we can ask the database for data or even make axios or fetch calls to APIs

  if (arrayOfPets.length > 2) {
    res.status(200).json({ message: "here are your pets", pets: arrayOfPets });
  } else {
    res.status(500).json({ errorMessage: "Not enough pets" });
  }
});

// app.get("/pets", (req, res) => {
//   console.log("made it to this pets route");
//   //every route should response with something
//   //make sure to add a status and data when you respond
//   res.status(200).json({ message: "here are the pets" });
// });

//typically at the bottom of the page, we start the server and 'listen' to a port
app.listen(PORT, () => {
  console.log("my server is running on: ", `http://localhost:${PORT}`);
});
