import { input } from './data';

export function day02p1() {
  let example = [
    ['A', 'Y'],
    ['B', 'X'],
    ['C', 'Z'],
  ];

  const score: Record<string, number> = { X: 1, Y: 2, Z: 3 };

  /**
   * returns a key value pair of song and artists
   */
  const win: Record<string, Record<string, number>> = {
    X: { A: 3, B: 0, C: 6 }, // inc by 1
    Y: { A: 6, B: 3, C: 0 }, // inc by 2
    Z: { A: 0, B: 6, C: 3 }, // inc by 3
  };

  return input.reduce((sum, [opponent, elf]) => sum + win[elf][opponent] + score[elf], 0);

  /* part 1 
  1 for Rock, 2 for Paper, and 3 for Scissors
  0 if you lost, 3 if the round was a draw, and 6 if you won
  
  total score of 15 (8 + 1 + 6)

  This strategy guide predicts and recommends the following:

    In the first round, your opponent will choose Rock (A), and you should choose Paper (Y). This ends in a win for you with a score of 8 (2 because you chose Paper + 6 because you won).
    In the second round, your opponent will choose Paper (B), and you should choose Rock (X). This ends in a loss for you with a score of 1 (1 + 0).
    The third round is a draw with both players choosing Scissors, giving you a score of 3 + 3 = 6.

  */
}
