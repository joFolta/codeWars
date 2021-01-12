/* 
https://www.codewars.com/kata/52fba66badcd10859f00097e

7 kyu
Disemvowel Trolls

Trolls are attacking your comment section!

A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

Your task is to write a function that takes a string and return a new string with all vowels removed.

For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

Note: for this kata y isn't considered a vowel.
*/

function disemvowel(str) {
  return str.split('').reduce((acc,char) => isVowel(char) ? acc + '' : acc + char, '')
  
  function isVowel(character) {
    const vowels = ['a','e','i','o','u']
    for (let i=0; i<vowels.length; i++) {
      if (character === vowels[i].toLowerCase() || character === vowels[i].toUpperCase()) {
        return true
      }
    }
    return false
  }
}