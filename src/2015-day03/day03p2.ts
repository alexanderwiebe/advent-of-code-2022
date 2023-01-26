import * as fs from 'node:fs';
/*
import * as fs from 'node:fs';

fs.readFileSync(filename)
    .toString()
    .split('\n')
    The next year, to speed up the process, Santa creates a robot version of himself, Robo-Santa, to deliver presents with him.

Santa and Robo-Santa start at the same location (delivering two presents to the same starting house), then take turns moving based on instructions from the elf, who is eggnoggedly reading from the same script as the previous year.

This year, how many houses receive at least one present?

For example:


*/

export function day03p2() {
  const input = fs.readFileSync('./src/2015-day03/data.txt').toString();
  //   const input = ['^>v<', /*3*/ '^v^v^v^v^v' /*11*/];
  console.log(runner(input));
}

day03p2();

function runner(input: string): number {
  const visits: Map<string, number> = new Map();

  const steps = input.split('');
  const positions = [
    { x: 0, y: 0 },
    { x: 0, y: 0 },
  ];

  steps.forEach((s, i) => {
    const who = i % 2 === 0 ? 0 : 1;
    const coord = () => `${positions[who].x}x${positions[who].y}`;
    visits.set(coord(), visits.get(coord()) ?? 0 + 1);
    switch (s) {
      case '^':
        positions[who].y++;
        break;
      case 'v':
        positions[who].y--;
        break;
      case '<':
        positions[who].x--;
        break;
      case '>':
        positions[who].x++;
        break;
    }
    visits.set(coord(), visits.get(coord()) ?? 0 + 1);
  });

  return [...visits.values()].length;
}
