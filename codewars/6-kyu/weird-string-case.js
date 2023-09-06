/* https://www.codewars.com/kata/52b757663a95b11b3d00062d

6 kyu
WeIrD StRiNg CaSe

Write a function that accepts a string, and returns the same string with all even indexed characters in each word upper cased, and all odd indexed characters in each word lower cased. The indexing just explained is zero based, so the zero-ith index is even, therefore that character should be upper cased and you need to start over for each word.

The passed in string will only consist of alphabetical characters and spaces(' '). Spaces will only be present if there are multiple words. Words will be separated by a single space(' ').

Examples:
"String" => "StRiNg"
"Weird string case" => "WeIrD StRiNg CaSe"
*/

// time complexity: O(N^2) quadratic time BAD 
// space complexity: O(N)
// Clarification: The question is asking us to capitalize every other character, starting with the first char of every word
function toWeirdCase(string) {
    return string.split(' ').map(word =>
        word.split('').map((char, i) => i % 2 === 0 ? char.toUpperCase() : char.toLowerCase()).join(''))
        .join(' ')
}