/* 
https://www.codewars.com/kata/5fc7d2d2682ff3000e1a3fbc

6 kyu
Message Validator

In this kata, you have an input string and you should check whether it is a valid message. To decide that, you need to split the string by the numbers, and then compare the numbers with the number of characters in the following substring.

For example "3hey5hello2hi" should be split into 3, hey, 5, hello, 2, hi and the function should return true, because "hey" is 3 characters, "hello" is 5, and "hi" is 2; as the numbers and the character counts match, the result is true.

Notes:

Messages are composed of only letters and digits
Numbers may have multiple digits: e.g. "4code13hellocodewars" is a valid message
Every number must match the number of character in the following substring, otherwise the message is invalid: e.g. "hello5" and "2hi2" are invalid
If the message is an empty string, you should return true
*/

function isAValidMessage(message) {
  console.log(message)
  // if (!message) return true
  for (let i=0; i<message.length; i++) {
    if (!/\d/.test(message[0])) return false
    if (/\d/.test(message[i])) {
      // TODO: need to account for 2,3,... digit number
      for (let j=1; j<=message[i]; j++) {
        console.log(i,j)
        if (/\d/.test(message[i+j]) || !message[i+j]) {
          return false
        }
      }
    }
  }
  return true
}