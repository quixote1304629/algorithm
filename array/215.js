/**
 * https://leetcode-cn.com/problems/kth-largest-element-in-an-array/
 * 给定整数数组 nums 和整数 k，请返回数组中第 k 个最大的元素。
 *
 * */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
// var findKthLargest = function (nums, k) {
//   nums = nums.sort((a, b) => a - b);
//   return nums[k - 1];
// };

var findKthLargest = function(nums, k) {
  let n = nums.length
  let target = n - k
  let left = 0, right = n - 1

  while (true) {
      let index = partition(nums, left, right) // 获取切分好的index , 左边比该值都小, 右边都大

      if (index === target) {
          return nums[target]
      } else if (index < target) { 
          // index 的值偏左，说明比较小，而 index 左边的值比index还小，那么就将左边界移到 index 右
          left = index + 1
      } else {
          right = index - 1
      }
  }

  function partition(nums, left, right) {
       // 选取一个随机数作为锚点
      let anchor = Math.floor(Math.random() * (right - left + 1)) + left
      // 与left交换，比锚点小的值从最左开始累计
      swap(nums, anchor, left)
      let j = left
      let pivot = nums[left]

      for (let i = left + 1; i <= right; i++) {
          if (nums[i] < pivot) {
              j++
              swap(nums, i, j)
          }
      }

      swap(nums, left, j)
      console.log(left, anchor, j, Array.prototype.toString.call(nums));
      return j
  }

  function swap(nums, a, b) {
      let temp = nums[a]
      nums[a] = nums[b]
      nums[b] = temp
  }
}

const data = [6, 5, 1, 9, 4, 2, 3, 12];
const res = findKthLargest(data, 2);
console.log(res);

