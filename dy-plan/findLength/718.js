/**
 * https://leetcode-cn.com/problems/maximum-length-of-repeated-subarray/
 * 给两个整数数组 A 和 B ，返回两个数组中公共的、长度最长的子数组的长度。
 * 输入： [1,2,3,2,1]  [3,2,1,4,7]
 * 输出：3
 */

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */

// 二维dp
var findLength = function (nums1, nums2) {
  let ans = 0;
  const length1 = nums1.length;
  const length2 = nums2.length;
  // 以nums1[i]结尾 和 nums2[j]结尾 的最长子数组的长度
  const dp = Array.from({ length: length1 + 1 }).map(() =>
    Array.from({ length: length2 + 1 }).map(() => 0)
  );
  for (let i = 1; i <= length1; i++) {
    for (let j = 1; j <= length2; j++) {
      if (nums1[i - 1] === nums2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
        ans = Math.max(dp[i][j], ans);
      }
    }
  }
  return ans;
};

// 一维dp
var findLength = function (nums1, nums2) {
  let ans = 0;
  const length1 = nums1.length;
  const length2 = nums2.length;
  const dp = new Array(length2 + 1).fill(0);
  for (let i = 1; i <= length1; i++) {
    let prev = 0;
    for (let j = 1; j <= length2; j++) {
      temp = dp[j];
      if (nums1[i - 1] === nums2[j - 1]) {
        dp[j] = prev + 1;
      } else {
        dp[j] = 0;
      }
      ans = Math.max(dp[j], ans);
      prev = temp;
    }
  }
  return ans;
};

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findLength = function (nums1, nums2) {
  let res = Number.MIN_SAFE_INTEGER;
  const n = nums1.length;
  const m = nums2.length;
  let dp = 0;
  let i = -1;
  let j = -1;

  // 枚举起点
  for (let start = 0; start < n + m - 1; start++) {
    if (start < m) {
      i = 0;
      j = start;
    } else {
      i = start - m + 1;
      j = 0;
    }
    dp = 0;

    // 判断如何后面长度都不足dp 则可以中断了
    // const manLen = Math.max(n - i, m - i);
    // if(manLen < dp) break;

    while (i < n && j < m) {
      if (nums1[i] === nums2[j]) {
        dp += 1;
      } else {
        dp = 0;
      }
      res = Math.max(dp, res);
      i += 1;
      j += 1;
    }
  }

  return res;
};

const data1 = [1, 2, 6];
const data2 = [8, 7, 6, 3, 1, 2];
const res = findLength(data1, data2);
console.log(res);
