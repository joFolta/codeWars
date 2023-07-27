/*
https://www.codewars.com/kata/52597aa56021e91c93000cb0

5 kyu
Moving Zeros To The End

Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]
*/

// time complexity: O(n) - linear time
// space complexity: O(n) - linear space
function moveZeros(arr) {
  let zeroIndices = [];

  arr.forEach((el, i) => {
    if (el === 0) {
      zeroIndices.push(i);
    }
  });

  // w/o reverse, all indices after the removed 0's shift which is problematic
  zeroIndices.reverse().forEach((i) => {
    arr.splice(i, 1);
  });

  for (let i = 1; i <= zeroIndices.length; i++) {
    arr.push(0);
  }

  return arr;
}

// better answer
function moveZeros(arr) {
  const nonZeros = arr.filter((el) => el !== 0);
  const zeros = arr.filter((el) => el === 0);
  return nonZeros.concat(zeros);
}
