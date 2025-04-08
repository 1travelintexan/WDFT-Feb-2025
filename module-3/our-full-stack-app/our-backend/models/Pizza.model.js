const { Schema, model } = require("mongoose");

const pizzaSchema = new Schema({
  title: {
    type: String,
    required: [true, "pizza title is required"],
    unique: true,
  },
  toppings: [String],
  size: {
    type: String,
    enum: ["small", "medium", "large", "ragnar-size"],
    required: true,
  },
  //here is where we link the pizza to the user that created it
  owner: {
    type: Schema.Types.ObjectId, //the type of the _id in the DB
    ref: "User",
    required: true,
  },
});

//after you create the shape the create the model
const PizzaModel = model("pizza", pizzaSchema);
module.exports = PizzaModel;
