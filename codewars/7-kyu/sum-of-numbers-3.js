/*
https://www.codewars.com/kata/55f2b110f61eb01779000053

7 kyu
Beginner Series #3 Sum of Numbers

Given two integers a and b, which can be positive or negative, find the sum of all the integers between including them too and return it. If the two numbers are equal return a or b.

Note: a and b are not ordered!

Examples
GetSum(1, 0) == 1   // 1 + 0 = 1
GetSum(1, 2) == 3   // 1 + 2 = 3
GetSum(0, 1) == 1   // 0 + 1 = 1
GetSum(1, 1) == 1   // 1 Since both are same
GetSum(-1, 0) == -1 // -1 + 0 = -1
GetSum(-1, 2) == 2  // -1 + 0 + 1 + 2 = 2
*/

function getSum(a, b) {
  let sum = 0
  if (a<b) {
    for (let i=a; i<=b; i++) {
      sum += i
    }
  } else if (b<a) {
    for (let i=b; i<=a; i++) {
      sum += i
    }
  } else { return a }
  return sum
}

function getSum(a, b) {
  if(a==b){ return a }
  let sum=0
  let newA = a
  while(newA<=b) {
    sum += newA
    newA++
  }
  while(b<=a) {
    sum += b
    b++
  }
  return sum
}