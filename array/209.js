/**
 * https://leetcode-cn.com/problems/minimum-size-subarray-sum/
 * 给定一个含有 n 个正整数的数组和一个正整数 target 。
 * 找出该数组中满足其和 ≥ target 的长度最小的 连续子数组 [numsl, numsl+1, ..., numsr-1, numsr] ，并返回其长度。如果不存在符合条件的子数组，返回 0 。
 * 输入：target = 7, nums = [2,3,1,2,4,3]
 * 输出：2
 * 解释：子数组 [4,3] 是该条件下的长度最小的子数组。
 */

/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
  let ans = Infinity;
  let left = 0;
  let right = 0;
  let sum = 0;
  while (right < nums.length) {
    if (nums[right] >= target) return 1;
    sum += nums[right];
    while (sum >= target) {
      ans = Math.min(ans, right - left);
      sum -= nums[left];
      left--;
    }
    right++;
  }
  return ans === Infinity ? 0 : ans;
};
