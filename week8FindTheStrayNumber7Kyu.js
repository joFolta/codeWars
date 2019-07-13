// You are given an odd-length array of integers, in which all of them are the same, except for one single number.
//
// Complete the method which accepts such an array, and returns that single different number.
//
// The input array will always be valid! (odd-length >= 3)
//
// Examples
// [1, 1, 2] ==> 2
// [17, 17, 3, 17, 17, 17, 17] ==> 3
// FUNDAMENTALS NUMBERS ALGORITHMS

//MY SOLUTION
function stray(numbers) {
  let same = 0
  //COMPARE [0] AND [1],
    // IF SAME, NEITHER IS CULPRIT AND KEEP CHECKING (LOOP)
    // IF DIFF, ONE OF THEM IS CULPRIT, COMPARE [1] AND [2]
          // IF SAME, THEN [0] IS CULPRIT
          // IF DIFF, THEN [1] IS CULPRIT
  if(numbers[0] === numbers[1]){
    same = numbers[0]
    for(let i=2; i<numbers.length; i++){
      if(numbers[i] !== same){
        return numbers[i]
      }
    }
  } else if(numbers[1] === numbers[2]){
  return numbers[0]
  } else {
  return numbers[1]
  }
}

// MY TESTS
// [1, 1, 2]
// 2

// OTHER SOLUTION
function stray(numbers) {
  var a = numbers.sort();

  if(a[0] != a[1]) {
    return a[0]
  }
  return a[a.length-1]
}

//SAMPLE TESTS
Test.assertSimilar(stray([1, 1, 2]), 2);
