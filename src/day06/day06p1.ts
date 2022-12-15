import { input } from './data';

export function startOfPacketMarker(dataStream: string): number {
  return (dataStream.match(/(.)(?!\1)(.)(?!\1|\2)(.)(?!\1|\2|\3)(.)/)?.index ?? 0) + 4;
}

export function day06p1() {
  /* Part 1 
  
  To fix the communication system, you need to add a subroutine to the device that detects a
  start-of-packet marker in the datastream. 
  
  In the protocol being used by the Elves, the 
  start of a packet is indicated by a sequence of four characters that are all different.

  How many characters need to be processed before the first start-of-packet marker is detected?

  */

  let example = [
    'mjqjpqmgbljsphdztnvjfqwrcgsmlb',
    'bvwbjplbgvbhsrlpgdmjqwftvncz',
    'nppdvjthqldpwncqszvftbrmjlhg',
    'nznrnfrfntjfmvfwmzdfjlvtqnbhcprsg',
    'zcfzfwzzqfrljwzlrfnpqdbhtmscgvjw',
    'mjqjpqmgbljssphdztnvjfqwrcgsmlb',
  ];

  console.log(example[1].match(/(.)(?!\1)(.)(?!\1|\2)(.)(?!\1|\2|\3)(.)/));
  console.log(example[4].match(/(.)(?!\1)(.)(?!\1|\2)(.)(?!\1|\2|\3)(.)/)?.index ?? 0 + 4);

  return startOfPacketMarker(input[0]);
}

console.log(day06p1());
