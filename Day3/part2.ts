import { data } from "./data.ts";
import { findSharedCharacters, scorePriority } from "./part1.ts";

// Split data into thirds
function splitByuThirds(hugeArray: string[]): any[] {
  const output = [];
  const groupA = hugeArray.slice(0, 99);
  const groupB = hugeArray.slice(100, 199);
  const groupC = hugeArray.slice(200, 299);
  groupA.forEach((inputStrong, index) => {
    output.push([inputStrong, groupB[index], groupC[index]]);
  });
  return output;
}

// Find shared character by three strings
function sharedBetweenThree(
  one: string,
  two: string,
  three: string
): string | undefined {
  // check 1 & 2
  const sharedOneTwo = findAllShared(one, two);
  // check 1 & 3
  const sharedOneThree = findAllShared(one, three);
  // check 2 & 3
  const sharedTwoThree = findAllShared(two, three);

  const allTheShared = [...sharedOneTwo, ...sharedOneThree, ...sharedTwoThree];

  let output = "";
  const indices = [];
  allTheShared.forEach((charString) => {
    let idx = allTheShared.indexOf(charString);
    while (idx !== -1) {
      indices.push(idx);
      idx = allTheShared.indexOf(charString, idx + 1)
    }
  });
  
  return output;
}

function findAllShared(inputOne: string, inputTwo: string): string[] {
  let output = [];
  inputOne.split("").forEach((charString) => {
    if (inputTwo.includes(charString) && !output.includes(charString)) {
      output.push(charString);
    }
  });
  return output;
}

// calculate priotity of triplet
// Sum and display
const thirds = splitByuThirds(data);
let skizore = 0;
thirds.forEach((subArray) => {
  const shared = sharedBetweenThree(subArray[0], subArray[1], subArray[2]);
  skizore += scorePriority(shared as string);
});
console.log(`Total for triplets is: ${skizore}`);

// 1995 is too low
