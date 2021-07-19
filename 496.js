/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function (nums1, nums2) {
  const result = [];
  for (let i = 0; i < nums1.length; i++) {
    const start = nums2.indexOf(nums1[i]);
    let val = -1;
    for (let j = start + 1; j < nums2.length; j++) {
      if (nums2[j] > nums1[i]) {
        val = nums2[j];
        break;
      }
    }
    result.push(val);
  }
  return result;
};

nextGreaterElement([4, 1, 2], [1, 3, 4, 2]);

new Promise((resolve) => {
  resolve("aaa");
});
