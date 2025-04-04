const { isAuthenticated } = require("../middlewares/jwt.middleware");
const PetModel = require("../models/Pet.model");

const router = require("express").Router();

router.post("/create", isAuthenticated, (req, res) => {
  PetModel.create(req.body)
    .then((createPet) => {
      res.status(201).json(createPet);
    })
    .catch(() =>
      res.status(500).json({ errorMessage: "Problem creating a pet" })
    );
});

router.get("/all-pets", (req, res) => {
  PetModel.find()
    .populate("owner")
    .then((allPets) => {
      res.status(200).json(allPets);
    })
    .catch(() =>
      res.status(500).json({ errorMessage: "Problem showing all pets" })
    );
});

//find a single pet based on the id in the URL
router.get("/one-pet/:petId", (req, res) => {
  PetModel.findById(req.params.petId)
    .then((onePet) => {
      res.status(200).json({ pet: onePet });
    })
    .catch((err) => {
      res.status(500).json({ errorMessage: "Problem showing one pet" });
    });
});

//delete a pet based on the URL
router.delete("/delete-pet/:petId", (req, res) => {
  const { petId } = req.params;
  PetModel.findByIdAndDelete(petId)
    .then((deletedPet) => {
      console.log(deletedPet);
      res.status(200).json({ message: "pet successfully deleted", deletedPet });
    })
    .catch(() => {
      res.status(500).json({ errorMessage: "Problem deleting one pet" });
    });
});

//update a pet
router.patch("/update-pet/:petId", async (req, res) => {
  try {
    const updatedPet = await PetModel.findByIdAndUpdate(
      req.params.petId,
      req.body,
      { new: true }
    );
    res.status(200).json(updatedPet);
  } catch (error) {
    res.status(500).json({ errorMessage: "Problem updating one pet" });
  }
});
module.exports = router;
