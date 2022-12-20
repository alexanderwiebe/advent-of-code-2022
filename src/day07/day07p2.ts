import { input } from './data';

let example = [
  //   '$ cd /',
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

export function day07p2(problemInput: string[]) {
  /* Part 1 */

  /* Part 2 */

  /* 
Now, you're ready to choose a directory to delete.

The total disk space available to the filesystem is 70000000. To run the update, you need unused space of at least 30000000. You need to find a directory you can delete that will free up enough space to run the update.

In the example above, the total size of the outermost directory (and thus the total amount of used space) is 48381165; this means that the size of the unused space must currently be 21618835, which isn't quite the 30000000 required by the update. Therefore, the update still requires a directory with total size of at least 8381165 to be deleted before it can run.

To achieve this, you have the following options:

Delete directory e, which would increase unused space by 584.
Delete directory a, which would increase unused space by 94853.
Delete directory d, which would increase unused space by 24933642.
Delete directory /, which would increase unused space by 48381165.
Directories e and a are both too small; deleting them would not free up enough space. However, directories d and / are both big enough! Between these, choose the smallest: d, increasing unused space by 24933642.

Find the smallest directory that, if deleted, would free up enough space on the filesystem to run the update. What is the total size of that directory?

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
  var space = 70_000_000 - fs[0].size;
  return Math.min(...fs.map(({ size }) => size).filter((size) => space + size > 30000000));
  //   return fs.reduce((acc, file) => acc + (file.size < 100000 ? file.size : 0), 0);
}

console.log(day07p2(example));
console.log(day07p2(input.slice(1, input.length)));
