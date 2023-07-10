/* https://www.codewars.com/kata/56b1f01c247c01db92000076/train/javascript

8 kyu
Double Char

Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

Examples (Input -> Output):
* "String"      -> "SSttrriinngg"
* "Hello World" -> "HHeelllloo  WWoorrlldd"
* "1234!_ "     -> "11223344!!__  "
Good Luck!
*/

function doubleChar(str) {
  return str
    .split("")
    .map((char) => char.repeat(2))
    .join("");
}
