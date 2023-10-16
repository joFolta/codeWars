/*
https://leetcode.com/problems/valid-palindrome/

125. Valid Palindrome

Easy

A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

Given a string s, return true if it is a palindrome, or false otherwise.

 

Example 1:

Input: s = "A man, a plan, a canal: Panama"
Output: true
Explanation: "amanaplanacanalpanama" is a palindrome.
Example 2:

Input: s = "race a car"
Output: false
Explanation: "raceacar" is not a palindrome.
Example 3:

Input: s = " "
Output: true
Explanation: s is an empty string "" after removing non-alphanumeric characters.
Since an empty string reads the same forward and backward, it is a palindrome.
 

Constraints:

1 <= s.length <= 2 * 105
s consists only of printable ASCII characters.
*/

/**
 * Array - Filter && Clone && Reverse
 * Time O(N) | Space O(N)
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  if (!s.length) return true;

  const alphaNumeric = filterAlphaNumeric(s); /* Time O(N) | Space O(N) */
  const reversed = reverse(alphaNumeric); /* Time O(N) | Space O(N) */

  return alphaNumeric === reversed;
};

const filterAlphaNumeric = (
  s,
  nonAlphaNumeric = new RegExp("[^a-z0-9]", "gi")
) =>
  s
    .toLowerCase() /* Time O(N) | Space O(N) */
    .replace(nonAlphaNumeric, ""); /* Time O(N) | Space O(N) */

const reverse = (s) =>
  s
    .split("") /* Time O(N) | Space O(N) */
    .reverse() /* Time O(N) | Space O(N) */
    .join(""); /* Time O(N) | Space O(N) */

/**
 * 2 Pointer | Middle Convergence
 * Time O(N) | Space O(1)
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  if (s.length <= 1) return true;

  let [left, right] = [0, s.length - 1];
  let leftChar, rightChar;
  while (left < right) {
    leftChar = s[left];
    rightChar = s[right];

    // skip (one) char if non-alphanumeric
    if (!/[a-zA-Z0-9]/.test(leftChar)) {
      left++;
    } else if (!/[a-zA-Z0-9]/.test(rightChar)) {
      right--;
    } else {
      // compare letters
      if (leftChar.toLowerCase() !== rightChar.toLowerCase()) {
        return false;
      }
      left++;
      right--;
    }
  }

  return true;
};

/**
 * 2 Pointer | Middle Convergence | No RegEx | No Copying
 * Time O(N) | Space O(1)
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  const isAlphaNumeric = (c) =>
    (c.toLowerCase() >= "a" && c.toLowerCase() <= "z") ||
    (c >= "0" && c <= "9");

  let left = 0;
  let right = s.length - 1;
  let skipLeft,
    skipRight,
    isEqual = false;

  while (left < right) {
    skipLeft = !isAlphaNumeric(s[left]);
    if (skipLeft) {
      left++;
      continue;
    } // "continue" stops moving below and restarts at the top of the statement in the loop (needed here to skip more than one nonAlphaNumeric char)

    skipRight = !isAlphaNumeric(s[right]);
    if (skipRight) {
      right--;
      continue;
    }

    isEqual = s[left].toLowerCase() === s[right].toLowerCase();
    if (!isEqual) return false;

    left++;
    right--;
  }

  return true;
};
