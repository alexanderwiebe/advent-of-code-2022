/*
import * as fs from 'node:fs';

fs.readFileSync(filename)
    .toString()
    .split('\n')
*/
import * as fs from 'node:fs';

export function day02p1() {
  const input = fs.readFileSync('./src/2015-day02/data.txt').toString().split('\n');
  // const input = ['2x3x4', '1x1x10'];
  console.log(runner(input));
}
day02p1();

function runner(input: string[]): number {
  return input
    .map((present) => {
      const lengths = present.split('x').map((dimension) => +dimension);
      const sides = getSidesArea(lengths);
      let area = Math.min(...sides);
      area += sides.reduce((acc, side) => acc + side * 2, 0);
      return area;
    })
    .reduce((acc, area) => acc + area, 0);
}

function getSidesArea([l, w, h]: number[]) {
  return [l * w, l * h, w * h];
}
