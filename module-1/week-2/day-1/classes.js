// console.log("this is a log");
// console.warn("this is a warning");
// console.error("this is an error");
// const animal = {
//   name: "Ragnar",
//   age: 4,
//   owner: "Joshua",
// };
// const animal2 = {
//   name: "buddy",
//   age: 12,
//   owner: "Joshua",
// };
//class general example
class Animal {
  //static property
  static numberOfAnimals = 0;
  constructor(petName, petAge, owner = "unknown") {
    this.name = petName;
    this.age = petAge;
    this.owner = owner;
    this.energy = 1000;
    this.toys = [];
    //this adds one animal to the count every time the constructor is called
    Animal.numberOfAnimals++;
  }
  eatFood() {
    console.log(`Nom Nom Nom... ${this.name} is eating`);
  }
  whoIsTheOwner() {
    console.log(`The owner is .... ${this.owner}`);
  }
  giveAToy(toy) {
    // console.log("here are the arguments", arguments);
    this.toys.push(toy);
  }
  hasABirthday() {
    this.age++;
    console.log(`${this.name} had a birthday and now they are ${this.age}`);
  }
  howManyAnimals() {
    console.log(`there are ${Animal.numberOfAnimals} in the animal kingdom`);
  }
  loggingThisKeyword() {
    console.log("here is this... ", this);
  }
}

//************************new class **********************/
//dog class is specific
class Dog extends Animal {
  constructor(name, age, owner, breed) {
    //the super keyword calls the constructor from the parent class
    super(name, age, owner);
    this.breed = breed;
    this.energy = 500;
  }
  bark() {
    console.log(this.name, " says .... woof woof woof!");
  }
}

//*******************Bird Class ****************/
class Bird extends Animal {
  constructor(name, age, owner) {
    super(name, age, owner);
  }
  tweet() {
    console.log(`${this.name} sings .... pew pew pew`);
  }
}

const Ragnar = new Dog("Ragnar", 4, "Joshua", "pitbull");
Ragnar.howManyAnimals();
const Buddy = new Dog("Buddy", 12, "Joshua", "Mix");
const Kiwi = new Bird("Kiwi", 2, "Joshua");
Ragnar.howManyAnimals();
Ragnar.loggingThisKeyword();

function playingWithThis() {
  console.log("this keyword inside function keyword", this);
}

const arrowFunction = () => {
  console.log("inside the arrow function", this);
};
playingWithThis();
arrowFunction();
//to see the different objects
// console.log(Kiwi);

//using a method in a class
// Ragnar.eatFood();
// Kiwi.eatFood();

// Ragnar.whoIsTheOwner();
// Buddy.whoIsTheOwner();

//give a toy to Ragnar
// Ragnar.giveAToy("ball", "rope", "bone", "chew toy");
// Buddy.giveAToy("bone");
// Buddy.giveAToy("Rope");

// console.log(Ragnar);
// console.log(Buddy);
// console.log(Kiwi);

//adding one to the age inside the birthday method
// Ragnar.hasABirthday();
// Ragnar.hasABirthday();
// Kiwi.hasABirthday();
