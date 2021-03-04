/* 
https://www.codewars.com/kata/5656b6906de340bd1b0000ac

7 kyu
Two to One

Take 2 strings s1 and s2 including only letters from ato z.Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

Examples:
  a = "xyaabbbccccdefww"
b = "xxxxyyyyabklmopq"
longest(a, b) - > "abcdefklmopqwxy"

a = "abcdefghijklmnopqrstuvwxyz"
longest(a, a) - > "abcdefghijklmnopqrstuvwxyz"
*/

function longest(s1, s2) {
  return [...new Set((s1 + s2).split('').sort())].join('')
}