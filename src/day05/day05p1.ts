import { instructions, towers } from './data';

export function day05p1() {
  /* Part 1
    [D]    
[N] [C]    
[Z] [M] [P]
 1   2   3 

move 1 from 2 to 1
move 3 from 1 to 3
move 2 from 2 to 1
move 1 from 1 to 2
  */
  //   let towers = [[], ['Z', 'N'], ['M', 'C', 'D'], ['P']];
  //   let instructions = [
  //     { move: 1, from: 2, to: 1 },
  //     { move: 3, from: 1, to: 3 },
  //     { move: 2, from: 2, to: 1 },
  //     { move: 1, from: 1, to: 2 },
  //   ];

  let swap = (from: number, to: number) => {
    const pop = towers[from].pop();
    if (pop) {
      towers[to].push(pop);
    }
  };

  instructions.forEach(({ move, from, to }) => {
    for (let i = 0; i < move; i++) {
      swap(from, to);
    }
  });

  return towers.map((tower) => tower.pop()).join('');
}

console.log(day05p1());
