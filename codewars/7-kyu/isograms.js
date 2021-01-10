/* 
https://www.codewars.com/kata/54ba84be607a92aa900000f1

7 kyu
Isograms

An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

isIsogram("Dermatoglyphics") == true
isIsogram("aba") == false
isIsogram("moOse") == false // -- ignore letter case
*/

function isIsogram(str) {
  const save = {}
  let result = true
  str.split('').forEach(char => {
    char = char.toLowerCase()
    if (save[char]) {
      result = false
    } else {
      save[char] = 'exists'
    }
  })
  return result
}

function isIsogram(str) {
  return new Set(...str.toLowerCase().split()).size === str.length
}