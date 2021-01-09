/*
https://www.codewars.com/kata/5650ab06d11d675371000003

7 kyu
Split In Parts

The aim of this kata is to split a given string into different strings of equal size(note size of strings is passed to the method)

Example:

  Split the below string into other strings of size #3

'supercalifragilisticexpialidocious'

Will return a new string
'sup erc ali fra gil ist ice xpi ali doc iou s'
Assumptions:

String length is always greater than 0
String has no spaces
Size is always positive
*/

// 771ms
var splitInParts = function(s, partLength) {
  const chars = s.split('')
  const newArr = []
  while (chars.length > 0) {
    const subStr = []
    for (let i=0; i<partLength; i++) {
      const firstChar = chars.shift()
      //if (firstChar) {
        subStr.push(firstChar)
      //}
    }
    newArr.push(subStr.join(''))
  }
  return newArr.join(' ')
}

//755ms
var splitInParts = function(s, partLength) {
  const result = []
  for (let i=0; i<s.length; i+=partLength){
    result.push(s.slice(i,i+partLength))
  }
  return result.join(' ')
}