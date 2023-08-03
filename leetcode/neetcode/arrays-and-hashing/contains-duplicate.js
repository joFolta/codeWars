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

/**
 * Brute Force - Linear Search
 * Time complexity: O(N^2) - quadratric time - BAD
 * Space complexity: O(1) constant space
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  for (let right = 0; right < nums.length; right++) {
    // Time O(N)
    for (let left = 0; left < right; left++) {
      // Time O(N)
      const isDuplicate = nums[left] === nums[right];
      if (isDuplicate) return true;
    }
  }

  return false;
};

/**
 * Sort - HeapSort
 * Time complexity: O(N * log(N)) (sorting)
 * Space complexity: O(1)
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = (nums) => {
  nums.sort((a, b) => a - b); // Time O(N * log(N)) | Space O(1))

  return hasDuplicate(nums);
};

const hasDuplicate = (nums) => {
  for (let curr = 0; curr < nums.length - 1; curr++) {
    // Time O(N)
    const next = curr + 1;

    const isNextDuplicate = nums[curr] === nums[next];
    if (isNextDuplicate) return true;
  }

  return false;
};

/** Hash Set
 * Time complexity: O(N) - linear time with Hash Set (~ Hash Table?)
 * Space complexity: O(N) - linear space - memory usage correlates to input size
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = (nums) => {
  const numSet = new Set(nums); // Time O(N) | Space O(N)
  const isEqual = numSet.size === nums.length;

  return !isEqual;
};

/** Hash Set - Early Exit
 * Time complexity: O(N)
 * Space complexity: O(N)
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = (nums) => {
  const newSet = new Set();
  for (const num of nums) {
    // Time O(N)
    if (newSet.has(num)) return true;

    newSet.add(num); // Space O(N)
  }

  return false;
};
