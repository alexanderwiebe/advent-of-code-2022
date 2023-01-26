import * as fs from 'node:fs';
/*
import * as fs from 'node:fs';

fs.readFileSync(filename)
    .toString()
    .split('\n')
*/

export function day03p1() {
  const input = fs.readFileSync('./src/2015-day03/data.txt').toString();
  // const input = ['^>v<', '^v^v^v^v^v'];
  console.log(runner(input));
}

day03p1();

function runner(input: string): number {
  const visits: Map<string, number> = new Map();

  const steps = input.split('');
  let x = 0;
  let y = 0;

  steps.forEach((s) => {
    visits.set(`${x}x${y}`, visits.get(`${x}x${y}`) ?? 0 + 1);
    switch (s) {
      case '^':
        y++;
        break;
      case 'v':
        y--;
        break;
      case '<':
        x--;
        break;
      case '>':
        x++;
        break;
    }
    visits.set(`${x}x${y}`, visits.get(`${x}x${y}`) ?? 0 + 1);
  });

  return [...visits.values()].length;
}
