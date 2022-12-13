import * as fs from 'node:fs';

export interface Move {
    from: number;
    to: number;
    count: number;
}

export type Stacks = Record<number, string[]>;

export function readInput(filename: string): string[][] {
    const lines = fs.readFileSync(filename).toString().split("\n");
    const dividerPosition = lines.indexOf('');
    return [
        lines.slice(0, dividerPosition),
        lines.slice(dividerPosition+1)
    ]
}

export function parseMoves(moves: string[]): Move[] {
    return moves.map((m) => {
        const parts = m.split(" ");
        return {
            count: parseInt(parts[1]),
            from: parseInt(parts[3]),
            to: parseInt(parts[5])
        }
    })
};

export function parseStacks(sourceStacks: string[]): Stacks {
    const crateRows = sourceStacks.slice(0, -1);
    const re = /\[[A-Z]\]/g;
    const stacks: Stacks = {};

    for(let i = crateRows.length - 1; i > -1; i--) {
        const crates = [...crateRows[i].matchAll(re)];
        for(let crate of crates) {
            if(typeof crate.index !== 'undefined') {
                const pos = (crate.index / 4) + 1;
                if(!stacks[pos]) { stacks[pos] = []; }
                stacks[pos].unshift(crate[0].charAt(1))
            }
        }
    }

    return stacks;
}

export function day05p1(): void {

    const inputs = readInput('./src/day05/raw-data.txt');
    const stacks = parseStacks(inputs[0]);
    const moves = parseMoves(inputs[1]);

    // apply moves

    for (const move of moves) {
        // console.log(move, stacks);
        for(let count = 0; count < move.count; count++){
           const item = stacks[move.from].shift();
           if(!!item) {
            stacks[move.to].unshift(item);
           }
        }
    }

    console.log(Object.values(stacks as string[][]).map(v => v[0]).join(''));

}

