/*
https://www.codewars.com/kata/5526fc09a1bbd946250002dc

6 kyu
Find The Parity Outlier

You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Write a method that takes the array as an argument and returns this "outlier" N.

Examples
[2, 4, 0, 100, 4, 11, 2602, 36]
Should return: 11 (the only odd number)

[160, 3, 1719, 19, 11, 13, -21]
Should return: 160 (the only even number)
*/

function findOutlier(integers) {
  let indexA = 0
  let indexB = 1
  let indexC = 2
  let type = (index) => !!(integers[index] % 2)// odd/true, even/false
  if (type(indexA) !== type(indexB) && type(indexA) !== type(indexC)) {
    return integers[indexA]
  } else {
  while (type(indexA) === type(indexB)) {
    indexA++
    indexB++
  }
  return integers[indexB]
  }
}