import { inputs } from './data';

// const inputs = [
//     'vJrwpWtwJgWrhcsFMMfFFhFp',
//     'jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL',
//     'PmmdzqPrVvPwwTWBwg',
//     'wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn',
//     'ttgJtRGJQctTZtZT',
//     'CrZsJsPPZsGzwwsLwLmpwMDw',// inputs here <-- :D
// ]

/*
Lowercase item types a through z have priorities 1 through 26.
Uppercase item types A through Z have priorities 27 through 52.

Goal:
Find the item type that appears in both compartments of each rucksack. 
What is the sum of the priorities of those item types?
*/

const aCode = "a".charCodeAt(0) - 1;// 97 - 1
const ACode = "A".charCodeAt(0) - 1;// 65 - 1

export function itemPriority(item: string): number {
    if (item.length !== 1) {
        throw new Error("Ugh why are strings hard");
    }
    const code = item.charCodeAt(0);
    let capital = (code < aCode);
    
    return code - (capital ? ACode : aCode) + (capital ? 26 : 0);

    // return code - (capital ? (ACode + 27 - 1) : aCode)
}

export function commonCharacter(input: string): string {
    const compartmentLength = input.length / 2;
    const first = input.substring(0, compartmentLength).split('');
    const second = input.substring(compartmentLength).split('');
    
    
    const match = first.find(char => second.includes(char));

    if (!match) {
        throw new Error("Why was there no match, this problem is hard D:");
    }
    return match;
}

export function day03p1(): number {
    // 16 (p), 38 (L), 42 (P), 22 (v), 20 (t), and 19 (s)
    // the sum of these is 157
    // return ['p','L','P','v','t','s'].map(itemPriority).join(',');
    return inputs.map(commonCharacter).map(itemPriority).reduce((sum, val) => sum + val);
}

