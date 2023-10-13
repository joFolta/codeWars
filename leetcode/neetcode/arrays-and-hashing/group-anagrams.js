/*
https://leetcode.com/problems/group-anagrams/

49. Group Anagrams

Medium

Given an array of strings strs, group the anagrams together. You can return the answer in any order.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

 

Example 1:

Input: strs = ["eat","tea","tan","ate","nat","bat"]
Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
Example 2:

Input: strs = [""]
Output: [[""]]
Example 3:

Input: strs = ["a"]
Output: [["a"]]
 

Constraints:

1 <= strs.length <= 104
0 <= strs[i].length <= 100
strs[i] consists of lowercase English letters.

*/

/**
 * Brute Force approach -
 * divide by char into arr's, sort alphabetically, combine chars back to string, and compare equality of the new strings (but show old strings)
 * Time complexity: O(N^2) quadratic time
 * Space complexity: O(N) linear space
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  const results = [];
  const sortedStrs = strs.map((str) => str.split("").sort().join("")); // Time O(N^2) quadratic time
  // having this sortedStrsToSkip array allows us to avoid using an additional loop within a loop for the conditional check further below
  const sortedStrsToSkip = [];

  sortedStrs.forEach((sortedStr, i) => {
    // Time O(N^2) quadratic
    // if it wasn't already saved, then continue
    if (
      !sortedStrsToSkip.some((sortedStrToSkip) => sortedStrToSkip === sortedStr)
    ) {
      const anagramGroup = [];

      // save the current str locally
      anagramGroup.push(strs[i]);
      // save it also to skip later
      sortedStrsToSkip.push(sortedStr);

      sortedStrs.forEach((otherStr, j) => {
        // i !== j, we don't want to "pair" the same str to itself
        if (sortedStr === otherStr && i !== j) {
          // save the original/unsorted str
          anagramGroup.push(strs[j]);
        }
      });

      // save the entire group
      results.push(anagramGroup);
    }
  });

  return results;
};

/**
 * Sort - HeapSort Space O(1) | QuickSort Space O(log(K))
 * Hash Map - Adjacency List
 * Time O(N * (K * log(K))) | Space O(N * K)
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = (words, map = new Map()) => {
  {
    if (!words.length) return [];

    groupWords(words, map); /* Time O(N * (K * log(K))) | Space O(N * K) */

    return [...map.values()]; /* Time O(N) | Space O(N * K) */
  }
};

var groupWords = (words, map) => {
  for (const original of words) {
    /* Time O(N) */

    const sorted = reorder(original); /* Time O(K * log(K)) | Space O(K) */
    const values = map.get(sorted) || [];

    values.push(original); /* Space O(N) */
    map.set(sorted, values); /* Space O(N * K) */
  }
};

const reorder = (str) =>
  str
    .split("") /* Time O(K) | Space O(K) */
    .sort((a, b) =>
      a.localeCompare(b)
    ) /* Time O(K * log(K)) | Space O(1) || log(K) */
    .join(""); /* Time O(K) | Space O(K) */

/**
 * Hash Map
 * Time O(N * K) | Space O(N * K)
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = (words, map = new Map()) => {
  if (!words.length) return [];

  groupWords(words, map); /* Time O(N * K) | Space O(N * K)*/

  return [...map.values()]; /* Time O(N) | Space O(N * K) */
};

var groupWords = (words, map) => {
  for (const original of words) {
    /* Time O(N) */

    const hash = getHash(original); /* Time O(K) | Space O(1)*/
    const values = map.get(hash) || [];

    values.push(original); /* Space O(N) */
    map.set(hash, values); /* Space O(N * K) */
  }
};

const getHash = (word) => {
  const frequency = new Array(26).fill(0);

  for (const char of word) {
    /* Time O(K) */
    const charCode = getCode(char); /* Time O(1)  | Space O(1) */

    frequency[charCode]++; /* Space O(1) */
  }

  return buildHash(frequency);
};

const getCode = (char) => char.charCodeAt(0) - "a".charCodeAt(0);

const buildHash = (frequency) => frequency.toString();

/**
 * Hash Map
 * Time O(N * K) | Space O(N * K)
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  let res = {}; //mapping charCount to list of anagrams i.e "1e,1a,1t": ["eat", "tea", "ate"]
  for (let s of strs) {
    //To count each char:
    let count = new Array(26).fill(0); //for a....z
    //We'll index a to 0 till z to idx 25
    for (let c of s) {
      count[c.charCodeAt(0) - "a".charCodeAt(0)] += 1;
    }
    let commaSeparatedCount = count.join(",");
    if (commaSeparatedCount in res) {
      res[commaSeparatedCount].push(s);
    } else {
      res[commaSeparatedCount] = [s];
    }
    //console.log("res: ", res);
    //console.log("Object.values(res): ", Object.values(res))
  }
  return Object.values(res);
};
