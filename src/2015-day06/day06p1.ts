import * as fs from 'node:fs';
/*
import * as fs from 'node:fs';

fs.readFileSync(filename)
    .toString()
    .split('\n')
*/

export function day06p1() {
    const input = fs.readFileSync('src/2015-day06/data.txt').toString().split('\n');
    // const grid = getGrid(5);
    // changeRect(grid, [1, 1], [2, 4], 1);
    // toggleRect(grid, [0, 0], [4, 2]);
    // console.info(grid);
        
    console.info(runner(input.map(parseInstruction)));
}

type InstructionAction = 'turn on' | 'turn off' | 'toggle';

interface Instruction {
    action: InstructionAction;
    start: [number, number];
    end: [number, number];
}

const parseInstruction = (instruction: string): Instruction => {
    const re = /(?<action>[a-z\s]+) (?<x1>[0-9]+),(?<y1>[0-9]+) through (?<x2>[0-9]+),(?<y2>[0-9]+)/;
    const groups = instruction.match(re)?.groups;

    if (!groups) { throw new Error('Your expectations have failed') }

    const start: [number, number] = [+groups.x1, +groups.y1];
    const end: [number, number] = [+groups.x2, +groups.y2];

    return {
        start,
        end,
        action: groups.action as InstructionAction
    }
}

/**
 * Returns a Grid with `dimension` rows and columns:
 * 
 * 3 => [[0, 0, 0]
 *       [0, 0, 0]
 *       [0, 0, 0]]
 */
function getGrid(dimension: number): number[][] {
    return Array.from({ length: dimension }, () => Array.from({ length: dimension }, () => 0));
}

function changeRect(grid: number[][], start: [number, number], end: [number, number], value: number): void {

    const width = 1 + end[0] - start[0] // 1 + 5 - 4 = 2;
    const height = 1 + end[1] - start[1] // 1 + 5 - 4 = 2;

    const rowFill = Array.from({ length: width }, () => value);

    for (let i = 0; i < height; i++) {
        const offset = i + start[1];
        
        grid[offset] = [
            // [...old],
            ...grid[offset].slice(0, start[0]),
            // [...fill]
            ...rowFill,
            // [...old]]
            ...grid[offset].slice(end[0] + 1)
        ];
    }
}

function toggleRect(grid: number[][], start: [number, number], end: [number, number]): void {
    for (let col = start[0]; col <= end[0]; col++) {
        for (let row = start[1]; row <= end[1]; row++) {
            grid[row][col] = grid[row][col] === 0 ? 1 : 0;
        }
    }
}

function runner(instructions: Instruction[]): number {
    const dimension = 1000;    
    const grid = getGrid(dimension);

    /**
     * // Assert: grid should have a total of 1000 * 1000 lightbulbs
     * if(grid.flat().length !== dimension * dimension) {
     *   throw new Error('Unexpected starting grid length');
     * }
     */

    instructions.forEach((ins) => {
        switch (ins.action) {
            case 'toggle':
                toggleRect(grid, ins.start, ins.end);
                break;
            case 'turn off':
                changeRect(grid, ins.start, ins.end, 0);
                break;
            case 'turn on':
                changeRect(grid, ins.start, ins.end, 1);
                break;
            default:
                throw new Error('unexpected instruction');
            }
    });

    /**
     * // Assert: grid should have a total of 1000 * 1000 lightbulbs
     * if(grid.flat().length !== dimension * dimension) {
     *   throw new Error('Unexpected output grid length');
     * }
     */

    return grid.flat().filter(v => v === 1).length;
}
