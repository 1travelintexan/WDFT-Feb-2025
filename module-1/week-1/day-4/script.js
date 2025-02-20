const num = 1;
//switch statements

// switch (true) {
//   case num > 0 && num <= 1:
//     console.log("the num is one");
//     break;
//   case num >= 2 && num < 5:
//     console.log("the num is between 2 and 5");
//     break;
//   default:
//     console.log("in the default");
//     break;
// }

//for loop
// inializes a variable(normally named i) and a starting point; gives a condion when to stop; increment amount
for (let pizza = 1; pizza <= 10; pizza += 2) {
  //   console.log(pizza);
}
//for loop in reverse
for (let i = 100; i >= 0; i--) {
  //   console.log(i);
}

// Fizz Buzz exercise
// make a loop to count to 100
// if i is divisible by 3 then you should log 'Fizz'
// if i is divisible by 5 then you should log 'Buzz'
// if i is divisible by 3 and 5 then you should log 'Fizz Buzz'
// else you should just log the number

// for (let i = 1; i <= 100; i++) {
//   if (i % 3 === 0 && i % 5 === 0) {
//     console.log("Fizz Buzz");
//   } else if (i % 3 === 0) {
//     console.log("Fizz");
//   } else if (i % 5 === 0) {
//     console.log("Buzz");
//   } else {
//     console.log(i);
//   }
// }

//while loop

let whileNumber = 11;

while (whileNumber < 10) {
  console.log("inside the while loop", whileNumber);
  //always make sure to increment whatever you are checking in the while condition
  whileNumber++;
}

//do while loop
do {
  //   console.log("this is the strange do while loop", whileNumber);
  whileNumber++;
} while (whileNumber < 10);

//*************Functions *************/
//ES-5 syntax for function declaration
//functions can receive arguments
function add(num1, num2) {
  //   console.log("the add function", num1, num2, );
  const sum = num1 + num2;
  return sum;
}

//invoking the function add
const theSum = add(2, 3);
// console.log(theSum);
add(100, 1000);

//ES-6 arrow function syntax
const subtract = (number1, number2) => {
  return number1 - number2;
};
// console.log(subtract(100, 41));

//*****************Arrays *************/
const str = "hello world";
const students = [
  "Krists",
  "Rafa",
  "Manuel",
  100,
  false,
  ["Jennifer", "Larissa", "Nurjahan"],
];
// students[5].push("Vicent");
// students.unshift("Ronan");
// students.pop();
// students.shift();
// console.log(students.slice(0, 3));
//.splice() actually changes the original
// we can delete things and add things with splice
students.splice(3, 0, "Kristi", "Rojda", "Enrique");
// console.log(students);

//**********.forEach()***********/

const array1 = ["a", "b", "c", "d", "e"];

array1.forEach((element, pepp, pinn) => {
  console.log(element, " is at index ", pepp, "here is the whole array", pinn);
});
// students.forEach(function (element) {
//   console.log(element);
// });
