/**
 * https://leetcode-cn.com/problems/intersection-of-two-arrays-ii/
 * 给定两个数组，编写一个函数来计算它们的交集。
 *
 * 输入：nums1 = [1,2,2,1], nums2 = [2,2]
 * 输出：[2,2]
 */

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
  const result = [];
  let length1 = nums1.length;
  let length2 = nums2.length;
  if (!length1 || !length2) return result;
  nums1.sort((a, b) => a - b);
  nums2.sort((a, b) => a - b);
  if (nums1[length1 - 1] > nums2[length2 - 1]) {
    [nums1, nums2] = [nums2, nums1];
    [length1, length2] = [length2, length1];
  }
  let j = 0;
  for (let i = 0; i < length1 && j < length2; i++) {
    while (j < length2) {
      if (nums1[i] < nums2[j]) {
        break;
      } else if (nums1[i] === nums2[j]) {
        result.push(nums1[i]);
        j++;
        break;
      } else {
        j++;
      }
    }
  }
  return result;
};

var num1 = [
  61, 24, 20, 58, 95, 53, 17, 32, 45, 85, 70, 20, 83, 62, 35, 89, 5, 95, 12, 86,
  58, 77, 30, 64, 46, 13, 5, 92, 67, 40, 20, 38, 31, 18, 89, 85, 7, 30, 67, 34,
  62, 35, 47, 98, 3, 41, 53, 26, 66, 40, 54, 44, 57, 46, 70, 60, 4, 63, 82, 42,
  65, 59, 17, 98, 29, 72, 1, 96, 82, 66, 98, 6, 92, 31, 43, 81, 88, 60, 10, 55,
  66, 82, 0, 79, 11, 81,
];
var num2 = [
  5, 25, 4, 39, 57, 49, 93, 79, 7, 8, 49, 89, 2, 7, 73, 88, 45, 15, 34, 92, 84,
  38, 85, 34, 16, 6, 99, 0, 2, 36, 68, 52, 73, 50, 77, 44, 61, 48,
];
const res = intersect(num1, num2);
console.log(res);

var intersect2 = function (nums1, nums2) {
  let [i, j] = [0, 0];
  let backs = [];
  nums1.sort((a, b) => {
    return a - b;
  });
  nums2.sort((a, b) => {
    return a - b;
  });
  while (i < nums1.length && j < nums2.length) {
    if (nums1[i] === nums2[j]) {
      backs.push(nums1[i]);
      i++;
      j++;
    } else if (nums1[i] < nums2[j]) {
      i++;
    } else {
      j++;
    }
  }
  return backs;
};
