/**
 * https://leetcode-cn.com/problems/intersection-of-two-arrays/
 * 给定两个数组，编写一个函数来计算它们的交集。
 * 输入：nums1 = [4,9,5], nums2 = [9,4,9,8,4]
 * 输出：[9,4]
 */

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
  nums1.sort((a, b) => a - b);
  nums2.sort((a, b) => a - b);
  const length1 = nums1.length;
  const length2 = nums2.length;
  // [4,5,9]
  // [4,4,8,9,9]
  let i = 0;
  let j = 0;
  let ans = [];
  let prev = null;
  while (i < length1 && j < length2) {
    if (nums1[i] < nums2[j]) {
      i++;
    } else if (nums1[i] > nums2[j]) {
      j++;
    } else {
      if (prev !== nums1[i]) {
        ans.push(nums1[i]);
        prev = nums1[i];
      }
      i++;
      j++;
    }
  }
  return ans;
};

const data1 = [4, 5, 9];
const data2 = [4, 4, 8, 9, 9];
const res = intersection(data1, data2);
console.log(res);
