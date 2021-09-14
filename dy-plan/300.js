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
  // tail[i]: 长度为(i+1)的递增子序列中，最小的末尾值
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

// const result = lengthOfLIS([4, 10, 4, 3, 8, 9]);
// console.log(result);

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

// 一维dp
var lengthOfLIS2 = function (nums) {
  if (nums.length === 0) return 0;
  let ans = 1;
  const length = nums.length;
  const dp = new Array(length).fill(1);
  for (let i = 1; i < length; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[i] > nums[j]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
        ans = Math.max(ans, dp[i]);
      }
    }
  }
  return ans;
};

/** 找出最长子序列 */
function LIS(arr) {
  if (!arr.length) return [];
  // tail[i]: 长度为(i+1)的递增子序列中，最小的末尾值
  const tail = [arr[0]];
  // dp[i] 以索引i结尾元素的最长子序列长度
  const dp = new Array(arr.length).fill(1);
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > tail[tail.length - 1]) {
      tail.push(arr[i]);
      dp[i] = tail.length;
    } else {
      let min = 0;
      let max = tail.length - 1;
      while (min <= max) {
        let mid = Math.floor((max + min) / 2);
        if (tail[mid] > arr[i]) {
          max = mid - 1;
        } else if (tail[mid] < arr[i]) {
          min = mid + 1;
        } else {
          min = mid;
          break;
        }
      }
      tail[min] = arr[i];
      dp[i] = min + 1;
    }
  }
  console.log(tail.join());
  console.log(dp.join());
  let cur = tail.length;
  let index = dp.length - 1;
  const result = [];
  while (cur > 0) {
    if (dp[index] == cur) {
      result.unshift(arr[index]);
      cur--;
    }
    index--;
  }
  return result;
}

const result = LIS([4, 10, 4, 3, 8, 2, 9]);
console.log(result);

/**
 * 2,8,9
 * 1,2,1,1,2,1,3
 * [ 3, 8, 9 ]
 */
