import file from './data.json' assert {type: 'json'};

let biggest = 0;
file.forEach(arr => {
  let sum = sumAllIndex(arr);
  if (biggest < sum) biggest = sum;
});

console.log(biggest);

export function sumAllIndex(input: string[]): number {
  let output = 0;
  input.forEach(num => {
    output += parseInt(num);
  });
  return output;
}