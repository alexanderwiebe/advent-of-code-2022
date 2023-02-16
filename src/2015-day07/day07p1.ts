import * as fs from 'node:fs';
/*
import * as fs from 'node:fs';

fs.readFileSync(filename)
    .toString()
    .split('\n')
*/

/*
* bitwise and &
* bitwise or |
* lshift >>
* rshift <<
* not ~
* assign
*/

/**
 * 
 * {
 *   'var-name': {
 *     value: number | undefined;
 *     queue: [...'other-var-names'],
 *   }
 * }
 * 
 */

export function day07p1() {
    const input = fs.readFileSync('src/2015-day07/data.txt').toString().split('\n');
    // const input = fs.readFileSync('src/2015-day07/data-example.txt').toString().split('\n');
    const tree = buildTree(input);

    const start = 'a';
    parseTree(tree, start);
    console.log(tree[start]);
    console.log(tree);
}

enum Operator {
    AND = 'AND',
    OR = 'OR',
    NOT = 'NOT',
    ASL = 'LSHIFT',
    ASR = 'RSHIFT',
    ASSIGN = '->'
}

interface Signal {
    operator: Operator;
    output: string;
    inputs: (number | string)[];
}

function buildTree(input: string[]): Record<string, string> {
    let instructionMap: Record<string, string> = {};

    for (const line of input) {
        const [instructor, wireName] = line.split(' -> ');
        instructionMap = {
            ...instructionMap,
            [wireName]: instructor
        };
    }
    return instructionMap;
}

function parseTree(tree2Parse: Record<string, string | number>, key: string): string | number {
    const instruction = tree2Parse[key];
    console.log({key, instruction});

    if (typeof instruction === 'number' || instruction.toString().match(/^\d+$/)) {
        tree2Parse[key] = Number(instruction);
        return tree2Parse[key];
    }
    
    const datums = String(instruction).split(' ');
    switch (datums.length) {
        case 1: // lx -> a
            tree2Parse[key] = parseTree(tree2Parse, datums[0]);
            break;
        case 2: // Not ed -> ee
            tree2Parse[key] = not(Number(parseTree(tree2Parse, datums[1])));
            break;
        case 3: // jr OP js -> ju
            const [lop, operator, rop] = datums;
            
            switch(operator){
                case Operator.AND:
                    if (!isNaN(parseInt(lop))) {
                        tree2Parse[key] = and(Number(lop), Number(parseTree(tree2Parse, rop)));
                    } else {
                        tree2Parse[key] = and(Number(parseTree(tree2Parse, lop)), Number((parseTree(tree2Parse, rop))));
                    }
                    break;
                case Operator.OR:

                    tree2Parse[key] = or(Number(parseTree(tree2Parse, lop)), Number(parseTree(tree2Parse, rop)));
                    break;
                case Operator.ASL:
                    tree2Parse[key] = asl(Number(parseTree(tree2Parse, lop)), Number(rop));
                    break;
                case Operator.ASR:
                    tree2Parse[key] = asr(Number(parseTree(tree2Parse, lop)), Number(rop));
                    break;
                default:
                    throw('double yikes');
            }
            break;
        default:
            throw ('yikes');
    }
    
    return tree2Parse[key];
}

/**
 * NOT bitwise operator for 16 bit numbers
 */
function not(value: number): number {
    // NOT 123 -> 65412
    // NOT 65412 -> 123
    // NOT 456 -> 65079
    // NOT 65079 -> 456

    const NUMBER_OF_BITS = 16;

    // Convert to binary string
    const binary = Number(value).toString(2)
    // Pad with 0's to be a 16-bit number
        .padStart(NUMBER_OF_BITS, '0');

    // Flip all the bits
    const resultingBinary = Array.from(binary.padStart(NUMBER_OF_BITS, '0'))
        .map(bit => bit === '1' ? '0' : '1')
        .join('');

    // Parse string to number
    return parseInt(resultingBinary, 2);
}

function and(x:number, y:number): number {
    console.log('and', {x,y, result: x & y});
    return x & y;
}

function or(x:number, y:number): number {
    return x | y;
}

function asl(value:number, rop: string | number): number {
    return value << parseInt(String(rop));
}

function asr(value: number, rop: string | number): number {
    return value >> parseInt(String(rop));
}
