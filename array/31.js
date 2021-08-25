/**
 * https://leetcode-cn.com/problems/next-permutation/
 * 实现获取 下一个排列 的函数，算法需要将给定数字序列重新排列成字典序中下一个更大的排列（即，组合出下一个更大的整数）。
 * 如果不存在下一个更大的排列，则将数字重新排列成最小的排列（即升序排列）。
 * 必须 原地 修改，只允许使用额外常数空间。
 */

/**
 * @param {number[]} nums  [9, 8, 3, 5, 4, 1]
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function (nums) {
  const end = nums.length - 1;

  // 从最右找到第一个比其右边小的位置， 如[9, 8, 3, 5, 4, 1]这里找到 p=2
  let p = end - 1;
  while (p >= 0) {
    if (nums[p] < nums[p + 1]) {
      break;
    }
    p--;
  }

  // 将p后面的元素颠倒排序如，如[9, 8, 3, 5, 4, 1] -> [9, 8, 3, 1, 4, 5]
  let i = p + 1;
  let j = end;
  while (i < j) {
    [nums[i], nums[j]] = [nums[j], nums[i]];
    i++;
    j--;
  }

  if (p >= 0) {
    // 在p右侧找到第一个比p位置值大的元素，并交换  如 [9, 8, 3, 1, 4, 5] -> [9, 8, 4, 1, 3, 5]
    let k = p + 1;
    while (k <= end) {
      if (nums[k] > nums[p]) {
        [nums[k], nums[p]] = [nums[p], nums[k]];
        break;
      }
      k++;
    }
  }

  return nums;
};

const data = [9, 8, 3, 5, 4, 1];
const res = nextPermutation(data);
console.log(res);
