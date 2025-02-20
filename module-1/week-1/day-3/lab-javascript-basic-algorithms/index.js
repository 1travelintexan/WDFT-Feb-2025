// Iteration 1: Names and Input
const hacker1 = "aRagnar";
console.log(`The drivers name is ${hacker1}`);
const hacker2 = "Joshua";
console.log(`The navigators name is ${hacker2}`);
// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
  console.log(
    `The driver has the longest name, it has ${hacker1.length} characters.`
  );
} else if (hacker1.length < hacker2.length) {
  console.log(
    `It seems that the navigator has the longest name, it has ${hacker2.length} characters.`
  );
} else {
  console.log(
    `Wow, you both have equally long names, ${hacker1.length} characters!`
  );
}
// Iteration 3: Loops

let nameHacker1 = "";
for (let i = 0; i < hacker1.length; i++) {
  if (i === hacker1.length) {
    nameHacker1 += hacker1[i];
  } else {
    nameHacker1 += hacker1[i] + " ";
  }
}
const driverName = nameHacker1.toUpperCase();
console.log(driverName);

let revName = "";
for (let i = hacker2.length - 1; i >= 0; i--) {
  revName += hacker2[i];
}
console.log(revName);
console.log(hacker1.charCodeAt(0));
for (let i = 0; i < hacker1.length; i++) {
  const hacker1Letter = hacker1[i];
  const hacker2Letter = hacker2[i];
  if (hacker1Letter.localeCompare(hacker2Letter) < 0) {
    console.log(`The driver's name goes first.`);
    break;
  } else if (hacker2Letter.localeCompare(hacker1Letter) < 0) {
    console.log(`Yo, the navigator goes first, definitely.`);
    break;
  } else if (i === hacker1.length - 1) {
    console.log(`What?! You both have the same name?`);
  }
}

const longText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent diam ante, tristique eget venenatis vel, feugiat eget massa. Integer vel risus suscipit, efficitur elit sed, egestas ligula. Cras at convallis nibh. In massa odio, efficitur id interdum id, laoreet eget augue. Maecenas et neque ac metus laoreet placerat sed sed erat. Donec tempor elit elit, non ullamcorper nulla blandit aliquam. Vivamus eget lorem non tellus lacinia rhoncus. Aenean tellus sem, auctor sit amet feugiat in, laoreet id neque. Proin semper purus rhoncus, accumsan nunc id, pretium turpis. Curabitur vel lacus et risus hendrerit iaculis. Morbi at nisl a magna mollis scelerisque. Sed viverra aliquet elit venenatis pharetra. Fusce porttitor risus id urna vehicula scelerisque. Nulla tincidunt ante eu sapien viverra sodales.
Suspendisse quis dapibus nisl. Curabitur nunc magna, consequat sed laoreet facilisis, laoreet ut erat. Mauris sed faucibus tortor. Pellentesque ultricies bibendum elit, vel gravida odio malesuada at. Sed convallis eros tortor, vel imperdiet urna fermentum non. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nunc nulla est, malesuada nec gravida sit amet, posuere sed sem. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed mollis ornare tellus ac convallis. Vestibulum non sapien risus. Morbi in elit mattis, finibus est eu, vestibulum massa.
Aliquam aliquam nulla at elit semper, commodo mollis nibh dictum. Duis vitae pretium nisl, id placerat augue. Fusce felis erat, pharetra eget interdum eu, placerat vel dolor. Phasellus ipsum elit, ullamcorper sollicitudin interdum quis, vehicula a felis. Morbi euismod in tellus ac aliquet. Quisque venenatis sem dolor, a dictum erat ullamcorper non. Nam euismod, turpis ut tincidunt sollicitudin, nisl augue lobortis est, et lacinia turpis ante eget ex. Nulla fringilla, sapien sed vulputate ornare, eros dui ultricies nibh, eu faucibus quam enim vitae arcu. Sed massa neque, vulputate ut malesuada nec, venenatis sed nibh. Nam dictum quam et augue egestas pharetra. Nunc pretium felis sapien, vitae efficitur mauris condimentum sed. Vivamus dapibus ullamcorper magna, in dictum urna blandit nec.`;
const testText = "hello world this is a test test test et, cet et. ett ET";
let spaceCount = 0;
for (let i = 0; i <= testText.length; i++) {
  if (testText[i] === " ") {
    spaceCount++;
  }
}
let wordCount = spaceCount + 1;
const myWordCount = longText.split(" ").length;
console.log(myWordCount);

//count the ets
let result = 0;
// const result = longText.split(" ").filter((oneWord) => oneWord === "et").length;
for (let i = 0; i < testText.length; i++) {
  if (
    testText[i - 1] === " " &&
    testText[i] === "e" &&
    testText[i + 1] === "t" &&
    testText[i + 2] === " "
  ) {
    result++;
  } else if (
    testText[i - 1] === " " &&
    testText[i] === "e" &&
    testText[i + 1] === "t" &&
    testText[i + 2] === ","
  ) {
    result++;
  } else if (
    testText[i - 1] === " " &&
    testText[i] === "e" &&
    testText[i + 1] === "t" &&
    testText[i + 2] === "."
  ) {
    result++;
  }
}
console.log("the number of et ", result);
