/*
https://leetcode.com/problems/valid-anagram/

242. Valid Anagram
Easy

Given two strings s and t, return true if t is an anagram of s, and false otherwise.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

 

Example 1:

Input: s = "anagram", t = "nagaram"
Output: true
Example 2:

Input: s = "rat", t = "car"
Output: false
 

Constraints:

1 <= s.length, t.length <= 5 * 104
s and t consist of lowercase English letters.
 

Follow up: What if the inputs contain Unicode characters? How would you adapt your solution to such a case?
*/

/**
 * Brute Force
 * Time complexity: O(N) - linear time
 * Space complexity: O(N) - linear space
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  const sArr = s.split("").sort(); // Time O(N) | Space O(N)
  const tArr = t.split("").sort();
  const longestArrLength =
    sArr.length > tArr.length ? sArr.length : tArr.length;

  for (let i = 0; i < longestArrLength; i++) {
    // Time O(N)
    if (sArr[i] !== tArr[i]) return false;
  }

  return true;
};

/**
 * Object Mapping
 * Time complexity: O(N) linear time
 * Space complexity: O(N) linear space
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  const mapStore = {}; // Space O(N)

  for (char of s) {
    // Time O(N)
    if (!mapStore[char]) {
      mapStore[char] = 1;
    } else {
      mapStore[char]++;
    }
  }

  for (char of t) {
    // Time O(N)
    if (!mapStore[char]) {
      return false;
    } else {
      mapStore[char]--;
    }
  }

  return Object.values(mapStore).every((val) => val === 0); // Time O(N)
};
