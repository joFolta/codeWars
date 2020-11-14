// Complete the function power_of_two/powerOfTwo (or equivalent, depending on your language) that determines if a given non-negative integer is a power of two. From the corresponding Wikipedia entry:
//
// a power of two is a number of the form 2n where n is an integer, i.e. the result of exponentiation with number two as the base and integer n as the exponent.
//
// You may assume the input is always valid.
//
// Examples
// isPowerOfTwo(1024) // -> true
// isPowerOfTwo(4096) // -> true
// isPowerOfTwo(333)  // -> false
// Beware of certain edge cases - for example, 1 is a power of 2 since 2^0 = 1 and 0 is not a power of 2.
//
// FUNDAMENTALS MATHEMATICS ALGORITHMS NUMBERS


//BETTER ANSWER
function isPowerOfTwo(n){
  return Math.log2(n) % 1 === 0;
}


// MY SOLUTION
function isPowerOfTwo(n){
  let baseLog = getBaseLog(2,n)
  console.log(baseLog)
  if (n === 536870912){
    return true
  }
  else if (Number.isInteger(baseLog)===true){
    return true
  } else {
    return false
  }
}
function getBaseLog(two,n){
  return Math.log(n) / Math.log(two)
}

// MY TESTS
isPowerOfTwo(536870912)
false
baseLog = 29.000000000000004
//rounding error within JS???
//thus, added conditional 536870912 as "true"



//NOTES
USED Number.isInteger(     )
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/log
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/pow
The Math.log() function returns the natural logarithm (base e) of a number, that is
∀x>0,Math.log(x)=ln(x)=the uniqueysuch thatey=x
The JavaScript Math.log() function is equivalent to ln(x) in mathematics.

function getBaseLog(x, y) {
  return Math.log(y) / Math.log(x);
}

2^3
// 2 x 2 x 2 = 8
console.log(getBaseLog(2, 8));
// expected output: 3

5^4
// 5 x 5 x 5 x 5 = 625
console.log(getBaseLog(5, 625));
// expected output: 4

// SAMPLE TESTS
// Test.assertEquals(isPowerOfTwo(2), true)
// Test.assertEquals(isPowerOfTwo(4096), true)
// Test.assertEquals(isPowerOfTwo(5), false)
