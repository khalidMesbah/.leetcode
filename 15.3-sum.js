/*
 * @lc app=leetcode id=15 lang=javascript
 *
 * [15] 3Sum
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  let res = [];
  for (let i = 0; i < nums.length; i++)
    for (let j = 0; j < nums.length; j++)
      for (let k = 0; k < nums.length; k++)
        if (nums[i] + nums[j] + nums[k] == 0)
         res += [nums[i], nums[j], nums[k]];
  return res;
};
// @lc code=end
console.log(threeSum([-1, 0, 1, 2, -1, -4]));
console.log(threeSum([]));
console.log(threeSum([0]));
