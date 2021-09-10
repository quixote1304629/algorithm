/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */

var findMedianSortedArrays = function (nums1, nums2) {
  const length1 = nums1.length;
  const length2 = nums2.length;
  let i = (j = 0);
  // 偏右中间位数
  const mid = ((length1 + length2 + 1) >> 1) + 1;
  let count = 0;
  let prev = null;
  let curr = null;
  while (i < length1 && j < length2 && count < mid) {
    if (nums1[i] <= nums2[j]) {
      prev = curr;
      curr = nums1[i];
      count++;
      i++;
    } else {
      prev = curr;
      curr = nums2[j];
      count++;
      j++;
    }
  }

  if (count < mid) {
    let list = i < length1 ? nums1 : nums2;
    let k = i < length1 ? i : j;
    if (mid === count + 1) {
      prev = curr;
    } else {
      prev = list[mid - count + k - 2];
    }
    curr = list[mid - count + k - 1];
  }

  if ((length1 + length2) % 2 === 0) {
    return (curr + prev) / 2;
  } else {
    return prev;
  }
};

const res = findMedianSortedArrays([1, 2], [3, 4]);
console.log(res);
