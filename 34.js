/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
  const result = [-1, -1];
  const end = nums.length - 1;

  if (nums[end] < target || nums[0] > target) return result;

  let left = 0;
  let right = end;
  let mid = end >>> 1;
  while (left <= right) {
    if (nums[mid] === target) {
      break;
    } else if (nums[mid] > target) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
    mid = (left + right) >>> 1;
  }

  if(nums[mid] !== target) {
    return result;
  }

  if (mid === 0) {
    result[0] = 0;
  } else {
    let left1 = 0;
    let right1 = mid;
    let mid1 = mid >>> 1;
    while (left1 < right1) {
      if (nums[mid1] < target) {
        left1 = mid1 + 1;
      } else {
        right1 = mid1 - 1;
      }
      mid1 = (left1 + right1) >>> 1;
      console.log(left1, right1)
    }
    result[0] = nums[left1] === target ? left1 : left1 + 1;
  }

  if (mid === end) {
    result[1] = end;
  } else {
    let left2 = mid;
    let right2 = end;
    let mid2 = (mid + end) >>> 1;
    while (left2 < right2) {
      if (nums[mid2] > target) {
        right2 = mid2 - 1;
      } else {
        left2 = mid2 + 1;
      }
      mid2 = (left2 + right2) >>> 1;
    }
    result[1] = nums[left2] === target ? left2 : left2 - 1;
  }

  return result;
};

const result = searchRange([1,2,3,3,3,3,4,5,9], 3);
console.log(result);
