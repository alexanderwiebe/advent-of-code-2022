import { contains } from './day04p2';

/*

       x   x

   xx          x
    xx        xx
     xx       x
      xx     xx
       xxxxxxx

*/

describe('day 04p2', () => {
  it('should contain when a is in c and d', () => {
    expect(contains([2, 4], [1, 8])).toBeTruthy();
  });

  it('should contain when b is in c and d', () => {
    expect(contains([3, 4], [2, 4])).toBeTruthy();
  });

  it('should contain when c is in a and b', () => {
    expect(contains([2, 4], [3, 5])).toBeTruthy();
  });

  it('should contain when d is in a and b', () => {
    expect(contains([3, 5], [2, 4])).toBeTruthy();
  });

  it('should not contain when a is not in c and d', () => {
    expect(contains([2, 4], [5, 8])).toBeFalsy();
  });

  it('should not contain when b is not in c and d', () => {
    expect(contains([3, 4], [5, 8])).toBeFalsy();
  });

  it('should not contain when c is not in a and b', () => {
    expect(contains([3, 4], [1, 2])).toBeFalsy();
  });

  it('should not contain when d is not in a and b', () => {
    expect(contains([3, 5], [1, 2])).toBeFalsy();
  });
});
