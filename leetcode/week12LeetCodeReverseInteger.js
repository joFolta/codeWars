// https://leetcode.com/problems/reverse-integer/
//
// Given a 32-bit signed integer, reverse digits of an integer.
//
// Example 1:
//
// Input: 123
// Output: 321
// Example 2:
//
// Input: -123
// Output: -321
// Example 3:
//
// Input: 120
// Output: 21
// Note:
// Assume we are dealing with an environment which could only store integers within the 32-bit signed integer range: [−231,  231 − 1]. For the purpose of this problem, assume that your function returns 0 when the reversed integer overflows.

function reverse(x){
  let min = -Math.pow(2,31)
  let max = (-min)-1
  let result = 0
  if (x>=0){
    result = Number(x.toString().split("").reverse().join(""))
    return result>=max ? 0:result
  } else {
    // if negative
    // SEPARARTE ARRAY.POP() METHOD B/C IT RETURNS "POPPED OFF" LAST ELEMENT AND NOT THE ARRAY ITSELF
    let result = x.toString().split("").reverse()
    result.pop()
    result = -Number(result.join(""))
    return result<=min ? 0:result
  }
}
reverse(123)












// OTHER SOLUTION
const reverse = x => {
    const limit = 2147483648;
    const k = x < 0 ? -1 : 1;
    const n = Number(String(Math.abs(x)).split('').reverse().join(''));
    return n > limit ? 0 : n * k;
};











//
