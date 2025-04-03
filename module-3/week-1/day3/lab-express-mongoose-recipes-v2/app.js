const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const RecipeModel = require("./models/Recipe.model");
const app = express();

// MIDDLEWARE
app.use(logger("dev"));
app.use(express.static("public"));
app.use(express.json());

// Iteration 1 - Connect to MongoDB
// DATABASE CONNECTION

const MONGODB_URI = "mongodb://127.0.0.1:27017/express-mongoose-recipes-dev";

mongoose
  .connect(MONGODB_URI)
  .then((x) =>
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  )
  .catch((err) => console.error("Error connecting to mongo", err));

// ROUTES
//  GET  / route - This is just an example route
app.get("/", (req, res) => {
  res.send("<h1>LAB | Express Mongoose Recipes</h1>");
});

//  Iteration 3 - Create a Recipe route
//  POST  /recipes route
app.post("/recipes", async (req, res) => {
  try {
    console.log(req.body);
    const createdRecipe = await RecipeModel.create({
      ...req.body,
      title: req.body.name,
      level: req.body.difficulty,
    });
    console.log("Recipe Created! ", createdRecipe);
    res.status(201).json(createdRecipe);
  } catch (error) {
    console.log(error);
    // if(error.message === 'Duplicate Key error')
    res.status(500).json({ errorMessage: "Problem creating the recipe" });
  }
});

//  Iteration 4 - Get All Recipes
//  GET  /recipes route
app.get("/recipes", (req, res) => {
  RecipeModel.find()
    .then((allRecipes) => {
      console.log("Recipes ", allRecipes);
      res.status(200).json(allRecipes);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ errorMessage: "Problem creating the recipe" });
    });
});
//  Iteration 5 - Get a Single Recipe
//  GET  /recipes/:id route
app.get("/recipe/:id", (req, res) => {
  RecipeModel.findById(req.params.id)
    .then((oneRecipe) => {
      console.log("Recipe ", oneRecipe);
      res.status(200).json(oneRecipe);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ errorMessage: "Problem finding the recipe" });
    });
});
//  Iteration 6 - Update a Single Recipe
//  PUT  /recipes/:id route
app.patch("/recipe/:pizzaId", (req, res) => {
  RecipeModel.findByIdAndUpdate(req.params.pizzaId, req.body, { new: true })
    .then((updatedRecipe) => {
      console.log("recipe updated", updatedRecipe);
      res.status(425).json(updatedRecipe);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ errorMessage: "Problem updating the recipe" });
    });
});
//  Iteration 7 - Delete a Single Recipe
//  DELETE  /recipes/:id route
app.delete("/recipe/:recipeId", async (req, res) => {
  //destructure the params
  const { recipeId } = req.params;
  try {
    const deletedRecipe = await RecipeModel.findByIdAndDelete(recipeId);
    console.log("recipe deleted", deletedRecipe);
    res.status(200).json(deletedRecipe);
  } catch (err) {
    console.log(err);
    res.status(500).json({ errorMessage: "Problem deleting the recipe" });
  }
});
// Start the server
app.listen(3000, () => console.log("My first app listening on port 3000!"));

//❗️DO NOT REMOVE THE BELOW CODE
module.exports = app;
