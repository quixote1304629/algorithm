/**
 * https://leetcode-cn.com/problems/combination-sum/submissions/
 * 给定一个无重复元素的正整数数组 candidates 和一个正整数 target ，找出 candidates 中所有可以使数字和为目标数 target 的唯一组合。
 * candidates 中的数字可以无限制重复被选取。如果至少一个所选数字数量不同，则两种组合是唯一的。
 * 对于给定的输入，保证和为 target 的唯一组合数少于 150 个。
 */

/**
 * 输入: candidates = [2,3,6,7], target = 7
 * 输出: [[7],[2,2,3]]
 */

var combinationSum = function (candidates, target) {
  let result = [];
  let queue = [];
  candidates.sort((a, b) => a - b);
  function dfs(index, sum) {
    if (target < sum) return;
    if (target === sum) {
      result.push([...queue]);
      return;
    }
    for (let i = index; i < candidates.length; i++) {
      if (candidates[i] > target) return;
      queue.push(candidates[i]);
      dfs(i, sum + candidates[i]);
      queue.pop();
    }
  }
  dfs(0, 0);
  return result;
};
