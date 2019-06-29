// Summation
// Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.
//
// For example:
//
// summation(2) -> 3
// 1 + 2
//
// summation(8) -> 36
// 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8
// FUNDAMENTALS LOOPS CONTROLFLOW BASICLANGUAGEFEATURES

// MY SOLUTION
var summation = function (num) {
  let result = num
  for(let i = 1; i < num; i++){
    result += i
  }
  return result
}

//ALTERNATIVE FORMAT
function summation (num) {
  let summation = num
  for(let i = 1; i < num; i++){
    summation = summation + i
  }
  return summation
}

// MY TESTS
// summation(8)
// 36

// SAMPLE TESTS
// describe('summation', function () {
//   it('should return the correct total', function () {
//     Test.assertEquals(summation(1), 1)
//     Test.assertEquals(summation(8), 36)
//   })
// })
