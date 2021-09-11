/**
 * https://leetcode-cn.com/problems/find-first-and-last-position-of-element-in-sorted-array/
 * 给定一个按照升序排列的整数数组 nums，和一个目标值 target。找出给定目标值在数组中的开始位置和结束位置。
 * 如果数组中不存在目标值 target，返回 [-1, -1]。
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
  let result = [-1, -1];
  if (!nums.length) return result;

  let i = 0;
  let j = nums.length - 1;
  let mid = 0;

  while (i <= j) {
    mid = (i + j) >> 1;
    if (nums[mid] < target) {
      i = mid + 1;
    } else if (nums[mid] > target) {
      j = mid - 1;
    } else {
      break;
    }
  }

  if (nums[mid] !== target) return result;

  result = [mid, mid];

  let m = mid - 1;
  while (m >= 0 && nums[m] === target) {
    result[0] = m--;
  }

  let n = mid + 1;
  while (n < nums.length && nums[n] === target) {
    result[1] = n++;
  }

  return result;
};

const result = searchRange([1, 2, 3, 3, 3, 3, 4, 5, 9], 3);
console.log(result);
