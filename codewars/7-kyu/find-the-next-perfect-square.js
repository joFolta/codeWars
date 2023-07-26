/*
https://www.codewars.com/kata/56269eb78ad2e4ced1000013

7 kyu
Find the next perfect square!

You might know some pretty large perfect squares. But what about the NEXT one?

Complete the findNextSquare method that finds the next integral perfect square after the one passed as a parameter. Recall that an integral perfect square is an integer n such that sqrt(n) is also an integer.

If the parameter is itself not a perfect square then -1 should be returned. You may assume the parameter is non-negative.

Examples:(Input --> Output)

121 --> 144
625 --> 676
114 --> -1 since 114 is not a perfect square
*/

// time complexity: O(n) - linear time (while loop based on input)
// space complexity: O(1) - constant space (won't change based on input size)
function findNextSquare(sq) {
  const sqrt = Math.sqrt(sq)
  
  if (sqrt === Math.trunc(sqrt)) {
    let possibleNextSq = sq + 1
    let possibleNextSqSqrt = Math.sqrt(possibleNextSq)
    while (possibleNextSqSqrt !== Math.trunc(possibleNextSqSqrt)) {
      possibleNextSq+=1
      possibleNextSqSqrt = Math.sqrt(possibleNextSq)
    }
    return possibleNextSq
  }
  
  return -1;
}

// The above solution is thinking from the perspective of finding 
// the next square using the sq. 
// Instead, a more simpler approach would be to use 
// the sqrt, add 1 to it, and then multiply it to itself. 

// time complexity: O(1) - constant time
// space complexity: O(1) - constant space
function findNextSquare(sq) {
    const sqRoot = Math.sqrt(sq)
    if (sqRoot === Math.trunc(sqRoot)) {
      const nextSqRoot = sqRoot + 1
      return nextSqRoot * nextSqRoot
    }
    return -1
}

// time complexity: O(1) - constant time
// space complexity: O(1) - constant space
function findNextSquare(sq) {
    const sqRoot = Math.sqrt(sq)
    return sqRoot % 1 === 0 ? Math.pow(sqRoot+1, 2) : -1
}