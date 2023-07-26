/*
https://www.codewars.com/kata/54da539698b8a2ad76000228

6 kyu
Take a Ten Minutes Walk

You live in the city of Cartesia where all roads are laid out in a perfect grid. You arrived ten minutes too early to an appointment, so you decided to take the opportunity to go for a short walk. The city provides its citizens with a Walk Generating App on their phones -- everytime you press the button it sends you an array of one-letter strings representing directions to walk (eg. ['n', 's', 'w', 'e']). You always walk only a single block for each letter (direction) and you know it takes you one minute to traverse one city block, so create a function that will return true if the walk the app gives you will take you exactly ten minutes (you don't want to be early or late!) and will, of course, return you to your starting point. Return false otherwise.

Note: you will always receive a valid array containing a random assortment of direction letters ('n', 's', 'e', or 'w' only). It will never give you an empty array (that's not a walk, that's standing still!).
*/

// 10 minutes
// 1 min per block
// length must exactly be 10!
// have to account for 4 variables N, S, E, W - actually 2 axis, X and Y
// return true/false boolean - 10 min and back to starting point (N, S, E, W all cancel out)
// start at coordinates 0, 0 and return to 0, 0

// time complexity: O(1) constant time - not O(n) linear time b/c func stops if length is larger than 10 (input size does not matter)
// space complexity: O(1) constant space - x and y are the only things stored in memory and memory requirements do not increase based on input size
function isValidWalk(walk) {
  if (walk.length !== 10) {
    return false
  }
  
  let x = 0
  let y = 0
  
  walk.forEach(block => {
    if (block === 'n') {
      y++
      console.log('n', y)
    } else if (block === 's') {
      y--
      console.log('s', y)
    } else if (block === 'e') {
      x++
      console.log('e', x)
    } else if (block === 'w') {
      x--
      console.log('w', x)
    }
  })
  
  console.log('x', x)
  console.log('y', y)
  
  return x===0 && y===0
}