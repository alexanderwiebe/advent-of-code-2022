import * as fs from 'node:fs';
/*
import * as fs from 'node:fs';

fs.readFileSync(filename)
    .toString()
    .split('\n')
*/

const NOT_NICE_SUBSTRINGS = ['ab', 'cd', 'pq', 'xy'];
const VOWELS = ['a', 'e', 'i', 'o', 'u'];

function wordIsNice(word: string): boolean {
    if (NOT_NICE_SUBSTRINGS.some(w => word.includes(w))) {
        return false;
    }

    let prevChar: string | null = null;

    let vowelCount = 0;
    let pairFound = false;

    for (const char of word) {
        // console.log(char);
        if (char === prevChar) {
            pairFound = true;
        }

        if (VOWELS.some(vowel => vowel === char)) {
            vowelCount++;
        }

        prevChar = char;
    }
    
    return vowelCount >= 3 && pairFound;
}

export function day05p1() {
    const input = fs.readFileSync('./src/2015-day05/data.txt').toString().split('\n');
    // const input = [
    //     'ugknbfddgicrmopn',
    //     'aaa',
    //     'jchzalrnumimnmhp',
    //     'haegwjzuvuyypxyu',
    //     'dvszwmarrgswjxmb',
    // ];

    console.log(runner(input));
}

function runner(input: string[]): number {
    return input.filter(wordIsNice).length;
}
