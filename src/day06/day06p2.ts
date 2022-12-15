import { input } from './data';

export function startOfPacketMarker(dataStream: string, uniqueCharacters: number): number {
  //   return (dataStream.match(/(.)(?!\1)(.)(?!\1|\2)(.)(?!\1|\2|\3)(.)/)?.index ?? 0) + 4;
  return (dataStream.match(getUniqueRegex(uniqueCharacters))?.index ?? 0) + uniqueCharacters;
}

export function getUniqueRegex(uniqueCharacters: number): string {
  let regex = '(.)(?!\\1)(.)';
  let repeating = '\\1';
  for (let i = 2; i < uniqueCharacters; i++) {
    regex += '(?!';

    repeating += `|\\${i}`;

    regex += repeating;
    regex += ')(.)';
  }
  /*
(.)(?!\1)(.)(?!\1|\2)(.)(?!\1|\2|\3)(.)(?!\1|\2|\3|\4)(.)(?!\1|\2|\3|\4|\5)(.)(?!\1|\2|\3|\4|\5|\6)(.)(?!\1|\2|\3|\4|\5|\6|\7)(.)(?!\1|\2|\3|\4|\5|\6|\7|\8)(.)(?!\1|\2|\3|\4|\5|\6|\7|\8|\9)(.)(?!\1|\2|\3|\4|\5|\6|\7|\8|\9|\10)(.)(?!\1|\2|\3|\4|\5|\6|\7|\8|\9|\10|\11)(.)(?!\1|\2|\3|\4|\5|\6|\7|\8|\9|\10|\11|\12)(.)(?!\1|\2|\3|\4|\5|\6|\7|\8|\9|\10|\11|\12|\13)(.)

*/
  console.log(regex);
  return regex; // '(.)'+'(?!\\1)(.)'+'(?!\\1|\\2)(.)'+'(?!\\1|\\2|\\3)(.)';
}

export function day06p2() {
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

  return startOfPacketMarker(input[0], 14);
}

console.log(day06p2());
