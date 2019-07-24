// Definition
// Jumping number is the number that All adjacent digits in it differ by 1.
//
// Task
// Given a number, Find if it is Jumping or not .
//
// Warm-up (Highly recommended)
// Playing With Numbers Series
// Notes
// Number passed is always Positive .
//
// Return the result as String .
//
// The difference between ‘9’ and ‘0’ is not considered as 1 .
//
// All single digit numbers are considered as Jumping numbers.
//
// Input >> Output Examples
// jumpingNumber(9) ==> return "Jumping!!"
// Explanation:
// It's single-digit number
// jumpingNumber(79) ==> return "Not!!"
// Explanation:
// Adjacent digits don't differ by 1
// jumpingNumber(23) ==> return "Jumping!!"
// Explanation:
// Adjacent digits differ by 1
// jumpingNumber(556847) ==> return "Not!!"
// Explanation:
// Adjacent digits don't differ by 1
// jumpingNumber(4343456) ==> return "Jumping!!"
// Explanation:
// Adjacent digits differ by 1
// jumpingNumber(89098) ==> return "Not!!"
// Explanation:
// Adjacent digits don't differ by 1
// jumpingNumber(32) ==> return "Jumping!!"
// Explanation:
// Adjacent digits differ by 1
//
// FUNDAMENTALS NUMBERS MATHEMATICS ALGORITHMS BASICLANGUAGEFEATURES CONDITIONALSTATEMENTS CONTROLFLOW LOOPS

//MY SOLUTION
function jumpingNumber(n){
  let result = n.toString()
  let first = 0
  let sec = 0
  for(let i=0;i<result.length-1; i++){
    first = Number(result[i])
    sec = Number(result[i+1])
    //assume "Jumping!!" and catch "Not!!"-case in loop
    if((first-sec!==1) && (sec-first!==1)){
      return "Not!!"
    }
  }
  return "Jumping!!"
}

//OTHER SOLUTION
function jumpingNumber(n){
  let result = n.toString()
  //absolute value(removes + or - sign)     ...if diff !== +/-1 or abs|1| return "Not!!"
  for(let i=0;i<result.length-1; i++){
    if(Math.abs(Number(result[i])-Number(result[i+1]))!==1){
      return "Not!!"
    }
  }
  return "Jumping!!"
}

jumpingNumber(123)
jumpingNumber(13)
jumpingNumber(12321)
jumpingNumber(64321)

//MY TESTS

//SAMPLE TESTS
// describe("Basic tests",_=>{
//   Test.assertEquals(jumpingNumber(1), "Jumping!!");
//   Test.assertEquals(jumpingNumber(7), "Jumping!!");
//   Test.assertEquals(jumpingNumber(9), "Jumping!!");
//   Test.assertEquals(jumpingNumber(23), "Jumping!!");
//   Test.assertEquals(jumpingNumber(32), "Jumping!!");
//   Test.assertEquals(jumpingNumber(79), "Not!!");
//   Test.assertEquals(jumpingNumber(98), "Jumping!!");
//   Test.assertEquals(jumpingNumber(8987), "Jumping!!");
//   Test.assertEquals(jumpingNumber(4343456), "Jumping!!");
//   Test.assertEquals(jumpingNumber(98789876), "Jumping!!");
// });
