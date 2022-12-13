import { readInput, parseStacks, parseMoves } from "./day05p1";

export function day05p2(): void {
    const inputs = readInput('./src/day05/raw-data.txt');
    const stacks = parseStacks(inputs[0]);
    const moves = parseMoves(inputs[1]);

    
    // apply moves
    for (const move of moves) {
        const crates = stacks[move.from].splice(0, move.count)
    
        stacks[move.to] = [...crates, ...stacks[move.to]];
        
    }

    console.log(Object.values(stacks as string[][]).map(v => v[0]).join(''));
}