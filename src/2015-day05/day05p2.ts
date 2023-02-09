import * as fs from 'node:fs';
/*
import * as fs from 'node:fs';

fs.readFileSync(filename)
    .toString()
    .split('\n')
*/

function wordIsNice(word: string): boolean {
    let matchingPairFound = false;
    let oneLetterRepeatsWithExactlyOneLetterBetweenThem = false;

    for (let i = 1; i < word.length; i++) {
        const [first, ,third] = [word[i - 2], word[i - 1], word[i]];

        if (first === third) {
            oneLetterRepeatsWithExactlyOneLetterBetweenThem = true;
        }

        const pair: [string, string] = [word[i - 1], word[i]];

        if (!matchingPairFound) {
            for (let j = i + 2; j < word.length; j++) {
                const nextPair: [string, string] = [word[j - 1], word[j]];
    
                if (pair[0] === nextPair[0] && pair[1] === nextPair[1]) {
                    matchingPairFound = true;
                    break;
                }
            }
        }
    }

    return oneLetterRepeatsWithExactlyOneLetterBetweenThem && matchingPairFound;
}

export function day05p2() {
    const input = fs.readFileSync('./src/2015-day05/data.txt').toString().split('\n');
    // const input = [
    //     'qjhvhtzxzqqjkmpb',
    //     'xxyxx',
    //     'uurcxstgmygtbstg',
    //     'ieodomkazucvgmuy',
    // ];

    console.log(runner(input));
}

function runner(input: string[]): number {
    return input.filter(wordIsNice).length;
}
