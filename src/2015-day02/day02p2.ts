import * as fs from 'node:fs';
/*
import * as fs from 'node:fs';
fs.readFileSync(filename)
    .toString()
    .split('\n')
*/

export function day02p2() {
  const input = fs.readFileSync('./src/2015-day02/data.txt').toString().split('\n');
  // const input = ['2x3x4', '1x1x10'];
  console.log(runner(input));
}

// day02p2();

function runner(input: string[]): number {
  return input
    .map((present) => {
      const lengths = present.split('x').map((dimension) => +dimension);
      let ribbon = getMinPerimeter(lengths);
      ribbon += lengths.reduce((sum, length) => sum * length);
      return ribbon;
    })
    .reduce((acc, ribbon) => acc + ribbon, 0);
}

function getMinPerimeter([l, w, h]: number[]): number {
  return Math.min(2 * l + 2 * w, 2 * l + 2 * h, 2 * w + 2 * h);
}
