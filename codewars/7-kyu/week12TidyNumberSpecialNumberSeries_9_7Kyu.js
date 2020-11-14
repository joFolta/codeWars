// Definition
// A Tidy number is a number whose digits are in non-decreasing order.
//
// Task
// Given a number, Find if it is Tidy or not .
//
// Warm-up (Highly recommended)
// Playing With Numbers Series
// Notes
// Number passed is always Positive .
//
// Return the result as a Boolean
//
// Input >> Output Examples
// tidyNumber (12) ==> return (true)
// Explanation:
// The number's digits { 1 , 2 } are in non-Decreasing Order (i.e) 1 <= 2 .
//
// tidyNumber (32) ==> return (false)
// Explanation:
// The Number's Digits { 3, 2} are not in non-Decreasing Order (i.e) 3 > 2 .
//
// tidyNumber (1024) ==> return (false)
// Explanation:
// The Number's Digits {1 , 0, 2, 4} are not in non-Decreasing Order as 0 <= 1 .
//
// tidyNumber (13579) ==> return (true)
// Explanation:
// The number's digits {1 , 3, 5, 7, 9} are in non-Decreasing Order .
//
// tidyNumber (2335) ==> return (true)
// Explanation:
// The number's digits {2 , 3, 3, 5} are in non-Decreasing Order , Note 3 <= 3
//
// Playing with Numbers Series
// Playing With Lists/Arrays Series
// For More Enjoyable Katas
// ALL translations are welcomed
// Enjoy Learning !!
// Zizou
// FUNDAMENTALS NUMBERS BASICLANGUAGEFEATURES ARRAYS LOOPS CONTROLFLOW STRINGS

// MY SOLUTION
function tidyNumber(n){
  let result = n.toString().split("")
  console.log(result)
  for(let i=0; i<result.length-1; i++){
    if (result[i]>result[i+1]){
      return false
    }
  }
  return true
}

//MY TESTS
tidyNumber(123)
//true
tidyNumber(91)
//false
tidyNumber(321)
//false
tidyNumber(1582)
//false
tidyNumber(1239)
//true

//OTHER SOLUTIONS
function tidyNumber(n){
  // spreadsyntax, make array, sort, and join back to string.
  //if string has small value (same order) as original number then return true, else false
  return [...n+=""].sort().join``==n
}





//SAMPLE TESTS
// describe("Basic tests",_=>{
//   Test.assertEquals(tidyNumber(12),true);
//   Test.assertEquals(tidyNumber(102),false);
//   Test.assertEquals(tidyNumber(9672),false);
//   Test.assertEquals(tidyNumber(2789),true);
//   Test.assertEquals(tidyNumber(2335),true);
// });






//
