/* https://www.codewars.com/kata/576757b1df89ecf5bd00073b/train/javascript

6 kyu
Build Tower

Build a pyramid-shaped tower, as an array/list of strings, given a positive integer number of floors. A tower block is represented with "*" character.

For example, a tower with 3 floors looks like this:

[
  "  *  ",
  " *** ", 
  "*****"
]
And a tower with 6 floors looks like this:

[
  "     *     ", 
  "    ***    ", 
  "   *****   ", 
  "  *******  ", 
  " ********* ", 
  "***********"
]
Go challenge Build Tower Advanced once you have finished this :)
*/

function towerBuilder(nFloors) {
  const tower = [];
  let stars = "*";
  for (let i = 0; i < nFloors; i++) {
    const spaces = " ".repeat(nFloors - 1 - i);
    tower.push(`${spaces}${stars}${spaces}`);
    stars += "**";
  }
  return tower;
}