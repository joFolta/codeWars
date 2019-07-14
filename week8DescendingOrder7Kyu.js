// Your task is to make a function that can take any non-negative integer as a argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.
//
// Examples:
// Input: 21445 Output: 54421
//
// Input: 145263 Output: 654321
//
// Input: 1254859723 Output: 9875543221
//
// FUNDAMENTALS FUNCTIONS CONTROLFLOW BASICLANGUAGEFEATURES

//MY SOLUTION
function descendingOrder(n){
  return parseInt(n.toString().split("").sort().reverse().join(""))
}
descendingOrder(21445)

//TAKEAWAYS
parseInt() :        string to integer
Number.toString():  number to string
String.split():     string to array String.split(' ') by word
                    string to array String.split('') by letter (with commas)
Array.sort():       array from smallest to largest number
Array.reverse():    reverse order of Array
Array.join():       joins array to string Array.join() (joins with commas)
                    joins array to string Array.join('') (joins with no commas)

// MY TESTS

//SAMPLE TESTS
// Test.assertEquals(descendingOrder(0), 0)
// Test.assertEquals(descendingOrder(1), 1)
// Test.assertEquals(descendingOrder(123456789), 987654321)
