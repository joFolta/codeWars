// Definition
// Strong number is the number that the sum of the factorial of its digits is equal to number itself.
//
// For example : 145 , since
// 1! + 4! + 5! = 1 + 24 + 120 = 145
// So, 145 is a Strong number.
//
// Task
// Given a number, Find if it is Strong or not .
//
// Notes
// Number passed is always Positive .
// Return the result as String

//UPDATED SOLUTION
function strong(n){
  let finalSum = 0
  let str = n.toString()
  let factorial = 1
  let maxJ = 0
  for(let i=0; i<str.length; i++){
    factorial = 1
    maxJ = Number(str[i])
    for(let j=2; j<=maxJ; j++){
      factorial *= j
    }
    finalSum += factorial
  }
  return n == finalSum ? "STRONG!!!!" : "Not Strong !!"
}
strong(145)

//2 loops (nested loops)
O(N^2) time complexity


//OLD SOLUTION
function strong(n) {
  let sumAllFactorial = 0

  //convert to String, Array, Number array
  let digits = n.toString().split("").map(Number)

  //Map factorial to new array
  let newDigits = digits.map((element) => {
    //factorial "function"
    let factorial = 1
    for(let i=2; i<=element; i++){
      factorial *= i
    }
    //replaces array element with RETURN value
    return factorial
  })
  console.log(newDigits)

  //sumFactorial
  for(let i=0; i<newDigits.length; i++){
    sumAllFactorial += newDigits[i]
  }
  console.log(sumAllFactorial)

  // compare (ES6+)
    return sumAllFactorial === n ? "STRONG!!!!" : "Not Strong !!"

  //VS (pre-ES6+)
  // if(sumAllFactorial === n){
  //   return "STRONG!!!!"
  // } else {
  //   return "Not Strong !!"
  // }
}


// MY TESTS
strong(145)
//"STRONG!!!!"
strong(432)
// "Not Strong !!"



// SAMPLE TESTS
// describe("Strong Number", ()=>{
//   it("Example Tests", ()=>{
//     Test.assertEquals( strong(1), "STRONG!!!!" );
//     Test.assertEquals( strong(2), "STRONG!!!!" );
//     Test.assertEquals( strong(145), "STRONG!!!!" );
//     Test.assertEquals( strong(7), "Not Strong !!" );
//     Test.assertEquals( strong(93), "Not Strong !!" );
//     Test.assertEquals( strong(185), "Not Strong !!" );
//   });
// });



// Input >> Output Examples
// strong_num (1)  ==> return "STRONG!!!!"
// Explanation:
// Since , the sum of its digits' factorial of (1) is equal to number itself (1) , Then its a Strong .
//
// strong_num (123) ==> return "Not Strong !!"
// Explanation:
// Since , the sum of its digits' factorial of 1! + 2! + 3! = 9 is not equal to number itself (123) , Then it's Not Strong .
//
// strong_num (2)  ==>  return "STRONG!!!!"
// Explanation:
// Since , the sum of its digits' factorial of 2! = 2 is equal to number itself (2) , Then its a Strong .
//
// strong_num (150) ==> return "Not Strong !!"
// Explanation:
// Since , the sum of its digits' factorial of 1! + 5! + 0! = 122 is not equal to number itself (150) , Then it's Not Strong .
