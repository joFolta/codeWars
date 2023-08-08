/*
https://www.codewars.com/kata/545cedaa9943f7fe7b000048

6 kyu
Detect Pangram

A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.
*/

// Time complexity: O(N) - linear space
// Space complexity: O(N) - linear time
function isPangram(string) {
  const stringLower = string.toLowerCase();
  const alphabet = "abcdefghijklmnopqrstuvwxyz";

  // nested loops but not O(N^2) time
  for (char of alphabet) {
    // O(1) constant time (not impacted by input size)
    if (!stringLower.match(char)) {
      // O(N) time
      return false;
    }
  }

  return true;
}

// time complexity: O(N)
// space complexity: O(1)
function isPangram(string) {
  const stringFixed = string.toLowerCase().replace(/[^a-z]/g, ""); // Time O(N)
  const stringSet = new Set(stringFixed); // Space O(1)
  return stringSet.size === 26;
}
