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

// MY SOLUTION
function avgArray(arr) {
 let n = arr.length

 // console.log(arr[0][1])
 for(let i=0; i<n; i++){
   arr[i][]
 }
}
avgArray([[3,4],[5,6],[7,8],[9,10]])



// SAMPLE TESTS
Test.describe('Your "avgArray" function', function () {
  Test.it('should work for the examples provided in the Description', function () {
    Test.assertDeepEquals(avgArray([[1, 2, 3, 4], [5, 6, 7, 8]]), [3, 4, 5, 6]);
    Test.assertDeepEquals(avgArray([[2, 3, 9, 10, 7], [12, 6, 89, 45, 3], [9, 12, 56, 10, 34], [67, 23, 1, 88, 34]]), [22.5, 11, 38.75, 38.25, 19.5]);
  });
});
