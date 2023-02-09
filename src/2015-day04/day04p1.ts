import * as fs from 'node:fs';
import * as crypto from 'node:crypto';
/*
import * as fs from 'node:fs';

fs.readFileSync(filename)
    .toString()
    .split('\n')
*/

export function day04p1() {
    // const input = fs.readFileSync('./src/2015-day04/data.txt').toString();
    const input = "yzbqklnj";
    console.log(runner(input));
}

function runner(input: string): number {
    let solved = false;
    let number = 0;
    while(!solved) {
        const hash = crypto.createHash('md5').update(`${input}${number}`).digest('hex');
        solved = hash.startsWith('00000');
        if (!solved)
            number++;
    }
    return number;
}
