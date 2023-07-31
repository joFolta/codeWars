/*
https://www.codewars.com/kata/54e6533c92449cc251001667

6 kyu
Unique In Order

Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

For example:

uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
uniqueInOrder([1,2,2,3,3])       == [1,2,3]
 */

// time complexity: O(n) - linear time complexity - as input size grows the iterated loop will take longer
// space complexity: O(n) - linear space complexity - as input size grows the result array will take up more memory
var uniqueInOrder = function (iterable) {
  let curr, next;
  const resultArr = [];
  if (iterable.length) {
    resultArr.push(iterable[0]); // if the array is not empty, always push the first element
  }

  for (let i = 0; i < iterable.length - 1; i++) {
    curr = iterable[i];
    next = iterable[i + 1];
    if (curr !== next) {
      resultArr.push(next);
    }
  }

  return resultArr;
};

// time complexity: O(n) - linear time
// space complexity: O(1) - constant space
var uniqueInOrder = function (iterable) {
  return [...iterable].filter((val, i) => {
    if (val !== iterable[i + 1]) {
      return val;
    }
  });
};
