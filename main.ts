import { data } from "./Day4/data.ts";

function splitAndParse(rangeString: string): number[] {
  const stringArray = rangeString.split("-");
  return [parseInt(stringArray[0]), parseInt(stringArray[1])];
}

let count = 0;
data.forEach((pair) => {
  const firstPair = splitAndParse(pair[0]);
  const secondPair = splitAndParse(pair[1]);
  if (
    (firstPair[0] <= secondPair[0] && firstPair[1] >= secondPair[1]) ||
    (secondPair[0] <= firstPair[0] && secondPair[1] >= firstPair[1])
  ) {
    count++;
  }
});
console.log(`Count is: ${count}`);

// 763 is too high
// 475 is the right answer (reversed boolean logic)
