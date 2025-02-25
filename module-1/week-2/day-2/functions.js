const arrayOfPets = [
  {
    name: "Ragnar",
    age: 4,
    type: "Dog",
    owner: "Joshua",
  },
  {
    name: "Yuki",
    age: 1,
    type: "Dog",
    owner: "Rojda",
  },
  {
    name: "Feba",
    age: 9,
    type: "Cat",
    owner: "Sosha",
  },
  {
    name: "Buddy",
    type: "Dog",
    age: 9,
    owner: "Joshua",
  },
];
const arrayOfNums = [1, 2, 3, 4, 5];
//****************map *****************/
//get all the names of the pets in a new array
const petNames = arrayOfPets.map((onePet, index, array) => {
  //   console.log(onePet);
  return `${onePet.name} has the index of ${index}`;
});
// console.log("here are the pet names", petNames);
//map over the array of nums and triple each one
const tripledArray = arrayOfNums.map((oneNumber, index) => {
  const numberTripled = oneNumber * 3;
  return numberTripled;
});
//onliner version
const oneLiner = arrayOfNums.map((x) => x * 3);
// console.log(oneLiner);

//****************Filter *****************/
const onlyDogs = arrayOfPets.filter((onePet, index, wholeArray) => {
  if (onePet.type === "Dog") {
    return true;
  } else {
    return false;
  }
});
const onlyCatsBOOO = arrayOfPets.filter((onePet) => {
  if (onePet.type === "Cat") {
    return true;
  } else {
    return false;
  }
});
//oneliner
const onelinerCats = arrayOfPets.filter((aPet) => aPet.type === "Cat");
// console.log("just dogs", onlyDogs);
// console.log("just cats", onelinerCats);

//filter the pets to be only the pets of students
const studentPets = arrayOfPets
  .filter((aPet) => {
    //   if (aPet.owner === "Rojda" || aPet.owner === "Sosha") {
    //     return true;
    //   }
    if (aPet.owner !== "Joshua") {
      return true;
    }
  })
  .map((onePet) => onePet.name);
// console.log("student pets", studentPets);

//****************************reduce *******************/
const nums = [1, 2, 3, 4, 5, 6, 7];
const cart = [
  {
    item: "LCD Screen",
    price: 250,
  },
  {
    item: "Mouse",
    price: 75,
  },
  {
    item: "GPU",
    price: "800",
  },
  {
    item: "New Leash",
    price: 50,
  },
];
const cartTotal = cart.reduce((acc, curr) => {
  if (typeof curr.price === "number") {
    return acc + curr.price;
  } else {
    return acc;
  }
}, 0);
const total = nums.reduce((accumulator, currentElement) => {
  //   console.log(accumulator, currentElement);
  return accumulator + currentElement;
}, 0);
// console.log("the total Ill spend on Amazon is....", cartTotal);
// console.log("here is the total from just the numbers", total);

//******************sort***********/
const numbersOutOfOrder = [1362, 38, 2, 2, 1, 100, -22];
//this sort is sorting asc
// numbersOutOfOrder.sort((currentNumber, nextNumber) => {
//   if (currentNumber > nextNumber) {
//     return 1;
//   } else if (currentNumber < nextNumber) {
//     return -1;
//   } else {
//     0;
//   }
// });
//this sort is sorting desc
const copy = numbersOutOfOrder.toSorted((currentNumber, nextNumber) => {
  if (currentNumber > nextNumber) {
    return 11;
  } else if (currentNumber < nextNumber) {
    return -77;
  } else {
    0;
  }
});
const arr1 = [1, 2, 3];
//this is a shallow copy.... be careful
const arr2 = arr1;
//deep copy
const arr3 = JSON.parse(JSON.stringify(arr1));
arr2.push(5);
arr1.sort((a, b) => b - a);
// console.log("arr1: ", arr1);
// console.log("arr2: ", arr2);
//oneliner for .sort ASC
numbersOutOfOrder.sort((a, b) => a - b);
//oneliner for .sort DESC
numbersOutOfOrder.sort((a, b) => b - a);
// console.log(copy);
// console.log(numbersOutOfOrder);

//this is the opposite of sorting with the .sort method
// function shuffleQuestions() {
//     const shuffledQuestions = numbersOutOfOrder.sort((a, b) => 0.5 - Math.random());
//     return shuffledQuestions;
// }

const arrToReverse = ["Joshua", "Ragnar", "Vassilis"];
arrToReverse.reverse();
// console.log(arrToReverse);

//sorting with the age, then sorting by name
arrayOfPets.sort((a, b) => {
  if (a.age > b.age) {
    return 1;
  } else if (a.age < b.age) {
    return -1;
  } else {
    if (a.name > b.name) {
      return 1;
    } else if (a.name < b.name) {
      return -1;
    } else {
      return 0;
    }
  }
});
console.log("pets sorted:", arrayOfPets);
