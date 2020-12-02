/*
https://www.codewars.com/kata/5a092d9e46d843b9db000064

7 kyu
Array element parity

In this Kata, you will be given an array of integers whose elements have both a negative and a positive value, except for one integer that is either only negative or only positive. Your task will be to find that integer.

Examples:

[1, -1, 2, -2, 3] => 3

3 has no matching negative appearance

[-3, 1, 2, 3, -1, -4, -2] => -4

-4 has no matching positive appearance

[1, -1, 2, -2, 3, 3] => 3

(the only-positive or only-negative integer may appear more than once)

Good luck!
*/

function solve(arr) {
  for (let i = 0; i<arr.length; i++) {
    let balanced = false;
   for (let j = 0; j<arr.length; j++) {
     if (arr[i] + arr[j] === 0) {
       balanced = true;
     };
   };
   if (!balanced) {
     return arr[i];
   }
  };
};

function solve(arr) {
  const mySet = new Set(arr);
  for (item of mySet) {
    if (!mySet.has(-item)) {
      return item;
    };
  };
};

function solve(arr) {
  return [...new Set(arr)].reduce((accumulator, current) => accumulator + current)
}