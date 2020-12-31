/*
https://www.codewars.com/kata/5420fc9bb5b2c7fd57000004/javascript

6 kyu
Highest Rank Number in an Array

Complete the method which returns the number which is most frequent in the given input array.If there is a tie
for most frequent number,
return the largest number among them.

Note: no empty arrays will be given.

Examples
[12, 10, 8, 12, 7, 6, 4, 10, 12]-- > 12[12, 10, 8, 12, 7, 6, 4, 10, 12, 10]-- > 12[12, 10, 8, 8, 3, 3, 3, 3, 2, 4, 10, 12, 10]-- > 3
*/

function highestRank(arr) {
  let counter = {}
  arr.map(n => counter[n] ? counter[n]++ : counter[n] = 1)
  console.log(counter)
  let sortedVals = Object.keys(counter).sort((a,b) => counter[b]-counter[a])
  console.log(sortedVals)
  console.log(sortedVals[0])
  return sortedVals[0]
  // return sortedVals[0]
  // return counter[sortedVals[0]] != counter[sortedVals[1]] ? sortedVals[0] : sortedVals[0] > sortedVals[1] ? sortedVals[0] : sortedVals[1]
}