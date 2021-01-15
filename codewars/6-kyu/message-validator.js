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

// only works for single digit nums
function isAValidMessage(message) {
  console.log(message)
  // if (!message) return true
  for (let i=0; i<message.length; i++) {
    if (!/\d/.test(message[0])) return false
    if (/\d/.test(message[i])) {
      
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

// seems to work for 2 digit nums
function isAValidMessage(message) {
  console.log(message)
  
  for (let i = 0; i < message.length; i++) {
    if (!/\d/.test(message[0])) return false
    
    let j = 1
    let jMax = message[i]
    if (/\d/.test(message[i])) {
      // account for 2 digit num
      if (/\d/.test(message[i+1])) {
        j = 2
        jMax = Number(`${message[i]} + ${message[i+1]}`)
      }

      for (j; j <= jMax; j++) {
        console.log(i, j)
        if (/\d/.test(message[i + j]) || !message[i + j]) {
          return false
        }
      }
    }
  }
  return true
}

//mostly done....fails on occasional attempts
// make it work for x digit nums
function isAValidMessage(message) {
  console.log(message)
  console.log("_______________")
  
  if (!message) return true
  if (!/\d/.test(message[0])) return false

  for (let i = 0; i < message.length; i++) {
    console.log('*',message[i])
    let letter = 1
    let lastLetter = message[i]
    if (/\d/.test(message[i])) {
    // account for any digit num
    //length 4 , k 1,2,3 i 0,1
      //for (let k=1; k<message.length-i; k++) {
      let k = 1
      while (/\d/.test(message[i + k])) {
        //if (/\d/.test(message[i + k])) {
          letter++
          lastLetter = Number(`${lastLetter}${message[i+k]}`)
          console.log('LL',lastLetter)
          k++
        //}
      }
      
      // check that the above num of letters follows
      for (letter; letter <= lastLetter; letter++) {
        console.log(message[i], message[i+letter], letter, lastLetter)
        if (/\d/.test(message[i + letter]) || !message[i + letter]) {
          return false
        }
      }
    }
  }
  return true
}