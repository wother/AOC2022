import { dataMatrix } from "./data.ts";
import { whoWins, score, Rock, Paper, Scissors, Result } from "./part1.ts";

type OpponentRock = "A";
type OpponentPaper = "B";
type OpponentScissors = "C";

type Lose = "X";
const isLoss = (l: any): l is Lose => l === "X";
type Draw = "Y";
const isDraw = (d: any): d is Draw => d === "Y";
type Win = "Z";
const isWin = (w: any): w is Win => w === "Z";

function findDesiredOutcome(
  opponentChoice: OpponentRock | OpponentPaper | OpponentScissors,
  desiredOutcome: Win | Lose | Draw
): OpponentRock | OpponentPaper | OpponentScissors | undefined {
  if (desiredOutcome === "Z") {
    // Opponent Rock & Win needed
    if (opponentChoice === "A") return "B";
    // Opponent Paper and win needed
    if (opponentChoice === "B") return "C";
    // Opponent Scissors and win needed
    if (opponentChoice === "C") return "A";
  } else if (desiredOutcome === "X") {
    // Opponent Rock & Loss needed
    if (opponentChoice === "A") return "C";
    // Opponent Paper and Loss needed
    if (opponentChoice === "B") return "A";
    // Opponent Scissors and Loss needed
    if (opponentChoice === "C") return "B";
  } else if (desiredOutcome === "Y") {
    // Opponent Rock & Draw needed
    if (opponentChoice === "A") return "A";
    // Opponent Paper and Draw needed
    if (opponentChoice === "B") return "B";
    // Opponent Scissors and Draw needed
    if (opponentChoice === "C") return "C";
  } else {
    console.error("Something went terribly wrong");
    return undefined;
  }
}

function parseOutcome(codedOutcome: Win | Lose | Draw): string | undefined {
  if (isWin(codedOutcome)) return "Win";
  if (isDraw(codedOutcome)) return "Draw";
  if (isLoss(codedOutcome)) return "Lose";
  return undefined;
}

let finalScore = 0;
dataMatrix.forEach((tuple) => {
  const toThrow = findDesiredOutcome(
    tuple[0] as OpponentRock | OpponentPaper | OpponentScissors,
    tuple[1] as Win | Lose | Draw
  );
  const winner = whoWins(
    tuple[0] as Rock | Paper | Scissors,
    toThrow as Rock | Paper | Scissors
  );
  finalScore += score(winner as Result, toThrow as Rock | Paper | Scissors);
});
console.log(`Part2 total is: ${finalScore}`);

// 10349 is correct
