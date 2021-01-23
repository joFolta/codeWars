/* 
https://www.codewars.com/kata/54da5a58ea159efa38000836

6 kyu
Find the odd int

Given an array of integers, find the one that appears an odd number of times.

There will always be only one integer that appears an odd number of times.
*/

function findOdd(A) {
  const record = {}
  A.forEach(num => {
    record[num] ?
      record[num] += 1
      :
      record[num] = 1
  })
  return Number(Object.keys(record).find(key => record[key]%2 !== 0))
}