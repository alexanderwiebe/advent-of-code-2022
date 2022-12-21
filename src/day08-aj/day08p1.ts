import { input } from './data';

export function day08p1(example) {
  /* Part 1 */

  function visibleRow(row: number[], index: number, treeHeight: number) {
    let left = row.slice(0, index);
    let leftVisible = Math.max(...left) < treeHeight;
    let right = row.slice(index + 1);
    let rightVisible = Math.max(...right) < treeHeight;
    return leftVisible || rightVisible;
  }

  function visibleColumn(grid: number[][], column: number, row: number, treeHeight: number) {
    let top = [];
    let bottom = [];
    for (let c = 0; c < example.length; c++) {
      if (c < column) {
        top.push(example[c][row]);
      }
      if (c > column) {
        bottom.push(example[c][row]);
      }
    }
    let topVisible = Math.max(...top) < treeHeight;
    let bottomVisible = Math.max(...bottom) < treeHeight;
    return topVisible || bottomVisible;
  }

  let edge = (example.length - 2) * 4 + 4;
  let interior = 0;
  for (let y = 1; y < example.length - 1; y++) {
    for (let x = 1; x < example[y].length - 1; x++) {
      //   1 1 0
      //   1 0 1
      //   0 1 0
      //   console.log(visibleRow(example[y], x, example[y][x]));

      //   console.log(visibleColumn(example, y, x, example[y][x]));
      if (visibleRow(example[y], x, example[y][x]) || visibleColumn(example, y, x, example[y][x])) {
        interior++;
      }
    }
  }

  return edge + interior;
}

let example: number[][] = [
  [3, 0, 3, 7, 3],
  [2, 5, 5, 1, 2],
  [6, 5, 3, 3, 2],
  [3, 3, 5, 4, 9],
  [3, 5, 3, 9, 0],
];
console.log(day08p1(input));
