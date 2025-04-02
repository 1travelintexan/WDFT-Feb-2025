//first thing we need is Schema and model from the mongoose package
//we love destructuring
const { Schema, model } = require("mongoose");

//now we define the shape of our data
const petSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    min: 1,
  },
  petType: {
    type: String,
    enum: ["dog", "cat", "fish", "other"],
  },
  //add an owner property to the pet
  owner: {
    type: Schema.Types.ObjectId,
    ref: "user",
  },
});

//after you define the shape then you can create the model
const PetModel = model("pet", petSchema);
//we need export to use on other files
module.exports = PetModel;
