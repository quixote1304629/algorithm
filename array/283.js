/**
 * https://leetcode-cn.com/problems/move-zeroes/
 * 给定一个数组 nums，编写一个函数将所有 0 移动到数组的末尾，同时保持非零元素的相对顺序。
 */

var moveZeroes = function (nums = []) {
  let i = nums.length - 1;
  let count = 0;
  while (i >= 0) {
    if (nums[i] === 0) {
      count++;
      i--;
    } else {
      if (count !== 0) {
        const subZero = nums.splice(i + 1, count);
        nums.push(...subZero);
        count = 0;
      }
      i--;
    }
  }
  if (count !== 0) {
    const subZero = nums.splice(0, count);
    nums.push(...subZero);
  }

  return nums;
};

var moveZeroes = function (nums) {
  let low = 0,
    fast = 0;
  let len = nums.length;
  while (fast < len) {
    if (nums[fast] != 0) {
      nums[low] = nums[fast];
      low++;
      fast++;
    } else {
      fast++;
    }
  }
  while (low < len) {
    nums[low] = 0;
    low++;
  }
};

const data = [0, 1, 0, 0, 3, 12, 0, 0];
const res = moveZeroes(data);
console.log(res);
