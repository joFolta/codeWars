/* 
https://www.codewars.com/kata/5b728f801db5cec7320000c7

7 kyu
Simple letter removal

In this Kata, you will be given a lower case string and your task will be to remove k characters from that string using the following rule:

- first remove all letter 'a', followed by letter 'b', then 'c', etc...
- remove the leftmost character first.
For example: 
solve('abracadabra', 1) = 'bracadabra' # remove the leftmost 'a'.
solve('abracadabra', 2) = 'brcadabra'  # remove 2 'a' from the left.
solve('abracadabra', 6) = 'rcdbr'      # remove 5 'a', remove 1 'b' 
solve('abracadabra', 8) = 'rdr'
solve('abracadabra',50) = ''
More examples in the test cases. Good luck!
*/

function solve(str, removeCount) {
  if (removeCount>str.length) return ''
  
  const strArr = str.split('')
  let alphabet = 'abcdefghijklmnopqrstuvwxyz'
  let alphIndex = 0
  let letter = alphabet[alphIndex] // 'a'
  for(let i=0; i<removeCount; i++) {
    while (strArr.indexOf(letter) === -1) {
      alphIndex++
      letter = alphabet[alphIndex]
    }
    const indexOfLetter = strArr.indexOf(letter)
    strArr.splice(indexOfLetter, 1)
  }
  return strArr.join('')
}