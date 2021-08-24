/**
 * https://leetcode-cn.com/problems/combination-sum-ii/
 * 给定一个数组 candidates 和一个目标数 target ，找出 candidates 中所有可以使数字和为 target 的组合。
 * candidates 中的每个数字在每个组合中只能使用一次。
 * 注意：解集不能包含重复的组合。
 */

/**
 * 1 <= candidates.length <= 100
 * 1 <= candidates[i] <= 50
 * 1 <= target <= 30}
 */

/**
 * 输入: candidates = [2,5,2,1,2], target = 5,
 * 输出:[[1,2,2],[5]]
 */

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function (candidates, target) {
  candidates.sort((a, b) => a - b);

  const result = [];

  const len = candidates.length;

  function dfs(list, i = 0, curr = 0, sub = []) {
    if (target === curr) {
      result.push(sub);
      return;
    }
    if (target < curr) return;
    if (i >= len) return;

    /** 找到重复中止位置 */
    let j = i + 1;
    while (j <= len && list[j] === list[j - 1]) j++;

    for (let k = 0; k <= j - i; k++) {
      const nextCurr = curr + k * list[i];
      const nextSub = [...sub, ...new Array(k).fill(list[i])];
      dfs(list, j, nextCurr, nextSub);
    }
  }

  dfs(candidates);

  return result;
};

/** 优 */
var combinationSum2 = function (candidates, target) {
  let result = [];
  let queue = [];
  function dfs(index, target) {
    if (target < 0) return;
    if (target === 0) {
      result[result.length] = [...queue];
      return;
    }
    for (let i = index; i < candidates.length; i++) {
      if (candidates[i] > target) return;
      // 回溯时， 保证同一层不出现重复的
      if (i > index && candidates[i] === candidates[i - 1]) {
        continue;
      }
      queue.push(candidates[i]);
      dfs(i + 1, target - candidates[i]);
      queue.pop();
    }
  }
  candidates.sort((a, b) => a - b);
  dfs(0, target);
  return result;
};

const res = combinationSum2([1, 1, 1, 5, 6, 7, 10], 8);
console.log(res);
