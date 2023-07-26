/*
https://leetcode.com/problems/contains-duplicate/

217. Contains Duplicate
Easy

Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

 

Example 1:

Input: nums = [1,2,3,1]
Output: true
Example 2:

Input: nums = [1,2,3,4]
Output: false
Example 3:

Input: nums = [1,1,1,3,3,4,3,2,4,2]
Output: true
 

Constraints:

1 <= nums.length <= 105
-109 <= nums[i] <= 109
*/

// time complexity: O(n^2) - quadratic time due to nested loops (BAD)
// space complexity: O(1) - constant space
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  let current;
  let another;
  for (let i = 0; i < nums.length; i++) {
    current = nums[i];
    for (let j = i + 1; j < nums.length; j++) {
      another = nums[j];
      if (current === another) {
        return true;
      }
    }
  }

  return false;
};
