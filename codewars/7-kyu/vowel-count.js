/*
https://www.codewars.com/kata/54ff3102c1bad923760001f3

7 kyu
Vowel Count

Return the number (count) of vowels in the given string.

We will consider a, e, i, o, u as vowels for this Kata (but not y).

The input string will only consist of lower case letters and/or spaces.
*/

function getCount(str) {
  let count = 0;
  let vowels = ['a', 'e', 'i', 'o', 'u']
  str.split('').map(char => {
    vowels.map(vowel => {
      if(vowel === char) count++
    })
  })
  return count;
}

function getCount(str) {
  let vowels = ['a', 'e', 'i', 'o', 'u']
  return str.split('').filter(char => {
    for (vowel of vowels) {
      if (char === vowel) return true
    }
  }).length
}

const getCount = (str) => str.split('').filter(char => 'aeiou'.includes(char)).length