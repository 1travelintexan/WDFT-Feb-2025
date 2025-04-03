const { Schema, model } = require("mongoose");

const recipeSchema = new Schema({
  title: {
    type: String,
    required: true,
    unique: true,
  },
  instructions: {
    type: String,
    required: true,
  },
  level: {
    type: String,
    enum: ["Easy Peasy", "Amateur Chef", "Ultra Pro Chef"],
  },
  image: {
    type: String,
    default: "https://images.media-allrecipes.com/images/75131.jpg",
  },
  ingredients: {
    type: [String],
  },
  duration: {
    type: Number,
    min: 0,
  },
  isArchived: {
    type: Boolean,
    default: false,
  },
  created: {
    type: Date,
    default: Date.now,
  },
});

const RecipeModel = model("recipe", recipeSchema);
module.exports = RecipeModel;
