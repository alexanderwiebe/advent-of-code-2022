import { input } from './data';

export function day03p2() {
  let example = [
    'vJrwpWtwJgWrhcsFMMfFFhFp',
    'jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL',
    'PmmdzqPrVvPwwTWBwg',
    'wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn',
    'ttgJtRGJQctTZtZT',
    'CrZsJsPPZsGzwwsLwLmpwMDw',
  ];

  let threeIntersection: string[] = [];

  for (let index = 0; index < input.length; index += 3) {
    const first = new Set(input[index].split(''));
    const middle = new Set(input[index + 1].split(''));
    const last = new Set(input[index + 2].split(''));

    let intersectionFirst = Array.from(first.values()).filter((firstItem) => {
      return middle.has(firstItem);
    });

    let intersectionSecond = Array.from(intersectionFirst.values()).filter((middleItem) => {
      return last.has(middleItem);
    });

    threeIntersection.push(intersectionSecond[0]);
  }

  return threeIntersection
    .map((inter) => inter.charCodeAt(0) - (inter === inter.toUpperCase() ? 38 : 96))
    .reduce((acc, item) => acc + item);
}

console.log(day03p2());
