// https://leetcode.com/problems/two-sum/
//
// Given an array of integers, return indices of the two numbers such that they add up to a specific target.
//
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
//
// Example:
//
// Given nums = [2, 7, 11, 15], target = 9,
//
// Because nums[0] + nums[1] = 2 + 7 = 9,
// return [0, 1].

function twoSum(nums,target){
  let indices = []
  let el1 = 0
  let el2 = 0
  for(let i=0; i<nums.length;i++){
    el1 = nums[i]
    for(let j=0; j<nums.length;j++){
      //can't equal itself
      if (i!=j){
        el2 = nums[j]
        if(target == el1 + el2){
          indices.push(i)
          indices.push(j)
          return indices
        }
      }
    }
  }
}
twoSum([3,2,4],6)
twoSum([2,7,11,15],9)
