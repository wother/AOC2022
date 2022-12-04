import { dataMatrix } from "./Day2/data.ts";

const rock = ["A", "X"] as const;
type Rock = typeof rock[number];
const isRock = (r: any): r is Rock => rock.includes(r);

const paper = ["B", "Y"] as const;
type Paper = typeof paper[number];
const isPaper = (p: any): p is Paper => paper.includes(p);

const scissors = ["C", "Z"] as const;
type Scissors = typeof scissors[number];
const isScissors = (s: any): s is Scissors => scissors.includes(s);

type Result = "opponent" | "you" | "tie";

const testArray = [
  ["A", "X"],
  ["C", "X"],
  ["C", "X"],
  ["C", "X"],
  ["B", "Y"],
  ["C", "X"],
  ["C", "X"],
  ["A", "Z"]
];

// r r tie | 1 3 : 4
// s r win | 3 6 : 9
// s r win | 3 6 : 9
// s r win | 3 6 : 9
// p p tie | 2 3 : 5
// s r win | 3 6 : 9
// s r win | 3 6 : 9
// r s loss| 1 0 : 1
// total 55

function checkPair(
  opponent: Rock | Paper | Scissors,
  you: Rock | Paper | Scissors
): "opponent" | "you" | "tie" | undefined {
  if (
    (isRock(opponent) && isScissors(you)) ||
    (isPaper(opponent) && isRock(you)) ||
    (isScissors(opponent) && isPaper(you))
  ) {
    return "opponent";
  } else if (
    (isRock(opponent) && isPaper(you)) ||
    (isPaper(opponent) && isScissors(you)) ||
    (isScissors(opponent) && isRock(you))
  ) {
    return "you";
  } else if (
    (isRock(opponent) && isRock(you)) ||
    (isPaper(opponent) && isPaper(you)) ||
    (isScissors(opponent) && isScissors(you))
  ) {
    return "tie";
  } else {
    console.log("Something went terribly wrong.");
    return undefined;
  }
}

function score(
  outcome: Result,
  winningThrowType: Rock | Paper | Scissors
): number {
  let output = 0;
  // Rock = 1, Paper = 2, Scissors = 3
  if (isRock(winningThrowType)) output += 1;
  if (isPaper(winningThrowType)) output += 2;
  if (isScissors(winningThrowType)) output += 3;
  // win = 6, loss = 0, tie = 3
  if (outcome === "opponent") output += 0;
  if (outcome === "you") output += 6;
  if (outcome === "tie") output += 3;
  return output;
}

let total = 0;
console.log(`array is ${dataMatrix.length} long`)
dataMatrix.forEach((tuple) => {
  const winner = checkPair(
    tuple[0] as Rock | Paper | Scissors,
    tuple[1] as Rock | Paper | Scissors
  );
  total += score(winner as Result, tuple[1] as Rock | Paper | Scissors);
});
console.debug(`total is: ${total}`);

// too high: 11788
// 11063 - answer