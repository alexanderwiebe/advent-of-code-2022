import * as fs from 'node:fs';
/*
import * as fs from 'node:fs';

fs.readFileSync(filename)
    .toString()
    .split('\n')
*/

export function day08p1() {
    const input = fs.readFileSync('src/2015-day08/data.txt').toString().split('\n');
    // const input = fs.readFileSync('src/2015-day08/sample.txt').toString().split('\n');
    console.log(runner(input));
}

// "\x##"

// "\*" -> "\\" or "\x"



function runner(input: string[]): number {    
    return input.reduce((sum, value) => {
        const parsedValue = value.slice(1, -1)
        .replace(/\\\\/g, 'W')
        .replace(/\\"/g, 'M')
        .replace(/\\x[0-9a-f]{2}/g, 'A');

        console.log(value, ` -> `, parsedValue);

        return sum + value.length - parsedValue.length;
    }, 0);
}
