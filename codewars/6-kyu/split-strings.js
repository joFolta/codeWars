/*
https://www.codewars.com/kata/515de9ae9dcfc28eb6000001

6 kyu
Split Strings

Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

Examples:

* 'abc' =>  ['ab', 'c_']
* 'abcdef' => ['ab', 'cd', 'ef']
*/

// time complexity: O(N) Linear time
// space complexity: O(N) Linear space
function solution(str) {
  const result = []; // Space O(N)
  let pair = "";
  let shouldSave = false;

  for (char of str) {
    // Time O(N)
    pair = pair + char;
    if (shouldSave) {
      result.push(pair);
      pair = "";
    }
    shouldSave = !shouldSave;
  }

  // the above only saves fully for even-length str (have to account for adding final char and _)
  if (str.length % 2 !== 0) result.push(str[str.length - 1] + "_");

  return result;
}
