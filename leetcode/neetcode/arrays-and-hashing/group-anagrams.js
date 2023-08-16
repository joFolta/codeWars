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

// TODO: EXPLORE ALL SOLUTIONS (see neetcode.io)

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
          // save the anagram str
          anagramGroup.push(strs[j]);
        }
      });

      // save the entire group
      results.push(anagramGroup);
    }
  });

  return results;
};
