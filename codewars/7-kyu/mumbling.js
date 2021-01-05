/*
https://www.codewars.com/kata/5667e8f4e3f572a8f2000039

7 kyu
Mumbling

This time no story, no theory. The examples below show you how to write function accum:

Examples:

accum("abcd") -> "A-Bb-Ccc-Dddd"
accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt") -> "C-Ww-Aaa-Tttt"
The parameter of accum is a string which includes only letters from a..z and A..Z.
*/

function accum(s) {
  const arr = s.toUpperCase().split('')
  for (let i=0; i<arr.length; i++) {
    const letter = arr[i].toLowerCase()
    for (let j=0; j<i; j++) {
      arr[i] = arr[i] + letter
    }
  }
  return arr.join('-')
}

function accum(s) {
  return s.split('').map((char,i) => char.toUpperCase() + char.toLowerCase().repeat(i)).join('-')
}
