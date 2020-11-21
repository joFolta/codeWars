/*
https://www.codewars.com/kata/5464cbfb1e0c08e9b3000b3e

6 kyu
Happy numbers

A happy number is a number defined by the following process: starting with any positive integer, replace the number by the sum of the squares of its digits, and repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1.

Those numbers for which this process ends in 1 are happy numbers, while those that do not end in 1 are unhappy numbers (or sad numbers) (Wikipedia).

Write a function that takes n as parameter and return true if and only if n is an happy number, false otherwise.

Examples
For example number 7 is happy because after a number of steps the computed sequence ends up with a 1: 7, 49, 97, 130, 10, 1

While 3 is not, and would give us an infinite sequence: 3, 9, 81, 65, 61, 37, 58, 89, 145, 42, 20, 4, 16, 37, 58, 89, 145, 42, 20, 4, 16, 37, ...

Happy coding!
*/

function isHappy(n) {
  let newN = n;
  let digits;
  let oldNs = [n];
  while (1) {
    digits = `${newN}`.split('');
    newN = 0;
    for (digit of digits) {
      newN += digit * digit;
    };
    if (newN === 1) {
      return true;
    };
    oldNs.push(newN);
    console.log(oldNs);
    // check if num is repeating / infinite loop
    for (let i=0; i<oldNs.length; i++) {
      for (let j=0; j<oldNs.length; j++) {
        if ((i !== j) && (oldNs[i] === oldNs[j])) {
          return false;
        };
      };
    };
  };
};

function isHappy(n) {
  let newN = n;
  let digits;
  let oldNs = [n];
  while (1) {
    digits = `${newN}`.split('');
    newN = 0;
    for (digit of digits) {
      newN += digit * digit;
    };
    if (newN === 1) {
      return true;
    };
    if (oldNs.find(oldN => oldN === newN)) {
      return false;
    };
    oldNs.push(newN);
  };
};

function isHappy(n) {
  let newN = n;
  let digits;
  let oldNs = [n];
  while (1) {
    digits = `${newN}`.split('');
    newN = 0;
    for (digit of digits) {
      newN += digit * digit;
    };
    if (newN === 1) {
      return true;
    };
    for (oldN of oldNs) {
      if (newN === oldN) {
        return false;
      };
    };
    oldNs.push(newN);
  };
};