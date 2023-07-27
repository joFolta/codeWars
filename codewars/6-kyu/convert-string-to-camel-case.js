/*
https://www.codewars.com/kata/517abf86da9663f1d2000003

6 kyu
Convert string to camel case

Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case). The next words should be always capitalized.

Examples
"the-stealth-warrior" gets converted to "theStealthWarrior"

"The_Stealth_Warrior" gets converted to "TheStealthWarrior"

"The_Stealth-Warrior" gets converted to "TheStealthWarrior"
*/

// time complexity: linear time O(n)
// space complexity: constant space O(1)
function toCamelCase(str) {
  return str
    .replace(/_/g, "-")
    .split("-")
    .map((word, i) =>
      i === 0 ? word : word[0].toUpperCase() + word.substring(1)
    )
    .join("");
}

// nice use of regex from the solutions page
// https://www.codewars.com/kata/517abf86da9663f1d2000003/solutions/javascript
function toCamelCase(str) {
  return str.replace(/[-_](.)/g, (_, c) => c.toUpperCase());
}
// comment by Krakonosh
// 1. _ (Underscore) as a parameter name means that that parameter will not be used in the function (i.e. it is unnecessary to get the desired return, so doesn't deserve a name.)---
// 2. He creates a separate regexp capture group by having the dot in the parantheses.---
// 3. So the whole match is underscore|hyphen + a letter but he also has just the letter as a separate capture group 1.
// 4. first parameter is the whole match including the underscore|hyphen + the letter (e.g. "-s") and is not used.---
// 5. the second parameter is capture group 1, which is only the letter part of the whole match.---
// 6. he converts only parameter 2 (i.e. capture group 1) to uppercase and returns that to be used as replacement.
