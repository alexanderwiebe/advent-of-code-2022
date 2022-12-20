import { input } from './data';

let example = [
  '$ ls',
  'dir a',
  '14848514 b.txt',
  '8504156 c.dat',
  'dir d',
  '$ cd a',
  '$ ls',
  'dir e',
  '29116 f',
  '2557 g',
  '62596 h.lst',
  '$ cd e',
  '$ ls',
  '584 i',
  '$ cd ..',
  '$ cd ..',
  '$ cd d',
  '$ ls',
  '4060174 j',
  '8033020 d.log',
  '5626152 d.ext',
  '7214296 k',
];

export function day07p1(problemInput: string[]) {
  /* Part 1 */

  /*

  formatted example:
  - / (dir)
  - a (dir)
    - e (dir)
      - i (file, size=584)
    - f (file, size=29116)
    - g (file, size=2557)
    - h.lst (file, size=62596)
  - b.txt (file, size=14848514)
  - c.dat (file, size=8504156)
  - d (dir)
    - j (file, size=4060174)
    - d.log (file, size=8033020)
    - d.ext (file, size=5626152)
    - k (file, size=7214296)
  */
  class entry {
    name: string = '';
    files: Array<{ name: string; size: number }> = [];
    directories: number[] = [];
    size: number = 0;
  }
  var currentDirectory = [];
  var fs = new Array<entry>();

  currentDirectory.push(0);
  fs.push({
    name: '/',
    files: [],
    directories: [],
    size: 0,
  } as entry);

  for (let i = 0; i < problemInput.length; i++) {
    if (problemInput[i].startsWith('dir') || problemInput[i].startsWith('$ ls')) {
      continue;
    }
    const logline = problemInput[i].split(' ');
    if (logline[0] === '$' && logline[1] === 'cd') {
      if (logline[2] === '..') {
        currentDirectory.pop();
      } else {
        var dirp =
          fs.push({
            name: logline[2],
            files: [],
            directories: [],
            size: 0,
          } as entry) - 1;
        console.log(dirp);
        fs[currentDirectory.slice(-1)[0]].directories.push(dirp);
        currentDirectory.push(dirp);
      }
    } else {
      console.log(problemInput[i]);
      console.log(currentDirectory.slice(-1)[0]);

      fs[currentDirectory.slice(-1)[0]].files.push({
        name: logline[1],
        size: +logline[0],
      });
    }

    console.log(logline);
  }

  console.log(fs);

  function addDirectoriesToSize(ent: entry): number {
    for (let j = 0; j < ent.directories.length; j++) {
      ent.size += addDirectoriesToSize(fs[ent.directories[j]]);
    }
    let fileSizeList = ent.files.map((file) => file.size);
    if (fileSizeList.length) {
      ent.size += fileSizeList.reduce((acc, size) => acc + size);
    }
    // ent.size += ent.files.map((file) => file.size).reduce((acc, size) => acc + size);
    return ent.size;
  }

  addDirectoriesToSize(fs[0]);

  console.log(fs);

  return fs.reduce((acc, file) => acc + (file.size < 100000 ? file.size : 0), 0);
}

console.log(day07p1(example));
console.log(day07p1(input.slice(1, input.length)));
