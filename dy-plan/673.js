/**
 * https://leetcode-cn.com/problems/number-of-longest-increasing-subsequence/
 * 给定一个未排序的整数数组，找到最长递增子序列的个数。
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumberOfLIS = function (nums) {
  const length = nums.length;
  if (length <= 1) return length;
  let maxLen = 1;
  const dp = new Array(length).fill(1);
  const counts = new Array(length).fill(1);
  for (let i = 1; i < length; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[i] > nums[j]) {
        if (dp[i] < dp[j] + 1) {
          dp[i] = dp[j] + 1;
          counts[i] = counts[j];
        } else if (dp[i] === dp[j] + 1) {
          counts[i] = counts[i] + counts[j];
        }
      }
    }
    // console.log(dp.join());
    maxLen = Math.max(maxLen, dp[i]);
  }

  let ans = 0;
  for (let k = 0; k < length; k++) {
    if (dp[k] === maxLen) {
      ans += counts[k];
    }
  }

  return ans;
};

const res = findNumberOfLIS([1, 2, 3, 1, 2, 3, 1, 2, 3]);
console.log(res);
