// As a part of this Kata, you need to create a function that when provided with a triplet, returns the index of the numerical element that lies between the other two elements.
//
// The input to the function will be an array of three distinct numbers (Haskell: a tuple).
//
// For example:
//
// gimme([2, 3, 1]) => 0
// 2 is the number that fits between 1 and 3 and the index of 2 in the input array is 0.
//
// Another example (just to make sure it is clear):
//
// gimme([5, 10, 14]) => 1
// 10 is the number that fits between 5 and 14 and the index of 10 in the input array is 1.
//
// FUNDAMENTALS ARRAYS


//LEARNED
// savedArr did not actually save:
// savedArr = arr
// it changed with the arr's changes.

//MY SOLUTION with .forEach
var gimme = function (arr) {
  var savedIndex = 0
  var savedArr = [...arr]
  arr.sort((a,b)=>a-b)
  console.log(`changed??? ${arr}`)
  console.log(`stayed??? ${savedArr}`)
  var middleNum = arr[1]
  console.log(`middleNum ${middleNum}`)
  savedArr.forEach((element,index) => {
    if(element === middleNum){
      savedIndex = index
    }
  })
  console.log(`savedIndex ${savedIndex}`)
  console.log("should be savedIndex 2")
  return savedIndex
}

// MY SOLUTION WITH NOTES
var gimme = function (arr) {
  var savedIndex = 0
  //saving original array before sort; using ...speadsyntax to DEEPCOPY
  var savedArr = [...arr]
  // ascending NUMERICAL sort (default is alphabetical), affects Original array
  arr.sort((a,b)=>a-b)
  console.log(`changed??? ${arr}`)
  console.log(`stayed??? ${savedArr}`)
  var middleNum = arr[1]
  console.log(`middleNum ${middleNum}`)
  for(let i=0; i<savedArr.length; i++){
    if(savedArr[i] === middleNum){
      savedIndex = i
    }
  }
  console.log(`savedIndex ${savedIndex}`)
  console.log("should be savedIndex 2")
  return savedIndex
}

// MY TESTS
gimme([10,2,4])
gimme([9,5,10])
gimme([2, 3, 1])
gimme([5, 10, 14])

//SAMPLE TESTS
// Test.assertEquals(gimme([2, 3, 1]), 0, 'Finds the index of middle element');
// Test.assertEquals(gimme([5, 10, 14]), 1, 'Finds the index of middle element')
