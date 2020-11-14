// There was a test in your class and you passed it. Congratulations!
// But you're an ambitious person. You want to know if you're better than the average student in your class.
// You got an array with your colleges' points. Now calculate the average to your points!
//
// Return True if you're better, else False!
//
// Note:
// Your points are not included in the array of your classes points. For calculating the average point you may add your point to the given array!
//
// FUNDAMENTALS

//MY SOLUTIONS



function betterThanAverage(classPoints, yourPoints) {
  let totalClassPoints = 0
  for(let i=0; i<classPoints.length; i++){
    totalClassPoints = totalClassPoints + classPoints[i]
  }
  let avgClassPoints = totalClassPoints/(classPoints.length+1)
  console.log(avgClassPoints)
  if (yourPoints > avgClassPoints){
    return true
  } else {
    return false
  }
}


//MY TEST
// betterThanAverage([10, 4,7],5)
// VM1534:7 5.25
// false
// betterThanAverage([10, 4,7],6)
// VM1534:7 5.25
// true

//SAMPLE TESTS:
// Test.describe("Example Tests", function() {
//   Test.it("betterThanAverage([2, 3], 5) should return True", function() {
//     Test.assertEquals(betterThanAverage([2, 3], 5), true);
//   });
//
//   Test.it("betterThanAverage([100, 40, 34, 57, 29, 72, 57, 88], 75) should return True", function() {
//     Test.assertEquals(betterThanAverage([100, 40, 34, 57, 29, 72, 57, 88], 75), true);
//   });
//
//   Test.it("betterThanAverage([12, 23, 34, 45, 56, 67, 78, 89, 90], 9) should return False", function() {
//     Test.assertEquals(betterThanAverage([12, 23, 34, 45, 56, 67, 78, 89, 90], 9), false);
//   });
// });
