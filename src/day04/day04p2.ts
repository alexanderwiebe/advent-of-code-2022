/*


      ┌───────────┐
      │           │
      │     c     │     d
      a     │     b     │
            └───────────┘


      ┌───────────┐
      │           │
      │     a     │     c
      b     │     d     │
            └───────────┘
*/

import { input } from './data';

export function day04p2() {
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

    /*
    [
      [a, b],
      [c, d]
    ]

    (a >= c && a <= d) ||
    (b >= c && b <= d) || 
    (c >= a && c <= b) ||
    (d >= a && d <= b)
    */
  ];

  function contains([a, b]: number[], [c, d]: number[]): boolean {
    return (a >= c && a <= d) || (b >= c && b <= d) || (c >= a && c <= b) || (d >= a && d <= b);
  }
  //   console.log(example.filter((v) => contains(v[0], v[1])).length);

  return input.filter(([v, w]) => contains(v, w)).length;
  /* Part 1
  In how many assignment pairs does one range fully contain the other?
  */
}

export function contains([a, b]: number[], [c, d]: number[]): boolean {
  return (a >= c && a <= d) || (b >= c && b <= d) || (c >= a && c <= b) || (d >= a && d <= b);
}

day04p2();
