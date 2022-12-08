import { inputs } from './data';
import { itemPriority } from './day03p1'

export function isGroupByThree(group: string[][]): group is [string, string, string][] {
    for (const part of group) {
        if (part.length !== 3) {
            return false;
        }
    }

    return true;
}

export function groupByThree(src: string[]): [string, string, string][] {
    const result: string[][] = [];

    for (let i = 0; i < src.length; i += 3) {
        result.push(src.slice(i, i + 3) as [string, string, string])
    }

    if (isGroupByThree(result)) {
        return result;
    }

    throw new Error("ugh arrays are hard");
}

export function findBadgeCode(input: [string, string, string]): number {
    const badge = input[0].split('')
        .find(char => input[1]
            .includes(char) && input[2].includes(char)
        );

    if (!badge) {
        throw new Error("badges are hard");
    }

    return itemPriority(badge);// thanks mom :D// bye mom :D
}

export function day03p2(): number {
    return groupByThree(inputs).map(findBadgeCode).reduce((sum, val) => sum + val);
}
