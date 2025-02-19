// this is a comment in js
/*this 
 is a
 multiple 
 line 
 comment in js */

//different types of naming conventions
//  camel case => thisIsCamelCase
// kebab case => this-is-kebab-casing
// snake case => this_is_snake_casing
// pascal case => ThisIsPascalCasing

//variables
//***************Strings **************/
//  let is for variables that will change in the future
let name = "Ragnar";
name[0] = "J";
console.log("here is the name", name);
//  const is for variables that will never change
const ownerName = "Joshua";
var dontDoThis = "var is trash";
//reassigning a value
// name = "ragnar is the best dog";
// string methods
const nameLength = name.length;
const uppercasedName = name.toUpperCase();
const lowercasedName = name.toLowerCase();
const aPartOfAString = name.slice(-2);
const theFirstLetter = name[0];
//exercise
//take a name is capitalize the first letter
let userName = "joshua";
const uppercasedName2 = userName[0].toUpperCase() + userName.slice(1);
//the three different ways to create a string
// first way is single quotes => ' '
// second way is double quotes => " "
// third way is with backticks => ` `
const ragnarsAge = 3;
//with concatenation
const sentence =
  "the owners name is ... " + ownerName + " and his pet name is .... " + name;
//with backticks
//aka template literal
const sentence2 = `the owners name is ... ${ownerName} and his pet name is ... ${name}`;

//****************Numbers **************/
const age = 37.2;
const roundedNormally = Math.round(37.5);
const roundedUpAlways = Math.ceil(4.0000001);
const roundedDownAlways = Math.floor(4.999999999999);
const theBiggestNumber = Math.max(2, 1, 0.4, 600);
const theLowestNumber = Math.min(2, 33, 52, 0.7);
const aRandomNumber = Math.random();

const students = ["Chris", "Rafa", "Rojda", "Enrique"];
//grab a random index from the students
const randomIndex = Math.floor(Math.random() * students.length);
// console.log("here is the index, ", randomIndex, students[randomIndex]);

// += and -=
let num = 3;
num += 2;
//basically the same as
// num = num + 2
num -= 4;
// num = num - 4;

//raised to a power
const exponent = 3 ** 3;

//the modulo operator
const mod = 13 % 2;

//difference between = .... == .... ===
//one equal sign => assigning a value
//two equal signs => comparing values
//three equal signs => comparing value and type

const num1 = 2;
const num2 = "2";
const areTheyTheSame = num1 === num2;

const dogsAreBetterThenCats = false || false;
const andOperator = true && false;

console.log(andOperator);
