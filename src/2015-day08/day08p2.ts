import * as fs from 'node:fs';
/*
import * as fs from 'node:fs';

fs.readFileSync(filename)
    .toString()
    .split('\n')
*/

export function day08p2() {
    const input = fs.readFileSync('src/2015-day08/data.txt').toString().split('\n');
    // const input = fs.readFileSync('src/2015-day08/sample.txt').toString().split('\n');
    console.log(runner(input));
}

function runner(input: string[]): number {    
    return input.reduce((sum, value) => {
        return sum + value.replace(/[^\\"]/g, '').length + 2;

        //   " + original + escaped characters + "
        //-  original
        //-------------------------------------------
        // " + escaped characters  + "
    }, 0);
}
