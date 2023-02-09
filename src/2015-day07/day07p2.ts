import * as fs from 'node:fs';
/*
import * as fs from 'node:fs';

fs.readFileSync(filename)
    .toString()
    .split('\n')
*/

export function day07p2() {
    const input = fs.readFileSync('src/2015-day07/data.txt').toString();
    console.log(runner(input));
}

function runner(input: string): number {
    return 0;
}
