/**
 * https://leetcode-cn.com/problems/zui-xiao-de-kge-shu-lcof/
 * 输入整数数组 arr ，找出其中最小的 k 个数。例如，输入4、5、1、6、2、7、3、8这8个数字，则最小的4个数字是1、2、3、4。
 */

/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */
var getLeastNumbers = function (arr, k) {
  let length = arr.length;
  let left = 0;
  let right = length - 1;

  while (true) {
    let index = partition(arr, left, right); // 获取切分好的index , 左边比该值都小, 右边都大

    if (index === k) {
      return arr.slice(0, k);
    } else if (index < k) {
      // index 的值偏左，说明比较小，而 index 左边的值比index还小，那么就将左边界移到 index 右
      left = index + 1;
    } else {
      right = index - 1;
    }
  }

  function partition(nums, left, right) {
    // 选取一个随机数作为锚点
    let anchor = Math.floor(Math.random() * (right - left + 1)) + left;
    // 与left交换，比锚点小的值从最左开始累计
    swap(nums, anchor, left);
    let j = left;
    let pivot = nums[left];

    for (let i = left + 1; i <= right; i++) {
      if (nums[i] < pivot) {
        j++;
        swap(nums, i, j);
      }
    }

    swap(nums, left, j);
    return j;
  }

  function swap(nums, a, b) {
    let temp = nums[a];
    nums[a] = nums[b];
    nums[b] = temp;
  }
};
