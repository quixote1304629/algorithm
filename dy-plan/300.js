/**
 * 给你一个整数数组 nums ，找到其中最长严格递增子序列的长度。
 * 子序列是由数组派生而来的序列，删除（或不删除）数组中的元素而不改变其余元素的顺序。例如，[3,6,2,7] 是数组 [0,3,1,6,2,2,7] 的子序列。
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
  const length = nums.length;
  if (length < 2) return length;
  const tail = [nums[0]];
  let end = 0;
  for (let i = 1; i < length; i++) {
    if (nums[i] > tail[end]) {
      tail.push(nums[i]);
      end++;
    } else if (nums[i] < tail[0]) {
      tail[0] = nums[i];
    } else {
      for (let j = 0; j <= end; j++) {
        if (tail[j] >= nums[i]) {
          tail[j] = nums[i];
          break;
        }
      }
    }
  }
  return tail.length;
};

const result = lengthOfLIS([4, 10, 4, 3, 8, 9]);
console.log(result);






var lengthOfLIS2 = function (nums) {
  const len = nums.length;
  if (len < 2) {
    return len;
  }
  const dp = new Array(len).fill(1);
  for (let i = 1; i < len; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[j] < nums[i]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }
  }
  return Math.max(...dp);
};