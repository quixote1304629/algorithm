/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  const length1 = nums1.length;
  const length2 = nums2.length;
  let i = (j = 0);
  const mid = (length1 + length2 + 1) >> 1;
  const flag = (length1 + length2) % 2 === 0;
  let k = 0;
  let target1 = null;
  let target2 = null;
  while (i < length1 && j < length2) {
    if (k === mid) {
      break;
    }
    if (nums1[i] <= nums2[j]) {
      target1 = nums1[i];
      k++;
      i++;
    } else {
      target1 = nums2[j];
      k++;
      j++;
    }
  }
  if (k < mid) {
    let list = null;
    let z = null;
    if (i < length1) {
      list = nums1;
      z = i;
    } else {
      list = nums2;
      z = j;
    }
    target1 = list[mid - k + z - 1];
    if (flag) {
      target2 = list[mid - k + z];
    }
  } else {
    if (flag) {
      target2 = Math.min(
        nums1[i] === undefined ? Infinity : nums1[i],
        nums2[j] === undefined ? Infinity : nums2[j]
      );
    }
  }

  console.log(k, target1, target2);

  if (flag) {
    return (target1 + target2) / 2;
  } else {
    return target1;
  }
};

const res = findMedianSortedArrays([2], []);
console.log(res);
