const student1 = {
  name: "Ragnar",
  age: 3,
  type: "Dog",
  owner: "Joshua",
  "is Admin": true,
  bark: () => {
    console.log("woof woof");
  },
};
//calling a function from an object
student1.bark();
console.log("bark" in student1);
//remove a property from an object
delete student1.bark;
console.log("bark" in student1);

const student2 = {
  name: "Buddy",
  age: 14,
  type: "Dog",
  owner: {
    ownerName: "Joshua",
    email: "joshua@joshua.com",
    address: {
      road: "123 france way",
      Country: "France",
    },
  },
  friends: ["Enrique", "Rafa", "Larissa", student1],
};
const students = [
  {
    name: "Buddy",
    age: 14,
    type: "Dog",
    owner: {
      ownerName: "Joshua",
      email: "joshua@joshua.com",
      address: {
        road: "123 france way",
        Country: "France",
      },
    },
    friends: ["Enrique", "Rafa", "Larissa"],
  },
  {
    name: "Kiwi",
    age: 2,
    type: "Bird",
    owner: {
      ownerName: "Joshua",
      email: "joshua@joshua.com",
      address: {
        road: "123 france way",
        Country: "France",
      },
    },
    friends: ["Enrique"],
  },
];
const test = "name";

//with the dot notation
// const student1Name = student1.name;
// //with the bracket notation
// const student2Age = student2["age"];
// const theFirstStudent = students[0].friends;
// console.log("the first student in the array, their friends", theFirstStudent);
// //************get country from the owner of Buddy
// const theCountry = student2.owner["address"].Country;
// console.log("here is the country", theCountry);
// //*************get the third friend from Buddy******
// const thirdFriend = student2.friends[2];
// console.log("the third friend is", thirdFriend);
// //with a space in the key name
// const isStudent1Admin = student1["is Admin"];
// //testing with variable strings as keys
// const buddysName = student2[test];
// // console.log(student1Name);
// // console.log(student2Age);
// // console.log("is admin", isStudent1Admin);
// // console.log(buddysName);
