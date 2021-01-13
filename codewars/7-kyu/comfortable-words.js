/* 
https://www.codewars.com/kata/56684677dc75e3de2500002b

7 kyu
Comfortable words

A comfortable word is a word which you can type always alternating the hand you type with (assuming you type using a QWERTY keyboard and use fingers as shown in the image below).

That being said, create a function which receives a word and returns true/True if it's a comfortable word and false/False otherwise.

The word will always be a string consisting of only ascii letters from a to z.

[IMAGE]

To avoid problems with image availability, here's the lists of letters for each hand:

Left: q, w, e, r, t, a, s, d, f, g, z, x, c, v, b
Right: y, u, i, o, p, h, j, k, l, n, m
*/

const comfortable_word = word => {
  const left = [ 'q', 'w', 'e', 'r', 't', 'a', 's', 'd', 'f', 'g', 'z', 'x', 'c', 'v', 'b' ]
  const right = [ 'y', 'u', 'i', 'o', 'p', 'h', 'j', 'k', 'l', 'n', 'm' ]
  const odds = word.split('').filter((char,index) => index % 2 !== 0)
  const evens = word.split('').filter((char,index) => index % 2 === 0)
  return (
      odds.every(oddChar => left.indexOf(oddChar) !== -1) 
      && 
      evens.every(evenChar => right.indexOf(evenChar) !== -1)
    )
    ||
    (
      evens.every(oddChar => left.indexOf(oddChar) !== -1) 
      && 
      odds.every(evenChar => right.indexOf(evenChar) !== -1)      
    )
};

const comfortable_word = word => {
  const left = [ 'q', 'w', 'e', 'r', 't', 'a', 's', 'd', 'f', 'g', 'z', 'x', 'c', 'v', 'b' ]
  const right = [ 'y', 'u', 'i', 'o', 'p', 'h', 'j', 'k', 'l', 'n', 'm' ]
  const odds = word.split('').filter((char,index) => index % 2 !== 0)
  const evens = word.split('').filter((char,index) => index % 2 === 0)
  return (
      odds.every(oddChar => left.indexOf(oddChar) !== -1) 
      && 
      evens.every(evenChar => right.indexOf(evenChar) !== -1)
    )
    ||
    (
      evens.every(oddChar => left.indexOf(oddChar) !== -1) 
      && 
      odds.every(evenChar => right.indexOf(evenChar) !== -1)      
    )
};