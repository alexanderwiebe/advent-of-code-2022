import { input } from './data';

export function day01p1() {
  let example = [199, 200, 208, 210, 200, 207, 240, 269, 260, 263];

  console.log(
    example.filter((val, i, ex) => (i == 0 ? false : val > ex[i - 1])).length,
  );

  console.log(
    input.filter((val, i, ex) => (i == 0 ? false : val > ex[i - 1])).length,
  );
}
