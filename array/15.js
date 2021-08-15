/**
 * https://leetcode-cn.com/problems/3sum/
 * 给你一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 ？请你找出所有和为 0 且不重复的三元组。
 *
 * 输入：nums = [-1,0,1,2,-1,-4]
 * 输出：[[-1,-1,2],[-1,0,1]]
 */

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  const result = [];
  const length = nums.length;
  if (length < 3) return result;
  nums.sort((a, b) => a - b);
  const lastFirst = length - 1;
  const lastSec = length - 2;

  let i = 0;
  while (i < lastSec) {
    // 去重
    if (nums[i] === nums[i - 1]) {
      i++;
      continue;
    }

    let j = i + 1;
    let k = lastFirst;
    while (j < k) {
      const sum = nums[i] + nums[j] + nums[k];
      if (sum < 0) {
        j++;
      } else if (sum > 0) {
        k--;
      } else {
        result.push([nums[i], nums[j], nums[k]]);
        // 以下两步去重
        while (j < k && nums[j] === nums[j + 1]) j++;
        while (j < k && nums[k] === nums[k - 1]) k++;
        j++;
        k--;
      }
    }

    i++;
  }
  return result;
};

const data = [-4, -3, -2, -1, -1, 0, 0, 1, 2, 3, 4];
const res = threeSum(data);
console.log(res);
