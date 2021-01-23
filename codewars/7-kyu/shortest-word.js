/* 
https://www.codewars.com/kata/57cebe1dc6fdc20c57000ac9

7 kyu
Shortest Word

Simple, given a string of words, return the length of the shortest word(s).

String will never be empty and you do not need to account for different data types.
*/

function findShort(s){
  const words = s.split(' ')
  let shortest = words[0]
  words.forEach(word => {
    if (word.length < shortest.length) {
      shortest = word
    }
  })
  return shortest.length
}

function findShort(s) {
  const words = s.split(' ')
  let shortest = words[0]
  words.forEach(word => {
    word.length < shortest.length ?
      shortest = word : null
  })
  return shortest.length
}

function findShort(s) {
  return Math.min(...s.split(' ').map(word => word.length))
}