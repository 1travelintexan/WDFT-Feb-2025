// console.log("hello there");
//global level variable
// console.log(userName);
// // console.log("the difference at the top is:", subtract(20, 10));
// const petName = "Ragnar";
// var userName = "Joshua";
// console.log(userName);
//inside of a for loop
for (let i = 0; i < 5; i++) {}

//function declared below
function add(a, b) {
  const total = a + b;
  return total;
}
const subtract = (a, b) => {
  const total = a - b;
  return total;
};
const sumTotal = add(2, 3);
const subtractTotal = subtract(20, 5);
// console.log(sumTotal, subtractTotal);

//copy with primitive data types
//this works for string, number, boolean, ect...
let str1 = "hello world";
const str2 = str1;
str1 = "hey yall";

//copy with objects and arrays
const arr1 = [1, 2, 3, [6, 7]];
//very shallow
const arr2 = arr1;
//the spread operator creates a 'deep' copy
const arr3 = [...arr1];

//if I change arr1, then it effects arr2
arr1.push(4, 5);
arr1[3].push("this is not very deep");

// console.log({ arr1, arr2, arr3 });
// Challenge 2
let a = 1;

function example(a) {
  a = 10;
  console.log(a); // Console log 1
}

example(a);

console.log(a); // Console log 2
