import { input } from './data';

export function day01p2(): number {
  let example = [[1000, 2000, 3000], [4000], [5000, 6000], [7000, 8000, 9000], [10000]];

  /* Part 1 */

  /* Part 2 */

  return input
    .map((nums) => nums.reduce((sum, val) => sum + val))
    .sort((a, b) => a - b)
    .slice(-3)
    .reduce((sum, val) => sum + val);
}
