const { isAuthenticated } = require("../middlewares/jwt.middleware");
const PetModel = require("../models/Pet.model");
const UserModel = require("../models/User.model");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");
const router = require("express").Router();
//post route to signup a user and create them in the DB
router.post("/signup", (req, res) => {
  //destructure username, email and password from the body
  const { username, email, password } = req.body;
  //generate the salt for the password first
  const mySalt = bcryptjs.genSaltSync(12);
  const hashedPassword = bcryptjs.hashSync(password, mySalt);
  // console.log({ mySalt, hashedPassword, password });
  const hashedUser = {
    username,
    email,
    password: hashedPassword,
  };

  UserModel.create(hashedUser)
    .then((createdUser) => {
      console.log(createdUser);
      const userInDB = createdUser;
      userInDB.password = "*****";
      res.status(201).json(userInDB);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ errorMessage: "Problem creating a user" });
    });
});

//POST route to login a user that already exists in the DB
router.post("/login", async (req, res) => {
  // try {
  //   //first we need to find the email in the DB
  //   const foundUser = await UserModel.findOne({ email: req.body.email });
  //   if (foundUser) {
  //     console.log("the user was found, ", foundUser);
  //     //the user email was found... but does their password match???
  //     if (req.body.password === foundUser.password) {
  //       res.status(200).json({ message: "You are logged in now!", foundUser });
  //     } else {
  //       res
  //         .status(400)
  //         .json({ errorMessage: "Email exists but password doesn't match" });
  //     }
  //   } else {
  //     res.status(400).json({ message: "Email doesn't exist" });
  //   }
  // } catch (error) {
  //   console.log(err);
  //   res.status(500).json({ errorMessage: "Problem logging in user" });
  // }

  //then and catch
  UserModel.findOne({ email: req.body.email })
    .then((foundUser) => {
      if (foundUser) {
        console.log("the user was found, ", foundUser);
        //the user email was found... but does their password match???
        const doesPasswordMatch = bcryptjs.compareSync(
          req.body.password,
          foundUser.password
        );
        //if the password matches and the email exist then we give the user a token
        if (doesPasswordMatch) {
          const theData = { _id: foundUser._id, username: foundUser.username };
          const authToken = jwt.sign(theData, process.env.TOKEN_SECRET, {
            algorithm: "HS256",
            expiresIn: "24h",
          });

          res
            .status(200)
            .json({ message: "You are logged in now!", authToken });
        } else {
          res.status(400).json({ errorMessage: "incorrect passsword" });
        }
      } else {
        res.status(400).json({ message: "Email doesn't exist" });
      }
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ errorMessage: "Problem logging in user" });
    });
});

//delete a user and their pets
router.delete("/delete-user/:userId", async (req, res) => {
  try {
    const { userId } = req.params;
    const deletedUser = await UserModel.findByIdAndDelete(userId);
    const deletedPet = await PetModel.findOneAndDelete({ owner: userId });
    console.log({ deletedUser, deletedPet });
    res.status(200).json({ deletedPet, deletedUser });
  } catch (error) {
    res.status(500).json({ errorMessage: "Problem deleting the user" });
  }
});

//verify route to check the token
router.get("/verify", isAuthenticated, (req, res) => {
  console.log("hello from the route", req.payload);
  res
    .status(200)
    .json({ message: "You are still logged in", payload: req.payload });
});

module.exports = router;
