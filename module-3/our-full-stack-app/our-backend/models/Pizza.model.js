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
  pizzaImage: {
    type: String,
    default:
      "https://plus.unsplash.com/premium_photo-1724255994673-c46643147d35?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
});

//after you create the shape the create the model
const PizzaModel = model("pizza", pizzaSchema);
module.exports = PizzaModel;
