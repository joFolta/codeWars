// Definition
// Balanced number is the number that * The sum of all digits to the left of the middle digit(s) and the sum of all digits to the right of the middle digit(s) are equal*.
//
// Task
// Given a number, Find if it is Balanced or not .
//
// Warm-up (Highly recommended)
// Playing With Numbers Series
// Notes
// If the number has an odd number of digits then there is only one middle digit, e.g. 92645 has middle digit 6; otherwise, there are two middle digits , e.g. 1301 has middle digits 3 and 0
//
// The middle digit(s) should not be considered when determining whether a number is balanced or not, e.g 413023 is a balanced number because the left sum and right sum are both 5.
//
// Number passed is always Positive .
//
// Return the result as String

//MY SOLUTION
//SHORTER SOLUTION
function balancedNum(number){
  let sumFirstHalf = 0
  let sumLastHalf = 0
  let test = number.toString().split("").map(Number)
  //if even
  if (test.length%2 === 0){
    //add digits
    for(let i=0; i<((test.length/2)-1); i++){
      sumFirstHalf = sumFirstHalf + test[i]
    }
    for(let i=(test.length/2)+1; i<test.length; i++){
      sumLastHalf = sumLastHalf + test[i]
    }
    //odd
  } else {
    for(let i=0; i<((test.length/2)-0.5); i++){
      sumFirstHalf = sumFirstHalf + test[i]
    }
    for(let i=(test.length/2)+0.5; i<test.length; i++){
      sumLastHalf = sumLastHalf + test[i]
    }
  }
  //compare and state Balance/NotBal
  if(sumFirstHalf === sumLastHalf){
    return "Balanced"
  } else {
    return "Not Balanced"
  }
}

//MY SOLUTION
//LONGER SOLUTION
function balancedNum(number){
  let sumFirstHalf = 0
  let sumLastHalf = 0
  //convert number to string
  let test = number.toString()
  //convert string to array by character
  test = test.split("")
  //convert characters to number
  test = test.map(Number)
  console.log(test)
  //if even
  if (test.length%2 === 0){
    //add digits
    for(let i=0; i<((test.length/2)-1); i++){
      sumFirstHalf = sumFirstHalf + test[i]
    }
    for(let i=(test.length/2)+1; i<test.length; i++){
      sumLastHalf = sumLastHalf + test[i]
    }
    //odd
  } else {
    for(let i=0; i<((test.length/2)-0.5); i++){
      sumFirstHalf = sumFirstHalf + test[i]
    }
    for(let i=(test.length/2)+0.5; i<test.length; i++){
      sumLastHalf = sumLastHalf + test[i]
    }
  }
  //compare and state Balance/NotBal
  if(sumFirstHalf === sumLastHalf){
    return "Balanced"
  } else {
    return "Not Balanced"
  }
}



//MY TESTS
balancedNum(95152)
balancedNum(4100023)
balancedNum(56239813)









//EXAMPLES
// Input >> Output Examples
// 1- balancedNum (7) ==> return "Balanced"   .
// Explanation:
// Since , The sum of all digits to the left of the middle digit (0)
//
// and the sum of all digits to the right of the middle digit (0) are equal , then It's Balanced
//
// 2- balancedNum (295591) ==> return "Not Balanced" .
// Explanation:
// Since , The sum of all digits to the left of the middle digits (11)
//
// and the sum of all digits to the right of the middle digits (10) are equal , then It's Not Balanced
//
// Note : The middle digit(s) are 55 .
//
// 3- balancedNum (959) ==> return "Balanced"  .
// Explanation:
// Since , The sum of all digits to the left of the middle digits (9)
//
// and the sum of all digits to the right of the middle digits (9) are equal , then It's Balanced
//
// Note : The middle digit is 5 .
//
// 4- balancedNum (27102983) ==> return "Not Balanced"  .
// Explanation:
// Since , The sum of all digits to the left of the middle digits (10)
//
// and the sum of all digits to the right of the middle digits (20) are equal , then It's Not Balanced
//
// Note : The middle digit(s) are 02 .



//SAMPLE TESTS
// describe(" less than thousand", function()
// {
//     it("Check balanced number", function()
//     {
//         Test.assertEquals(balancedNum(7), "Balanced")
//         Test.assertEquals(balancedNum(959), "Balanced")
//         Test.assertEquals(balancedNum(13), "Balanced")
//         Test.assertEquals(balancedNum(432), "Not Balanced")
//         Test.assertEquals(balancedNum(424), "Balanced")
//     })
//     it("Check Larger number", function()
//     {
//         Test.assertEquals(balancedNum(1024), "Not Balanced")
//         Test.assertEquals(balancedNum(66545), "Not Balanced")
//         Test.assertEquals(balancedNum(295591), "Not Balanced")
//         Test.assertEquals(balancedNum(1230987), "Not Balanced")
//         Test.assertEquals(balancedNum(56239814), "Balanced")
//     })
// })
