import { input } from './data';

export function day03p1() {
  let example = [
    'vJrwpWtwJgWrhcsFMMfFFhFp',
    'jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL',
    'PmmdzqPrVvPwwTWBwg',
    'wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn',
    'ttgJtRGJQctTZtZT',
    'CrZsJsPPZsGzwwsLwLmpwMDw',
  ];

  let exampleThrees = [];
  for (let i = 0; i < example.length; i + 3) {
    exampleThrees.push(example[i] + example[i + 1] + example[i + 2]);
  }

  return input
    .map((sack: string) => {
      let left = new Set(sack.slice(0, sack.length / 2).split(''));
      let right = new Set(sack.slice(sack.length / 2).split(''));
      let intersection = Array.from(left.values()).filter((leftItem) => {
        return right.has(leftItem);
      });

      return intersection
        .map((inter) => {
          if (inter === inter.toUpperCase()) {
            console.log(inter);
            console.log(inter.charCodeAt(0) - 38);
            return inter.charCodeAt(0) - 38;
          } else {
            console.log(inter);
            console.log(inter.charCodeAt(0) - 96);
            return inter.charCodeAt(0) - 96;
          }
        })
        .reduce((acc, item) => acc + item);
    })
    .reduce((acc, item) => acc + item);
}

console.log(day03p1());
