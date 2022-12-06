import { input } from './data';

export function day01p1() {
  let example = [
    ['A', 'Y'],
    ['B', 'X'],
    ['C', 'Z'],
  ];

  /* part 1 
  This strategy guide predicts and recommends the following:

    In the first round, your opponent will choose Rock (A), and you should choose Paper (Y). This ends in a win for you with a score of 8 (2 because you chose Paper + 6 because you won).
    In the second round, your opponent will choose Paper (B), and you should choose Rock (X). This ends in a loss for you with a score of 1 (1 + 0).
    The third round is a draw with both players choosing Scissors, giving you a score of 3 + 3 = 6.

  */
  return Math.max(...input.map((nums) => nums.reduce((sum, val) => sum + val)));
}
