/*
https://www.codewars.com/kata/525f50e3b73515a6db000b83

6 kyu
Create Phone Number

Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.

Example
createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
The returned format must be correct in order to complete this challenge.

Don't forget the space after the closing parentheses!
*/

function createPhoneNumber(n) {
  return `(${n[0]}${n[1]}${n[2]}) ${n[3]}${n[4]}${n[5]}-${n[6]}${n[7]}${n[8]}${n[9]}`;
}

function createPhoneNumber(n) {
  let phone = "";
  phone += "(";
  for (let i = 0; i < 3; i++) {
    phone += String(n[i]);
  }
  phone += ")";
  phone += " ";
  for (let i = 3; i < 6; i++) {
    phone += String(n[i]);
  }
  phone += "-";
  for (let i = 6; i < 10; i++) {
    phone += String(n[i]);
  }
  return phone;
}

function createPhoneNumber(n) {
  n.splice(-4, 0, "-");
  n.splice(3, 0, " ");
  n.splice(3, 0, ")");
  n.unshift("(");
  return n.join("");
}