import * as fs from 'node:fs';
/*
fs.readFileSync(filename)
    .toString()
    .split('\n')
*/

export function day01p2() {
  const input = fs.readFileSync('./src/2015-day01/data.txt').toString();
  // const input = '())';
  console.log(input.length);

  console.log(runner(input));
}

function runner(input: string): number {
  const steps = input.split('');
  let floor = 0;
  for (let i = 0; i < steps.length; i++) {
    floor += steps[i] === '(' ? 1 : -1;
    if (floor < 0) {
      return i + 1;
    }
  }
  return -1;
}

runner('()())');
