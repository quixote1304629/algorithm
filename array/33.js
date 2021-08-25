/**
 * https://leetcode-cn.com/problems/search-in-rotated-sorted-array/
 * 33. 搜索旋转排序数组
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let end = nums.length - 1;
  let i = 0;
  let j = end;
  while (i <= j) {
    const k = (i + j) >> 1;
  }
};
