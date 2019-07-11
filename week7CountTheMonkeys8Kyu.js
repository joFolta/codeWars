// You take your son to the forest to see the monkeys. You know that there are a certain number there (n), but your son is too young to just appreciate the full number, he has to start counting them from 1.
//
// As a good parent, you will sit and count with him. Given the number (n), populate an array with all numbers up to and including that number, but excluding zero.
//
// For example, if n = 10:
//
// return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
//
// ALGORITHMS ARRAYS FUNDAMENTALS RANGES BASICLANGUAGEFEATURES LISTS DATASTRUCTURES

// MY SOLUTION
function monkeyCount(n) {
  let numbersToCountWithSon = [];
  for(let i=1; i<=n; i++){
    numbersToCountWithSon[i-1] = i;
  }
  return numbersToCountWithSon
}

// ALTERNATIVELY
//numbersToCountWithSon.push(i)
// instead of     numbersToCountWithSon[i-1] = i;


// MY TESTS
// monkeyCount(10)
// (10) [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
//
// monkeyCount(59)
// (59) [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59]

// SAMPLE TESTS
// Test.describe("monkeyCount", _ => {
//   Test.assertSimilar((monkeyCount(5)), [1, 2, 3, 4, 5]);
//   Test.assertSimilar((monkeyCount(3)), [1, 2, 3]);
//   Test.assertSimilar((monkeyCount(9)), [1, 2, 3, 4, 5, 6, 7, 8, 9]);
//   Test.assertSimilar((monkeyCount(10)), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
//   Test.assertSimilar((monkeyCount(20)), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]);
// });
