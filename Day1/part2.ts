import { sumAllIndex } from "./part1.ts";
import file from './data.json' assert {type: 'json'};

const sums = [] as number[];

file.forEach(arr => {
  sums.push(sumAllIndex(arr))
});

const sortedsums = sums.sort(compariator);

const threebiggest = sortedsums.slice(0, 3);

// console.log(sortedsums);

console.log(sumAllIndex(threebiggest));

function compariator(first: number, second: number): 1 | -1 | 0 {
  if (first < second) return 1;
  if (first > second) return -1;
  return 0
}
