import { itemPriority, commonCharacter } from "./day03p1";

describe('itemPriority()', () => {
    it('should throw when argument isn\'t a single char', () => {
        expect(() => itemPriority('moo')).toThrow('Ugh why are strings hard');
    });

    it('should return 16 for "p"', () => {
        expect(itemPriority('p')).toBe(16);
    });

    it('should return 42 for "P"', () => {
        expect(itemPriority('P')).toBe(42);
    });
});

describe('commonCharacter()', () => {
    it('should return first match when comparing first and second half of input', () => {
        expect(commonCharacter('moomoo')).toBe('m');
    });

    it('should throw an error if no match is found', () => {
        expect(() => commonCharacter('cows')).toThrow('Why was there no match, this problem is hard D:');
    });
});
