// Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.
//
// For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.
//
// [10, 343445353, 3453445, 3453545353453] should return 3453455.
//
// FUNDAMENTALS ARRAYS




// https://www.codewars.com/kata/558fc85d8fd1938afb000014/train/javascript

// UPDATED
// MY SOLUTION
// .sort((a,b)=> a-b)    ascending numberical sort
function sumTwoSmallestNumbers(numbers){
  let sortArr = numbers.sort((a,b)=>a-b)
  let smallNum1 = sortArr[0]
  let smallNum2 = sortArr[1]
  return smallNum1 + smallNum2


}
// TESTS
sumTwoSmallestNumbers([19, 5, 42, 2, 77])
//7
sumTwoSmallestNumbers([10, 343445353, 3453445, 3453545353453])
//3453455









// FIRST ATTEMPT SOLUTION

function sumTwoSmallestNumbers(numbers){
  let smallest = 0
  let secSmallest = 0
  let index = 0
  while(smallest <= 0 || Number.isInteger(smallest) === false){
    smallest = Math.min(...numbers)
    if(smallest <= 0 || Number.isInteger(smallest) === false){
      index = numbers.indexOf(smallest)
      console.log(`remove index ${index} = ${smallest}smallest`)
      numbers.splice(index,1)
      console.log(numbers)
    } else {
//REMOVED smallest index from array so that secSmallest does not end up with same value
      index = numbers.indexOf(smallest)
      numbers.splice(index,1)
    }
  }
  console.log(`this is smallest ${smallest}`)

  while(secSmallest <= 0 || Number.isInteger(secSmallest) === false){
    secSmallest = Math.min(...numbers)
    if(secSmallest <= 0 || Number.isInteger(secSmallest) === false){
      index = numbers.indexOf(secSmallest)
      console.log(`remove index ${index} = ${secSmallest}secSmallest`)
      numbers.splice(index,1)
      console.log(numbers)
    }
  }
  console.log(`this is secSmallest ${secSmallest}`)

  let sum = smallest + secSmallest
  return sum
  }


// SOLUTION WITHOUT LOGS
function sumTwoSmallestNumbers(numbers){
  let smallest = 0
  let secSmallest = 0
  let index = 0
  while(smallest <= 0 || Number.isInteger(smallest) === false){
    smallest = Math.min(...numbers)
    if(smallest <= 0 || Number.isInteger(smallest) === false){
      index = numbers.indexOf(smallest)
      numbers.splice(index,1)
    } else {
      index = numbers.indexOf(smallest)
      numbers.splice(index,1)
    }
  }

  while(secSmallest <= 0 || Number.isInteger(secSmallest) === false){
    secSmallest = Math.min(...numbers)
    if(secSmallest <= 0 || Number.isInteger(secSmallest) === false){
      index = numbers.indexOf(secSmallest)
      numbers.splice(index,1)
    }
  }

  let sum = smallest + secSmallest
  return sum
  }
// MY TESTS
// sumTwoSmallestNumbers([-1, 1.2, 3, 4.5, 10, 16])
// 13
// sumTwoSmallestNumbers([14, -4, 0, 2, 5.5, 200])
// 16


// MDN Tip
// "..." >Spread syntax<
//        where you want to use the elements of an array as arguments to a function
//        function myFunction(x, y, z) { }
//        var args = [0, 1, 2];
//        myFunction(...args);


// Sample Test:
// describe("Your function", _ => {
//   it("should work for basic tests", _ => {
//     Test.assertEquals(sumTwoSmallestNumbers([5, 8, 12, 19, 22]), 13 , "Sum should be 13");
//     Test.assertEquals(sumTwoSmallestNumbers([15, 28, 4, 2, 43]), 6 , "Sum should be 6");
//     Test.assertEquals(sumTwoSmallestNumbers([3, 87, 45, 12, 7]), 10 , "Sum should be 10");
//     Test.assertEquals(sumTwoSmallestNumbers([23, 71, 33, 82, 1]), 24 , "Sum should be 24");
//     Test.assertEquals(sumTwoSmallestNumbers([52, 76, 14, 12, 4]), 16 , "Sum should be 16");
//   });
// });
