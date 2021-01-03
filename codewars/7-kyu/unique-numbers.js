/*
https://www.codewars.com/kata/568f9bd9cbe89334c900000c

7 kyu
Unique numbers

You have to write a function which returns unique numbers array. You don't need to validate input arg arr. Retain the original order of the input.

Examples:

uniqueNumbers([1,1,2,2]) => [1,2]
uniqueNumbers([1,2,3,1]) => [1,2,3]
*/

function uniqueNumbers(numbersArray) {
  return Array.from(new Set(numbersArray))
}

function uniqueNumbers(numbersArray) {
  return [...new Set(numbersArray)]
}