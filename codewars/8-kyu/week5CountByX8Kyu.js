// Create a function with two arguments that will return a list of length (n) with multiples of (x).
//
// Assume both the given number and the number of times to count will be positive numbers greater than 0.
//
// Return the results as an array (or list in Python, Haskell or Elixir).
//
// Examples:
//
// countBy(1,10) === [1,2,3,4,5,6,7,8,9,10]
// countBy(2,5) === [2,4,6,8,10]
// FUNDAMENTALS ARRAYS NUMBERS

function countBy(x, n) {
  let z = []
  for(let i = 1; i <= n; i++){
    z.push(i*x)
  }
  return z
}
countBy(2,5)
(5) [2, 4, 6, 8, 10]


// TRIAL EXAMPLE TO UNDERSTAND HOW TO PUSH TO ARRAYS
// function countBy(x, n) {
//   let z = []
//   for(let i = 0; i < n; i++){
//     z.push(10,12,13)
//   }
//   return z
// }
// countBy(10,2)
// (6) [10, 12, 13, 10, 12, 13]

// Exponent Example
//
// function power(base, exponent) {
//     var result = 1;
//         for(var count = 0;count < exponent; count++){
//             result *= base
//             console.log(result);}
//         }
//
//     power(2, 10);
// 2
// 4
// 8
// 16
// 32
// 64
// 128
// 256
// 512
// 1024




// Sample Tests:
// Test.assertSimilar(countBy(1,5), [1,2,3,4,5], "Array does not match")
// Test.assertSimilar(countBy(2,5), [2,4,6,8,10], "Array does not match")
