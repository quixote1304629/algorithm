/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
  let result = [-1, -1];
  if (!nums.length) return result;

  let i = 0;
  let j = nums.length - 1;
  let mid = 0;

  while (i <= j) {
    mid = (i + j) >> 1;
    if (nums[mid] < target) {
      i = mid + 1;
    } else if (nums[mid] > target) {
      j = mid - 1;
    } else {
      break;
    }
  }

  if (nums[mid] !== target) return result;

  result = [mid, mid];

  let m = mid - 1;
  while (m >= 0 && nums[m] === target) {
    result[0] = m--;
  }

  let n = mid + 1;
  while (n < nums.length && nums[n] === target) {
    result[1] = n++;
  }

  return result;
};

const res = searchRange([5, 7, 7, 8, 8, 10], 6);
console.log(res);
