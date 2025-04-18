// IMPORT PACKAGES
// Here you should import the required packages for your Express app: `express` and `morgan`
const express = require("express");
const morgan = require("morgan");
const articles = require("./data/articles.json");
const app = express();
// CREATE EXPRESS APP
// Here you should create your Express app:

// MIDDLEWARE
// Here you should set up the required middleware:
// - `express.static()` to serve static files from the `public` folder
// - `express.json()` to parse incoming requests with JSON payloads
// - `morgan` logger to log all incoming requests
app.use(express.static("public"));
app.use(morgan("dev"));
app.use(express.json());

// ROUTES
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/home.html");
});
app.get("/blog", (req, res) => {
  res.sendFile(__dirname + "/views/blog.html");
});

//this will be our json route
app.get("/api/articles", (req, res) => {
  res.json(articles);
});
// app.get("*", (req, res) => {
//   res.sendFile(__dirname + "/views/not-found.html");
// });

app.use((req, res) => {
  res.status(404).sendFile(__dirname + "/views/not-found.html");
});
// START THE SERVER
// Make your Express server listen on port 5005:
app.listen(5005, () => console.log("Server is running"));
