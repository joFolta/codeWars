// It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry with strings with less than two characters.
//
// FUNDAMENTALS BASICLANGUAGEFEATURES STRINGS

function removeChar(str){
  let letters = str.split("")
  letters.pop()
  letters.shift()
  letters = letters.join("")
  return letters
}
removeChar("eloquent")
// "loquen"


function removeChar(str){
  // convert string to aray of each letter
  let letters = str.split("")
  // .split("") to string by letter
  // .split(" ") to string by word
  // .split() to string as whole sentence
  letters.pop()
  //remove element from array's end; opposite ".push"
  letters.shift()
  //remove element from array's beginning
  letters = letters.join("")
  // .join("") convert array to back to string without commas
  // .join(" ") with spaces
  // .join() with commas
  return letters
}
removeChar("eloquent")
// "loquen"


// OTHER SOLUTION
function removeChar(str){
  return str.slice(1,-1)
}
removeChar("eloquent")




// Test.describe("Tests", function(){
//
// Test.assertEquals(removeChar('eloquent'), 'loquen');
// Test.assertEquals(removeChar('country'), 'ountr');
// Test.assertEquals(removeChar('person'), 'erso');
// Test.assertEquals(removeChar('place'), 'lac');
//
// });
