import { input } from './data';

export function day04p1() {
  let example = [
    [
      [2, 4],
      [6, 8],
    ],
    [
      [2, 3],
      [4, 5],
    ],
    [
      [5, 7],
      [7, 9],
    ],
    [
      [2, 8],
      [3, 7],
    ],
    [
      [6, 6],
      [4, 6],
    ],
    [
      [2, 6],
      [4, 8],
    ],
  ];

  function contains(pair: number[][]): boolean {
    const min = Math.min(...pair[0], ...pair[1]);
    // console.log(min);
    const max = Math.max(...pair[0], ...pair[1]);
    // console.log(max);
    return pair.map((v) => v.join(',')).includes(`${min},${max}`);
  }

  console.log(input.filter(contains).length);

  return input.filter(contains).length;
  /* Part 1
  In how many assignment pairs does one range fully contain the other?
  */
}

day04p1();
