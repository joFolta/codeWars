/*
https://leetcode.com/problems/product-of-array-except-self/

238. Product of Array Except Self

Medium 

Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

You must write an algorithm that runs in O(n) time and without using the division operation.

 

Example 1:

Input: nums = [1,2,3,4]
Output: [24,12,8,6]
Example 2:

Input: nums = [-1,1,0,-3,3]
Output: [0,0,9,0,0]
 

Constraints:

2 <= nums.length <= 105
-30 <= nums[i] <= 30
The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.
 

Follow up: Can you solve the problem in O(1) extra space complexity? (The output array does not count as extra space for space complexity analysis.)
*/

// TODO: EXPLORE ALL SOLUTIONS (see neetcode.io)

/**
 * Time complexity: O(N^2) quadratic time - TOO SLOW: Not O(N)
 * Space complexity: O(N) linear space
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  const results = []; // space O(N) linear time
  // do it for each num
  for (let i = 0; i < nums.length; i++) {
    // time O(N^2) quadratic time
    // multiply every num except nums[i]
    const product = nums.reduce((acc, el, j) => {
      if (i !== j) {
        return acc * el;
      } else {
        return acc;
      }
    }, 1);

    results.push(product);
  }

  return results;
};

/**
 * Time complexity: Time O(N)
 * Space complexity: Space O(N)
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  const result = [];
  let prefix = 1; // prefix is the product of nums BEFORE the num (start with value 1 b/c nums[0] doesn't have anything before it)
  let postfix = 1; // postfix is the product of nums AFTER the num (start with value 1 b/c nums[nums.length-1] doesn't have anything after it)

  for (let i = 0; i < nums.length; i++) {
    result[i] = prefix;
    prefix *= nums[i]; // saving current num to multiply to the next num's product
  }

  // iterate backwards
  for (let i = nums.length - 1; i >= 0; i--) {
    result[i] *= postfix; // *= to accumulate it on top of the existing the prefix product
    postfix *= nums[i]; // save
  }

  return result;
};
