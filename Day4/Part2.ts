import { data } from "./data.ts";

function splitAndParse(rangeString: string): number[] {
  const stringArray = rangeString.split("-");
  return [parseInt(stringArray[0]), parseInt(stringArray[1])];
}

let count = 0;
data.forEach((pair) => {
  const firstSet = splitAndParse(pair[0]);
  const secondSet = splitAndParse(pair[1]);
  if (
    (firstSet[0] >= secondSet[0] && firstSet[0] <= secondSet[1]) ||
    (firstSet[1] >= secondSet[0] && firstSet[1] <= secondSet[1]) ||
    (secondSet[0] >= firstSet[0] && secondSet[0] <= firstSet[1]) ||
    (secondSet[1] >= firstSet[0] && secondSet[1] <= firstSet[1])
  ) {
    count++;
  }
});
console.log(`Count is: ${count}`);

// Pt2 800 is too low (wtf?!)
// Pt2 825 is the answer