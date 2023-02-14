/*
https://www.codewars.com/kata/578aa45ee9fd15ff4600090d/train/javascript

6 kyu
Sort the odd

Task
You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.

Examples
[7, 1]  =>  [1, 7]
[5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
[9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]
*/

function sortArray(array) {
  const oddIndices = [];
  const oddValues = [];
  array.forEach((n, i) => {
    if (n % 2) {
      oddIndices.push(i);
      oddValues.push(n);
    }
  });
  oddValues.sort((a, b) => a - b);
  oddIndices.forEach((index) => {
    array.splice(index, 1, oddValues[0]);
    oddValues.shift();
  });

  return array;
}