/**
 * @param {number[]} nums
 * @return {number}
 */
var findLengthOfLCIS = function (nums) {
  let ans = 1;
  let left = 0;
  let last = nums[0];
  for (let r = 1; r < nums.length; r++) {
    const curr = nums[r];

    if (curr <= last) {
      ans = Math.max(ans, r - left);
      left = r;
    } else {
      ans = Math.max(ans, r - left + 1);
    }

    last = curr;
  }

  return ans;
};

var findLengthOfLCIS = function (nums) {
  let ans = 1;
  let count = 1;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > nums[i - 1]) {
      count++;
      ans = Math.max(ans, count);
    } else {
      count = 1;
    }
  }

  return ans;
};
