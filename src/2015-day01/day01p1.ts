import * as fs from 'node:fs';

/*
fs.readFileSync(filename)
    .toString()
    .split('\n')
*/

export function day01p1() {
  const input = fs.readFileSync('./src/2015-day01/data.txt').toString();
  //   const input = '))(((((';
  console.log(runner(input));
}

function runner(input: string): number {
  return input.split('').reduce((floor: number, char: string): number => {
    return floor + (char === '(' ? 1 : -1);
  }, 0);
}
