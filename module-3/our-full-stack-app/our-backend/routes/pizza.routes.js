const router = require("express").Router();
const PizzaModel = require("../models/Pizza.model");
const uploader = require("../middlewares/cloudinary.middleware");
//post to create a pizza
router.post("/create", uploader.single("imageUrl"), async (req, res) => {
  console.log({ body: req.body, file: req.file });

  if (!req.file) {
    PizzaModel.create(req.body)
      .then((responseFromDB) => {
        console.log("pizza created! NOM NOM", responseFromDB);
        res.status(201).json(responseFromDB);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json({ errorMessage: "Trouble creating your pizza" });
      });
  } else {
    const pizzaToCreateWithImage = {
      ...req.body,
      pizzaImage: req.file.path,
    };
    PizzaModel.create(pizzaToCreateWithImage)
      .then((responseFromDB) => {
        console.log("pizza created! NOM NOM", responseFromDB);
        res.status(201).json(responseFromDB);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json({ errorMessage: "Trouble creating your pizza" });
      });
  }
});

//route to get all pizzas
router.get("/all-pizzas", async (req, res) => {
  PizzaModel.find()
    .populate("owner")
    .then((responseFromDB) => {
      console.log("Here are all the pizzas", responseFromDB);
      res.status(200).json({
        allPizzas: responseFromDB,
        pet: "Ragnar is obviously the best",
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ errorMessage: "Trouble finding all the pizzas" });
    });
});

//route to get one pizza
router.get("/one-pizza/:pizzaId", async (req, res) => {
  try {
    const onePizzaInDB = await PizzaModel.findById(req.params.pizzaId);
    res.status(200).json(onePizzaInDB);
  } catch (err) {
    console.log(err);
    res.status(500).json({ errorMessage: "Trouble finding all the pizzas" });
  }
});

//update the pizza title
router.patch("/update-pizza/:pizzaId", (req, res) => {
  PizzaModel.findByIdAndUpdate(req.params.pizzaId, req.body, { new: true })
    .populate("owner")
    .then((updatedPizza) => {
      console.log("pizza updated", updatedPizza);
      res.status(200).json(updatedPizza);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ errorMessage: "Trouble finding all the pizzas" });
    });
});

//delete a pizza
router.delete("/delete-pizza/:pizzaId", async (req, res) => {
  const { pizzaId } = req.params;
  try {
    const deletedPizza = await PizzaModel.findByIdAndDelete(pizzaId);
    console.log("pizza deleted", deletedPizza);
    res.status(204).json({ message: "pizza deleted" });
  } catch (error) {
    console.log(err);
    res.status(500).json({ errorMessage: "Trouble deleting the pizza" });
  }
});
module.exports = router;
