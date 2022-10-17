import { input } from './data';

let example = [199, 200, 208, 210, 200, 207, 240, 269, 260, 263];

function runningTotal(input: number[]) {
  let runningTotal = [];
  for (let i = 0; i < input.length; i++) {
    let first = input[i];
    let second = i < input.length - 1 ? input[i + 1] : 0;
    let third = i < input.length - 2 ? input[i + 2] : 0;
    runningTotal.push(first + second + third);
  }
  return runningTotal;
}

console.log(
  runningTotal(example).filter((val, i, ex) =>
    i == 0 ? false : val > ex[i - 1],
  ).length,
);

console.log(
  runningTotal(input).filter((val, i, ex) => (i == 0 ? false : val > ex[i - 1]))
    .length,
);
