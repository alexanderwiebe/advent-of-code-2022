import { startOfPacketMarker } from './day06p2';

describe('day 06 p2', () => {
  it('should day 06 p1 work', () => {
    expect(startOfPacketMarker('mjqjpqmgbljsphdztnvjfqwrcgsmlb', 4)).toBe(7);
    expect(startOfPacketMarker('bvwbjplbgvbhsrlpgdmjqwftvncz', 4)).toBe(5);
    expect(startOfPacketMarker('nppdvjthqldpwncqszvftbrmjlhg', 4)).toBe(6);
    expect(startOfPacketMarker('nznrnfrfntjfmvfwmzdfjlvtqnbhcprsg', 4)).toBe(10);
    expect(startOfPacketMarker('zcfzfwzzqfrljwzlrfnpqdbhtmscgvjw', 4)).toBe(11);
  });

  it('should day 06 p2 work', () => {
    expect(startOfPacketMarker('mjqjpqmgbljsphdztnvjfqwrcgsmlb', 14)).toBe(19);
    expect(startOfPacketMarker('bvwbjplbgvbhsrlpgdmjqwftvncz', 14)).toBe(23);
    expect(startOfPacketMarker('nppdvjthqldpwncqszvftbrmjlhg', 14)).toBe(23);
    expect(startOfPacketMarker('nznrnfrfntjfmvfwmzdfjlvtqnbhcprsg', 14)).toBe(29);
    expect(startOfPacketMarker('zcfzfwzzqfrljwzlrfnpqdbhtmscgvjw', 14)).toBe(26);
  });
});
