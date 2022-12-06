import { input } from './data';

export function day02p2(): number {
  /* Part 1 */

  /* Part 2 
  
  --- Part Two ---
The Elf finishes helping with the tent and sneaks back over to you. "Anyway, the second column says how the round needs to end: X means you need to lose, Y means you need to end the round in a draw, and Z means you need to win. Good luck!"

The total score is still calculated in the same way, but now you need to figure out what shape to choose so the round ends as indicated. The example above now goes like this:

In the first round, your opponent will choose Rock (A), and you need the round to end in a draw (Y), so you also choose Rock. This gives you a score of 1 + 3 = 4.

In the second round, your opponent will choose Paper (B), and you choose Rock so you lose (X) with a score of 1 + 0 = 1.

In the third round, you will defeat your opponent's Scissors with Rock for a score of 1 + 6 = 7.

Now that you're correctly decrypting the ultra top secret strategy guide, you would get a total score of 12.

Following the Elf's instructions for the second column, what would your total score be if everything goes exactly according to your strategy guide?
  
  */

  let example = [
    ['A', 'Y'], // Y means you need to end the round in a draw
    ['B', 'X'], // X means you need to lose,
    ['C', 'Z'], // Z means you need to win.
  ];

  // const score: Record<string, Record<string, number>> = {
  //   A: { X: 0, Y: 1, Z: 0 },
  //   B: { X: 0, Y: 2, Z: 0 },
  //   C: { X: 0, Y: 3, Z: 0 },
  // };

  const score: Record<string, number> = { X: 1, Y: 2, Z: 3 };

  const choiceMap: Record<string, Record<string, string>> = {
    X: { A: 'Z', B: 'X', C: 'Y' },
    Y: { A: 'X', B: 'Y', C: 'Z' },
    Z: { A: 'Y', B: 'Z', C: 'X' },
  };

  const win: Record<string, Record<string, number>> = {
    X: { A: 3, B: 0, C: 6 },
    Y: { A: 6, B: 3, C: 0 },
    Z: { A: 0, B: 6, C: 3 },
  };

  return input
    .map(([opponent, choice]) => [opponent, choiceMap[choice][opponent]])
    .reduce((sum, [opponent, elf]) => sum + win[elf][opponent] + score[elf], 0);

  //return example.reduce((sum, [opponent, elf]) => sum + win[elf][opponent] + score[elf][opponent], 0);
}
