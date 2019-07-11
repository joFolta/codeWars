ASC Week 1 Challenge 5 (Medium #2)
Create a function that takes a 2D array as an input, and outputs another array that contains the average values for the numbers in the nested arrays at the corresponding indexes.

The function should also work with negative numbers.

Examples
[ [1, 2, 3, 4], [5, 6, 7, 8] ]  ==>  [3, 4, 5, 6]

1st array: [1, 2, 3, 4]
2nd array: [5, 6, 7, 8]
            |  |  |  |
            v  v  v  v
average:   [3, 4, 5, 6]
And another one:

[ [2, 3, 9, 10, 7], [12, 6, 89, 45, 3], [9, 12, 56, 10, 34], [67, 23, 1, 88, 34] ]  ==>  [22.5, 11, 38.75, 38.25, 19.5]

1st array: [  2,   3,    9,   10,    7]
2nd array: [ 12,   6,   89,   45,    3]
3rd array: [  9,  12,   56,   10,   34]
4th array: [ 67,  23,    1,   88,   34]
              |    |     |     |     |
              v    v     v     v     v
average:   [22.5, 11, 38.75, 38.25, 19.5]
FUNDAMENTALS

//SIMPLER SOLUTION
function avgArray(arr) {
  var result=[];
  for(var i in arr[0]){
    var num=0;
    for(var j in arr){
      num+=arr[j][i];
    }
    result.push(num/arr.length);
  }
  return result;
}
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in
EXAMPLE for...in loop
// var string1 = "";
// var object1 = {a: 1, b: 2, c: 3};
//
// for (var property1 in object1) {
//   string1 += object1[property1];
// }
//
// console.log(string1);
// expected output: "123"


// MY SOLUTION
function avgArray(arr) {
 let sum = 0
 let avg = 0
 let arrAvg = []
 let numArrs = arr.length
 let eachArrLength = arr[0].length
 for(let numIndices=0; numIndices<eachArrLength; numIndices++){
   sum = 0 //RESET, separate sum from next idex's sum
   avg = 0
   for(let arrays=0; arrays<numArrs; arrays++){
     sum += arr[arrays][numIndices]
   }
   avg = sum/numArrs
   arrAvg.push(avg)
 }
  return arrAvg
}

//MY TESTS
avgArray([[2, 3, 9, 10, 7], [12, 6, 89, 45, 3], [9, 12, 56, 10, 34], [67, 23, 1, 88, 34]])
//[22.5, 11, 38.75, 38.25, 19.5]
avgArray([[1, 2, 3, 4], [5, 6, 7, 8]])
//[3, 4, 5, 6]
avgArray([[3,4],[5,6],[7,8],[9,10]])
//expected [6,7]

// WEBSITE
// http://www.java2s.com/Tutorials/Javascript/Javascript_Data_Structure/0320__Javascript_Multidimensional_Array.htm

// SAMPLE TESTS
// Test.describe('Your "avgArray" function', function () {
//   Test.it('should work for the examples provided in the Description', function () {
//     Test.assertDeepEquals(avgArray([[1, 2, 3, 4], [5, 6, 7, 8]]), [3, 4, 5, 6]);
//     Test.assertDeepEquals(avgArray([[2, 3, 9, 10, 7], [12, 6, 89, 45, 3], [9, 12, 56, 10, 34], [67, 23, 1, 88, 34]]), [22.5, 11, 38.75, 38.25, 19.5]);
//   });
// });
