export function day08p2(example: number[][]): number {
  function rowScore(row: number[], index: number, treeHeight: number) {
    let left = row.slice(0, index);
    let leftVisible = 0;
    if (left.length) {
      const nextBiggest = left.reverse().findIndex((tree) => tree >= treeHeight);
      if (nextBiggest == -1) {
        leftVisible = left.length;
      } else {
        leftVisible = nextBiggest + 1;
      }
    }
    console.log(leftVisible);

    let rightVisible = 0;
    let right = row.slice(index + 1);
    if (right.length) {
      const nextBiggest = right.findIndex((tree) => tree >= treeHeight);
      if (nextBiggest == -1) {
        rightVisible = right.length;
      } else {
        rightVisible = nextBiggest + 1;
      }
    }
    console.log(rightVisible);

    return leftVisible * rightVisible;
  }

  function colScore(grid: number[][], column: number, row: number, treeHeight: number): number {
    let top = [];
    let bottom = [];
    for (let c = 0; c < grid.length; c++) {
      if (c < column) {
        top.push(grid[c][row]);
      }
      if (c > column) {
        bottom.push(grid[c][row]);
      }
    }
    let topVisible = Math.max(...top) < treeHeight;
    let bottomVisible = Math.max(...bottom) < treeHeight;
    return 0;
    // return topVisible || bottomVisible;
  }

  let treeScore = [];
  for (let y = 0; y < example.length; y++) {
    for (let x = 0; x < example[y].length; x++) {
      treeScore.push(rowScore(example[y], x, example[y][x]) * colScore(example, y, x, example[y][x]));
    }
  }

  return Math.max(...treeScore);
}

let example: number[][] = [
  [3, 0, 3, 7, 3],
  [2, 5, 5, 1, 2],
  [6, 5, 3, 3, 2],
  [3, 3, 5, 4, 9],
  [3, 5, 3, 9, 0],
];
console.log(day08p2(example));
