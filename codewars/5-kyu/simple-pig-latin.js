/*
https://www.codewars.com/kata/520b9d2ad5c005041100000f

5 kyu
Simple Pig Latin

Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

Examples
pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
pigIt('Hello world !');     // elloHay orldway !
*/

// time complexity: O(n) linear time. time increase with input size
// space complexity: O(1) constant space. Memory usage does not increase with input size
function pigIt(str) {
  return str.split(" ").reduce((acc, word, i) => {
    if (word[0].match(/\W/)) {
      // \W non-alphanumeric character (vs \w alphanumeric char)
      return acc + " " + word;
    }
    if (i !== 0) {
      // don't want to add space for first word
      return acc + " " + word.substring(1) + word[0] + "ay";
    } else {
      return acc + word.substring(1) + word[0] + "ay";
    }
  }, "");
}

// time complexity: O(n) linear time. time increase with input size
// space complexity: O(1) constant space. Memory usage does not increase with input size
function pigIt(str) {
  return str.split(" ").reduce((acc, word, i) => {
    if (word.match(/[a-z]/i)) {
      if (i !== 0) {
        // don't want to add space for first word
        return acc + " " + word.substring(1) + word[0] + "ay";
      } else {
        return acc + word.substring(1) + word[0] + "ay";
      }
    } // punctuation marks
    return acc + " " + word;
  }, "");
}

function pigIt(str) {
  return str.replace(/\w+/g, (word) => {
    // \w alphanumeric character, + one or more (stops at the "space" char which is not alphanumeric)
    return word.substring(1) + word[0] + "ay";
  });
}

// String.prototype.substring() ~ String.prototype.slice()
