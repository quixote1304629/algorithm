/** 给定一个不含重复数字的数组 nums ，返回其 所有可能的全排列 。你可以 按任意顺序 返回答案。 */
/**
 * 输入：nums = [1,2,3]
 * 输出：[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
 */

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums, result = [[]]) {
  if (!nums.length) return result;
  const last = nums.pop();
  const result2 = [];
  for (let i = 0; i < result.length; i++) {
    const length = result[i].length;
    for (let j = 0; j <= length; j++) {
      const item = [...result[i]];
      item.splice(j, 0, last);
      result2.push(item);
    }
  }
  return permute(nums, result2);
};

var permute = function (nums) {
  if (!nums.length) return [];
  const result = [];
  const sub = [];
  const dfs = (list = []) => {
    if (!list.length) {
      result.push([...sub]);
      return;
    }

    for (let i = 0; i < list.length; i++) {
      sub.push(list[i]);
      dfs([...list.slice(0, i), ...list.slice(i + 1)]);
      sub.pop();
    }
  };
  dfs(nums);
  return result;
};


/** 交换元素的写法 */
var permute = function(nums) {
  const length = nums.length
  const result = []
  // p: 交换到第几个元素
  function dfs(p) {
      if(p === length){
          result.push([...nums])
          return
      }
      for(let i = p; i < length; i++) {
          swap(nums, p, i)
          dfs(p + 1)
          swap(nums, p, i)
      }
  }
  dfs(0)
  return result
};

function swap(arr, i, j) {
  const temp = arr[i]
  arr[i] = arr[j]
  arr[j] = temp
}

const res = permute([1, 2, 3]);
console.log(res);
