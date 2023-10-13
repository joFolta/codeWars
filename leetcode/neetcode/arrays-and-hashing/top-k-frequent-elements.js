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

/**
 * Sort - Time O(NlogN)
 * &
 * Hashmap - Space O(N)
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  let frequency = {};

  for (let i = 0; i < nums.length; i++) {
    if (frequency.hasOwnProperty(nums[i])) frequency[nums[i]] += 1;
    else frequency[nums[i]] = 1;
  }

  let result = Object.keys(frequency).map((key) => [
    Number(key),
    frequency[key],
  ]);

  /* sorted by value largest to smallest */
  let sortedResult = result.sort((a, b) => {
    return b[1] - a[1];
  }); /* Time O(NlogN) */

  let output = [];

  /* save k most frequent intergers*/
  for (let i = 0; i < k; i++) {
    output.push(sortedResult[i][0]);
  }
  return output;
};

/**
 * Bucket Sort
 * Without Array.sort()
 * Time O(N) | Space O(K)
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  const mp = new Map();
  const arr = new Array(nums.length + 1).fill(0);
  const ans = [];

  nums.forEach((el) => {
    const val = mp.get(el) || 0;
    mp.set(el, val + 1);
  });

  for (let [key, value] of mp) {
    const prev = arr[value] || [];
    prev.push(key); /* key here is the num */

    /* saving COUNT (value) AS THE KEY, saving index in an array (prev) as the value */
    arr[value] = prev;
  }

  arr.reverse(); /* sorted from highest to lowest COUNT */
  for (let el of arr) {
    if (k < 1) break;
    if (el) {
      for (let el2 of el) {
        /* NOT quadratic Time O(N^2) b/c the length of the out and inner loop combined will only be the length of the input size */
        ans.push(el2);
        k--;
      }
    }
  }

  return ans;
};
