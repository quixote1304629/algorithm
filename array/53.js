/**
 * https://leetcode-cn.com/problems/maximum-subarray/
 * 给定一个整数数组 nums ，找到一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。
 * 输入：nums = [-2,1,-3,4,-1,2,1,-5,4]
 * 输出：6
 * 解释：连续子数组 [4,-1,2,1] 的和最大，为 6 。
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  const len = nums.length;
  if (len === 1) return nums[0];
  let ans = nums[0];
  let prev = nums[0];
  let i = 1;
  while (i < len) {
    prev = Math.max(prev + nums[i], nums[i]);
    console.log(prev);
    ans = Math.max(ans, prev);
    i++;
  }
  return ans;
};

const data = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
const res = maxSubArray(data)
console.log(res)
