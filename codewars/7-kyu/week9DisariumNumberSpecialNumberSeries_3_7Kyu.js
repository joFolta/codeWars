// Definition
// Disarium number is the number that The sum of its digits powered with their respective positions is equal to the number itself.
//
// Task
// Given a number, Find if it is Disarium or not .
//
// Warm-up (Highly recommended)
// Playing With Numbers Series
// Notes
// Number passed is always Positive .
// Return the result as String
// Input >> Output Examples
// disariumNumber(89) ==> return "Disarium !!"
// Explanation:
// Since , 8^1 + 9^2 = 89 , thus output is "Disarium !!"
// disariumNumber(564) ==> return "Not !!"
// Explanation:
// Since , 5^1 + 6^2 + 4^3 = 105 != 546 , thus output is "Not !!"
// FUNDAMENTALS NUMBERS MATHEMATICS ALGORITHMS BASICLANGUAGEFEATURES CONDITIONALSTATEMENTS CONTROLFLOW

// MY SOLUTION
function disariumNumber(n){
  //to string array
  let arr = n.toString().split("")
  //to number array
  let numArr = []
  for(let i=0; i<arr.length; i++){
    numArr.push(Number(arr[i]))
  }
  //sum of power by index
  let sum = 0
  for(let i=0; i<numArr.length; i++){
    sum += Math.pow(numArr[i],i+1)
    console.log(`num ${numArr[i]}; powered${i+1}; sum${sum}`)
  }
  return sum === n? "Disarium !!":"Not !!"
}



//MY TESTS
disariumNumber(59)
//"Not !!"
disariumNumber(89)
//"Disarium !!"
disariumNumber(135)
//"Disarium !!"

//OTHER SOLUTIONS
//  do not need to convert to array
//  (as individual string characters correspond to a numerical index)
function disariumNumber(n){
  let string = n.toString()
  let sum = 0
  console.log(string[0])
  console.log(typeof string[0])
  for(let i=0; i<string.length; i++){
    //it appears Math.pow assumes/converts string[i] to be a number
    sum += Math.pow(string[i],i+1)
    console.log(typeof sum)
  }
  return sum === n? "Disarium !!":"Not !!"
}

//SAMPLE TESTS
// describe("Basic tests",_=>{
//   Test.assertEquals(disariumNumber(89),"Disarium !!");
//   Test.assertEquals(disariumNumber(564),"Not !!");
//   Test.assertEquals(disariumNumber(1024),"Not !!");
//   Test.assertEquals(disariumNumber(135),"Disarium !!");
//   Test.assertEquals(disariumNumber(136586),"Not !!");
// });



















//
