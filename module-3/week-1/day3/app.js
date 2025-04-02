const express = require("express");
const app = express();
const morgan = require("morgan");
//this line invokes the index file from the DB folder and connects to the database for us
require("./db/index");

//we need our model to CRUD a pet
const PetModel = require("./models/pet.model");
const UserModel = require("./models/user.model");
//we need our middlewares
app.use(morgan("dev"));
app.use(express.json());

app.post("/create-a-pet", async (req, res) => {
  //this is where we will create a pet
  //this is with the .then and .catch method
  PetModel.create(req.body)
    .then((createdPet) => {
      console.log("nice work", createdPet);
      res.status(201).json(createdPet);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ errorMessage: "Problem creating your pet" });
    });

  //************async and await ************/
  //     try {
  //       const responseFromDB = await PetModel.create(req.body);
  //       console.log("you created a pet! Nice work!", responseFromDB);
  //       res
  //         .status(201)
  //         .json({ message: "pet successfully created", pet: responseFromDB });
  //     } catch (error) {
  //   res.status(500).json({ errorMessage: "Problem creating your pet" });
  //       console.log(error);
  //     }
});

//  GET route to get all of the pets in the DB
app.get("/pets", (req, res) => {
  PetModel.find()
    .then((allOfPets) => {
      console.log("here are the pets:", allOfPets);
      res.status(200).json(allOfPets);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ errorMessage: "trouble finding the pets" });
    });
});
// GET find one specific pet
app.get("/pets/:petId", (req, res) => {
  //destructur the params
  const { petId } = req.params;
  PetModel.findById(petId)
    .populate("owner")
    .then((onePet) => {
      console.log("here is one pet:", onePet);
      res.status(200).json(onePet);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ errorMessage: "trouble finding the pets" });
    });
});

//delete route to delete one specific pet
app.delete("/pets/:petId", (req, res) => {
  PetModel.findByIdAndDelete(req.params.petId)
    .then((deletedPet) => {
      console.log("here is the deleted pet:", deletedPet);
      res.status(204).json(deletedPet);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ errorMessage: "trouble deleting the pet" });
    });
});

//Update route to change pet details
app.patch("/pets/update/:petId", async (req, res) => {
  try {
    const updatedPet = await PetModel.findByIdAndUpdate(
      req.params.petId,
      req.body,
      //with the update you need to say that you want the new info
      { new: true }
    );
    console.log("here is the updated pet:", updatedPet);
    res.status(200).json(updatedPet);
  } catch (err) {
    console.log(err);
    res.status(500).json({ errorMessage: "trouble deleting the pet" });
  }
});

//PUT example replaces everything in the DB with the req.body
app.put("/pets/update/:petId", async (req, res) => {
  try {
    const updatedPet = await PetModel.findOneAndReplace(
      { _id: req.params.petId },
      req.body
    );
    console.log("here is the updated pet:", updatedPet);
    res.status(200).json(updatedPet);
  } catch (err) {
    console.log(err);
    res.status(500).json({ errorMessage: "trouble deleting the pet" });
  }
});

//*******************User routes **************/
app.post("/create-a-user", async (req, res) => {
  try {
    const createdUser = await UserModel.create(req.body);
    console.log("here is the created user:", createdUser);
    res.status(201).json(createdUser);
  } catch (err) {
    console.log(err);
    res.status(500).json({ errorMessage: "trouble creating a user" });
  }
});
//find a specific user
app.get("/user/:userId", async (req, res) => {
  try {
    const foundUser = await UserModel.findById(req.params.userId).populate(
      "pets"
    );
    res.status(200).json(foundUser);
  } catch (err) {
    console.log(err);
    res.status(500).json({ errorMessage: "trouble finding a user" });
  }
});
//start server on port 5005
app.listen(5005, () => console.log("server running on port 5005"));
