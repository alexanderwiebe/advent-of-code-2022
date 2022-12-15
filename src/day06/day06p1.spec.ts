import { startOfPacketMarker } from './day06p1';

describe('day 06 p1', () => {
  it('should get the correct first marker on the data stream', () => {
    expect(startOfPacketMarker('mjqjpqmgbljsphdztnvjfqwrcgsmlb')).toBe(7);
    expect(startOfPacketMarker('bvwbjplbgvbhsrlpgdmjqwftvncz')).toBe(5);
    expect(startOfPacketMarker('nppdvjthqldpwncqszvftbrmjlhg')).toBe(6);
    expect(startOfPacketMarker('nznrnfrfntjfmvfwmzdfjlvtqnbhcprsg')).toBe(10);
    expect(startOfPacketMarker('zcfzfwzzqfrljwzlrfnpqdbhtmscgvjw')).toBe(11);
  });
});
