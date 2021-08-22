/**
 * https://leetcode-cn.com/problems/2VG8Kg/
 * 给定一个含有 n 个正整数的数组和一个正整数 target 。
 * 找出该数组中满足其和 ≥ target 的长度最小的 连续子数组 [numsl, numsl+1, ..., numsr-1, numsr] ，并返回其长度。如果不存在符合条件的子数组，返回 0 。
 */

/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
  let ans = Infinity;
  let sum = 0;
  let i = 0;
  let j = 0;

  while (j < nums.length) {
    sum += nums[j];
    if (sum >= target) {
      while (i <= j) {
        const temp = sum - nums[i];
        if (temp < target) break;
        sum = temp;
        i++;
      }
      ans = Math.min(j - i + 1, ans);
      j++
    } else {
      j++;
    }
  }

  return ans===Infinity ? 0 : ans
};

const data = [2,3,1,2,4,3]
const res = minSubArrayLen(7, data)
console.log(res)
