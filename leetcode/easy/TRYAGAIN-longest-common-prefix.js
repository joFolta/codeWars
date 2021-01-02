/*
https://leetcode.com/problems/longest-common-prefix/description/

Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

 

Example 1:

Input: strs = ["flower","flow","flight"]
Output: "fl"
Example 2:

Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.
 

Constraints:

0 <= strs.length <= 200
0 <= strs[i].length <= 200
strs[i] consists of only lower-case English letters.
*/

/*
 * @param {string[]} strs
 * @return {string}
 */
// https://leetcode.com/problems/longest-common-prefix/discuss/702828/Easy-JS-Solution
// var longestCommonPrefix = function (strs) {
//   if (!strs.length) return "";
//   let prefix = "";
//   for (let i = 0; i < strs[0].length; i++) {
//     for (let j = 0; j < strs.length - 1; j++) {
//       if (strs[j][i] !== strs[j + 1][i]) return prefix;
//     }
//     prefix += strs[0][i];
//   }
//   return prefix;
// };
