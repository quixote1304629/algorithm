/**
 * https://leetcode-cn.com/problems/first-missing-positive/
 * 给你一个未排序的整数数组 nums ，请你找出其中没有出现的最小的正整数。
 * 请你实现时间复杂度为 O(n) 并且只使用常数级别额外空间的解决方案。
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function (nums) {
  let n = nums.length;
  for (let i = 0; i < n; i++) {
    if (nums[i] < 1) {
      nums[i] = n + 1;
    }
  }
  for (let i = 0; i < n; i++) {
    const num = Math.abs(nums[i]) - 1;
    num < n && (nums[num] = -Math.abs(nums[num]));
  }
  for (let i = 0; i < n; i++) {
    if (nums[i] > 0) {
      return i + 1;
    }
  }
  return n + 1;
};

var firstMissingPositive = function (nums) {
  const length = nums.length;
  const set = new Set();

  for (let i = 0; i < length; i++) {
    set.add(nums[i]);
  }

  for (let j = 1; j <= length; j++) {
    if (!set.has(j)) {
      return j;
    }
  }
  return length + 1;
};

var firstMissingPositive = function (nums) {
  let len = nums.length;

  function swap(list, m, n) {
    const temp = list[m];
    list[m] = list[n];
    list[n] = temp;
  }

  for (let i = 0; i < len; i++) {
    if (nums[i] > 0 && nums[i] <= len &&  nums[nums[i] - 1] != nums[i]) {
      // 满足在指定范围内、并且没有放在正确的位置上，才交换
      // 例如：数值 3 应该放在索引 2 的位置上
      swap(nums, nums[i] - 1, i);
    }
  }

  // [1, -1, 3, 4]
  for (let i = 0; i < len; i++) {
    if (nums[i] != i + 1) {
      return i + 1;
    }
  }
  // 都正确则返回数组长度 + 1
  return len + 1;
};

const data = [3, 4, -1, 1];
// const data = [1, -1, 3, 4];
const res = firstMissingPositive(data);
console.log(res);
