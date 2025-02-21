// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(num1, num2) {
  console.log(num1, num2);
  if (num1 > num2) {
    return num1;
  } else if (num1 < num2) {
    return num2;
  } else {
    return num1;
  }
}

// Iteration 2 | Find the Longest Word
const words = [
  "mystery",
  "brother",
  "aviator",
  "crocodile",
  "pearl",
  "orchard",
  "crackpot",
];

function findLongestWord(arrayOfWords) {
  if (arrayOfWords.length === 0) return null;
  let longestWord = "";
  for (let i = 0; i < arrayOfWords.length; i++) {
    const currentWord = arrayOfWords[i];
    if (currentWord.length > longestWord.length) {
      longestWord = currentWord;
    }
  }
  return longestWord;
}

// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(arrOfNums) {
  let sum = 0;
  for (let i = 0; i < arrOfNums.length; i++) {
    const currentNumber = arrOfNums[i];
    sum = sum + currentNumber;
  }
  return sum;
}

// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(array) {
  if (array.length === 0) return 0;
  const averageSum = sumNumbers(array);
  const avg = averageSum / array.length;
  return avg;
}

// Iteration 5 | Find Elements
const words2 = [
  "machine",
  "subset",
  "trouble",
  "starting",
  "matter",
  "eating",
  "truth",
  "disobedience",
];

function doesWordExist(arrayOfWords, aWord) {
  if (arrayOfWords.length === 0) return null;
  //   let isInsideArray = false;
  //   for (let i = 0; i < arrayOfWords.length; i++) {
  //     const currentWord = arrayOfWords[i];
  //     if (currentWord === aWord) {
  //       isInsideArray = true;
  //     }
  //   }
  //   return isInsideArray;

  //oneline version
  return arrayOfWords.includes(aWord);
}
