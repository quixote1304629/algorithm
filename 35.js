/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  let i = 0;
  let j = nums.length;

  while (i <= j) {
    const m = (i + j) >>> 1;
    if (nums[m] === target) {
      return m;
    } else if (nums[m] > target) {
      j = m - 1;
    } else {
      i = m + 1;
    }
  }
  return i;
};
