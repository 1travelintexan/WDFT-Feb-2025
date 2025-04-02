const { Schema, model } = require("mongoose");

const userSchema = new Schema({
  username: String,
  email: String,
  password: String,
  pets: {
    type: [Schema.Types.ObjectId],
    ref: "pet",
  },
});

const UserModel = model("user", userSchema);
module.exports = UserModel;
