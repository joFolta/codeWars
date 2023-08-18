/*
https://leetcode.com/problems/top-k-frequent-elements/

347. Top K Frequent Elements

Medium 

Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.

 

Example 1:

Input: nums = [1,1,1,2,2,3], k = 2
Output: [1,2]
Example 2:

Input: nums = [1], k = 1
Output: [1]
 

Constraints:

1 <= nums.length <= 105
-104 <= nums[i] <= 104
k is in the range [1, the number of unique elements in the array].
It is guaranteed that the answer is unique.
 

Follow up: Your algorithm's time complexity must be better than O(n log n), where n is the array's size.
*/

// TODO: EXPLORE ALL SOLUTIONS (see neetcode.io)

/**
 * Hash map, quadratic time
 * Time complexity: O(N^2) quadratic time
 * Space complexity: O(N) linear space
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  const results = [];

  // save nums and their frequencies to a hash map
  const mapStore = {}; // space O(N)
  for (let x = 0; x < nums.length; x++) {
    // time O(N) linear
    if (mapStore[nums[x]]) {
      mapStore[nums[x]]++;
    } else {
      mapStore[nums[x]] = 1;
    }
  }

  // IMPORTANT: this part should be repeated k times
  for (let i = 1; i <= k; i++) {
    // time O(N^2) quadratic
    let mostFrequent = [0, 0]; // [num,freq]
    // use a loop to find the current most frequent num
    Object.entries(mapStore).forEach(([key, value]) => {
      // QUESTION: how should we handle a tie in frequency? I suppose it doesn't matter as we are guaranteed "the answer is unique"
      if (value > mostFrequent[1]) {
        mostFrequent = [key, value];
      }
    });
    // let's save it
    results.push(mostFrequent[0]);
    // let's delete this entry so we can find the next mostFrequentNumArr
    delete mapStore[mostFrequent[0]];
  }

  return results;
};
