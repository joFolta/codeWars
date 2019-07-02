// Note: This kata is inspired by Convert a Number to a String!. Try that one too.
//
// Description
// We need a function that can transform a string into a number. What ways of achieving this do you know?
//
// Note: Don't worry, all inputs will be strings, and every string is a perfectly valid representation of an integral number.
//
// Examples
// stringToNumber("1234") == 1234
// stringToNumber("605" ) == 605
// stringToNumber("1405") == 1405
// stringToNumber("-7"  ) == -7
// FUNDAMENTALS PARSING ALGORITHMS STRINGS

// MY SOLUTION
let stringToNumber = function(str){
  number = parseFloat(str)
  return number;
}

// MY TEST
// stringToNumber("12312")
// 12312

// SAMPLE TESTS
// describe( "stringToNumber", function(){
//   it( "should work for the examples" , function(){
//     Test.assertEquals(stringToNumber("1234"),1234)
//     Test.assertEquals(stringToNumber("605"), 605)
//     Test.assertEquals(stringToNumber("1405"),1405)
//     Test.assertEquals(stringToNumber("-7"),  -7)
//   });
// });
