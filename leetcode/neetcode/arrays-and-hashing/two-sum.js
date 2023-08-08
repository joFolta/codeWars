/*
https://leetcode.com/problems/two-sum/

1. Two Sum

Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

 

Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
Example 2:

Input: nums = [3,2,4], target = 6
Output: [1,2]
Example 3:

Input: nums = [3,3], target = 6
Output: [0,1]
 

Constraints:

2 <= nums.length <= 104
-109 <= nums[i] <= 109
-109 <= target <= 109
Only one valid answer exists.
 

Follow-up: Can you come up with an algorithm that is less than O(n2) time complexity?

*/

/**
 * Brute Force - Nested Loops
 * Time complexity: O(N^2) - quadratic time (BAD!)
 * Space complexity: O(1) - constant space (good)
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  // Time O(N^2) | Space O(1)
  for (let i = 0; i < nums.length; i++) {
    for (let j = 1; j < nums.length; j++) {
      if (i !== j) {
        // can't be same element
        if (nums[i] + nums[j] === target) {
          return [i, j];
        }
      }
    }
  }
};

/**
 * Brute Force - Linear Search
 * Time complexity: O(N^2) quadratic (bad!)
 * Space complexity: O(1) constant space
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  for (let curr = 0; curr < nums.length; curr++) {
    const complement = target - nums[curr];

    for (let next = curr + 1; next < nums.length; next++) {
      const num = nums[next];

      const isTarget = num === complement;
      if (isTarget) return [curr, next];
    }
  }

  return [-1, -1];
};

/**
 * Hash Map - 2 Pass
 * Time complexity: O(N) - linear time
 * Space complexity: O(N) - linear space (as input size grows the object has to store more key/values)
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const map = getMap(nums); // Time (O(N)) | Space O(N)

  return getSum(nums, target, map); // Time O(N)
};

const getMap = (nums) => {
  const map = new Map();
  for (let index = 0; index < nums.length; index++) {
    // Time O(N)
    map.set(nums[index], index); // Space O(N)
  }

  return map;
};

const getSum = (nums, target, map) => {
  for (let index = 0; index < nums.length; index++) {
    const complement = target - nums[index];
    const sumIndex = map.get(complement);

    const isTarget = map.has(complement) && map.get(complement) !== index;
    if (isTarget) return [index, sumIndex];
  }

  return [-1, -1];
};

/**
 * Hash Map - 1 Pass
 * Time complexity: O(N)
 * Space complexity: O(N)
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = (nums, target, map = new Map()) => {
  for (let index = 0; index < nums.length; index++) {
    // Time O(N)
    const num = nums[index];
    const complement = target - num;
    const sumIndex = map.get(complement);

    const isTarget = map.has(complement);
    if (isTarget) return [index, sumIndex];

    map.set(num, index); // Space O(N)
  }

  return [-1, -1];
};
