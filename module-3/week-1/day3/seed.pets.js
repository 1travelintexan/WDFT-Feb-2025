const PetModel = require("./models/pet.model");

const petsFromDB = [
  {
    _id: "67ed129adcd3119f2db23a32",
    name: "Ragnar",
    age: 4,
    petType: "dog",
    owner: "67ed0e9097ae3a66ed13d083",
    __v: 0,
  },
  {
    _id: "67ed1457d6a891562f7caebd",
    name: "Yuki",
    age: 1,
    petType: "dog",
    __v: 0,
  },
  {
    _id: "67ed1460d6a891562f7caebf",
    name: "Feba",
    age: 9,
    petType: "cat",
    __v: 0,
  },
];
//connect to the DB
require("./db/index");

PetModel.insertMany(petsFromDB)
  .then((allThePetsAdded) => {
    console.log("we seeded the DB!", allThePetsAdded);
  })
  .catch((err) => console.log(err));
