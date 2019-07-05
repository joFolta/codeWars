// Task Overview
// Given a non-negative integer n, write a function toBinary/ToBinary which returns that number in a binary format.
//
// to_binary(1)  /* should return 1 */
// to_binary(5)  /* should return 101 */
// to_binary(11) /* should return 1011 */
// Example:
//
// to_binary(1)  /* should return 1 */
// to_binary(5)  /* should return 101 */
// to_binary(11) /* should return 1011 */
// FUNDAMENTALS MATHEMATICS ALGORITHMS NUMBERS

// MY SOLUTION
function toBinary(n){
  n = n.toString(2)
  n = parseInt(n)
  return n
}

// 2 is the RADIX and can be any base between 2 and 36

// MY TESTS
// toBinary(11)
// "1011"
// toBinary(5)
// "101"
// toBinary(1)
// "1"

// OTHER SOLUTION
// function toBinary(n){
//   var binary = ""
//   var i = 2
//
//   if (n==0){
//   binary = 0
//   }
//
//   while(n > 0){
//     if(n % i == 0){
//       binary = "0" + binary
//     }
//     else{
//       binary = "1" + binary
//       n = n - (i/2)
//     }
//     i = i * 2
//   }
//   return parseInt(binary);
// }

// SAMPLE TESTS
// Test.describe("Tests", function(){
//
// Test.assertEquals(toBinary(1), 1);
// Test.assertEquals(toBinary(2), 10);
// Test.assertEquals(toBinary(3), 11);
// Test.assertEquals(toBinary(5), 101);
//
// });
