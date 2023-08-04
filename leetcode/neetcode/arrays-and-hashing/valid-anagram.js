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
 * Time complexity: O(N * log(N)) - loglinear complexity
 * Space complexity: O(1) - constant space
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  const sArr = sortAsArr(s);
  const tArr = sortAsArr(t);
  const longestArrLength =
    sArr.length > tArr.length ? sArr.length : tArr.length;

  for (let i = 0; i < longestArrLength; i++) {
    // Time O(N)
    if (sArr[i] !== tArr[i]) return false;
  }

  return true;
};

const sortAsArr = (string) =>
  string
    .split("") // Time O(N) | Space O(N)
    .sort(); // Time O(N * log(N)) | Space O(1)

/**
 * Hash Map - Object Mapping
 * Time complexity: O(N) linear time
 * Space complexity: O(N) linear space ??? constant space O(1)? (see hashmap example at bottom)
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

// ----------------------------------------------------
// ----------------Neetcode Solutions------------------
// ----------------------------------------------------

/**
 * Sort - HeapSort Space O(1) | Quicksort Space O(log(N))
 * Time complexity: O(N * log(N)) (worse than O(N))
 * Space complexity: O(N) - linear space
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  const isEqual = s.length === t.length;
  if (!isEqual) return false;

  return reorder(t) === reorder(s); // Time O(N * log(N)) | Space O(N)
};

const reorder = (str) =>
  str
    .split("") // Time O(N) | Space O(N)
    .sort((a, b) => a.localeCompare(b)) // Time O(N * log(N)) | Space O(1) | O(log(N))
    .join(""); // Time O(N) | Space O(N)

/**
 * Hash Map - Frequency Counter
 * Time complexity: O(N) - linear time
 * Space complexity: O(1) - constant time
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  const map = new Map();
  const isEqual = s.length === t.length;
  if (!isEqual) return false;

  addFrequency(s, map); // Time O(N) | Space O(1)
  subtractFrequency(t, map); // Time O(N) | Space O(1)

  return checkFrequency(map); // Time O(N)
};

const addFrequency = (str, map) => {
  for (const char of str) {
    // Time O(N)
    const count = (map.get(char) || 0) + 1;

    map.set(char, count); // Space O(1)
  }
};

const subtractFrequency = (str, map) => {
  for (const char of str) {
    // Time O(N)
    if (!map.has(char)) continue; // continue - terminated current iteration and continue to next iteration

    const count = map.get(char) - 1;

    map.set(char, count); // Space O(1)
  }
};

const checkFrequency = (map) => {
  for (const [char, count] of map) {
    // Time O(N)
    const isEmpty = count === 0;
    if (!isEmpty) return false;
  }

  return true;
};
