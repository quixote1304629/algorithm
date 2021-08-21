/** 给你一个整数数组 nums ，数组中的元素 互不相同 。返回该数组所有可能的子集（幂集）。 */

/**
 * 输入：nums = [1,2,3]
 * 输出：[[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]
 */

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
  let result = [[]];
  for (let i = 0; i < nums.length; i++) {
    let arr = [];
    for (let j = 0; j < result.length; j++) {
      arr.push([...result[j], nums[i]]);
    }
    result = [...result, ...arr];
  }
  return result;
};

var subsets = function (nums, result = [[]]) {
  if (!nums.length) return result;
  const last = nums.pop();
  const length = result.length;
  for (let i = 0; i < length; i++) {
    result.push([...result[i], last]);
  }
  subsets(nums, result);
  return result;
};

const res = subsets([1, 2, 3, 4]);
console.log(res);
