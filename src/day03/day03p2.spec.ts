import { isGroupByThree, groupByThree, findBadgeCode } from "./day03p2";
import * as day3pt1 from "./day03p1";

describe('isGroupByThree()', () => {
    it('should return true if a group by three', () => {
        expect(isGroupByThree([['1', '2', '3'], ['4', '5', '6']])).toBe(true);
    });// moo

    it('should return false if a group of two', () => {
        expect(isGroupByThree([['1', '2', '3'], ['4', '5']])).toBe(false);
    });
});

describe('groupByThree()', () => {
    it('should return groups of three', () => {
        expect(groupByThree(['1', '2', '3', '4', '5', '6'])).toStrictEqual([
            ['1', '2', '3'],
            ['4', '5', '6'],
        ]);
    });

    it('should throw if argument can\'t be grouped by 3s', () => {
        expect(() => groupByThree(['1', '2', '3', '4', '5'])).toThrow('ugh arrays are hard');
    });
});

describe('findBadgeCode()', () => {
    it('should do a thing', () => {
        const spy = jest.spyOn(day3pt1, 'itemPriority').mockReturnValueOnce(50);

        expect(findBadgeCode(['pie', 'cpw', 'mop'])).toBe(50);

        expect(spy).toHaveBeenCalledWith('p');
    });
});
