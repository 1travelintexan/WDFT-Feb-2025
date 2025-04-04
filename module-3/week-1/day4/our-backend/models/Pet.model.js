const { Schema, model } = require("mongoose");

const petSchema = new Schema({
  petName: { type: String, required: true },
  owner: { type: Schema.Types.ObjectId, ref: "User", required: true },
  age: { type: Number, min: 0 },
  type: { type: String, enum: ["dog", "cat", "bird", "snake"] },
});

const PetModel = model("Pet", petSchema);
module.exports = PetModel;
