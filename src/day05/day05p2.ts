import { instructions, towers } from './data';

export function day05p2() {
  /* Part 1 */

  /* Part 2 */

  //   let towers = [[], ['Z', 'N'], ['M', 'C', 'D'], ['P']];
  //   let instructions = [
  //     { move: 1, from: 2, to: 1 },
  //     { move: 3, from: 1, to: 3 },
  //     { move: 2, from: 2, to: 1 },
  //     { move: 1, from: 1, to: 2 },
  //   ];

  let swap = (move: number, from: number, to: number) => {
    const pop = towers[from].splice(-move, move);
    console.log(pop);
    towers[to].push(...pop);
  };

  instructions.forEach(({ move, from, to }) => {
    swap(move, from, to);
  });

  return towers.map((tower) => tower.pop()).join('');
}

console.log(day05p2());
