/*
https://www.codewars.com/kata/58a66c208b88b2de660000c3

7 kyu
Simple Fun #136: Missing Values

Task
You are given an array of positive ints where every element appears three times, except one that appears only once(let 's call it x) and one that appears only twice (let'
  s call it y).

Your task is to find x * x * y.

Example
For arr = [1, 1, 1, 2, 2, 3], the result should be 18

3 x 3 x 2 = 18

For arr = [6, 5, 4, 100, 6, 5, 4, 100, 6, 5, 4, 200], the result should be 4000000

200 x 200 x 100 = 4000000

Input / Output[input] integer array arr

an array contains positive integers.

[output] an integer

The value of x * x * y
*/

function missingValues(arr) {
  const sortedArr = arr.sort((a,b) => a-b)
  let solo, twin
  let currN = sortedArr[0]
  let count = 0
  for (let i=0; i<sortedArr.length; i++) {
    if (currN === sortedArr[i]) {
      count++
    } else if (count === 1) {
      solo = currN
      currN = sortedArr[i]
      count = 1
    } else if (count === 2) {
      twin = currN
      currN = sortedArr[i]
      count = 1
    } else {
      currN = sortedArr[i]
      count = 1
    }
  }
  if (!solo) solo = sortedArr[sortedArr.length-1]
  if (!twin) twin = sortedArr[sortedArr.length-1]
  return solo*solo*twin
}