import { data } from "./Day3/data.ts";

// Split string in half
function splitInHalf(inputString: string): string[] {
  const halfLength = Math.round(inputString.length / 2);
  return [
    inputString.slice(0, halfLength),
    inputString.slice(halfLength, inputString.length),
  ];
}
// Compare two strings finding shared character
function findSharedCharacters(inputOne: string, inputTwo: string): string | "" {
  let placeholderString = "";
  const firstStringSplit: string[] = inputOne.split("");
  firstStringSplit.forEach((characterString) => {
    if (inputTwo.includes(characterString)) {
      placeholderString = characterString;
    }
  });
  return placeholderString as string | "";
}

// Score Characters
function scorePriority(input: string): number {
  if (!isUpperCase(input)) {
    // Lowercase 1-26
    // ASCII 97-122
    return input.charCodeAt(0) - 96;
  } else {
    // Uppercase 27-52
    // ASCII 65-90
    return input.charCodeAt(0) - 38;
  }
}
function isUpperCase(charInput: string) {
  return charInput.charCodeAt(0) >= 97 ? false : true;
}

function isEven(inputNumber: number) {
  return (inputNumber % 2 === 0) ? true : false;
}

let sumOfPriorities = 0;

data.forEach((string) => {
  const splitString = splitInHalf(string);
  const sharedChar = findSharedCharacters(splitString[0], splitString[1]);
  sumOfPriorities += scorePriority(sharedChar);
})

console.log(`Sum Of Priorities: ${sumOfPriorities}`);
// console.log(sumOfPriorities);

// 11660 is too high
// 8185 is the correct answer