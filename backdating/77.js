/**
 * https://leetcode-cn.com/problems/combinations/
 * 给定两个整数 n 和 k，返回范围 [1, n] 中所有可能的 k 个数的组合。
 * 你可以按 任何顺序 返回答案。
 */

/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
  const result = [];
  const sub = [];
  function dfs(i = 1) {
    if (sub.length === k) {
      result.push([...sub]);
      return;
    } else if (sub.length > k) {
      return;
    }
    if (i > n) return;

    sub.push(i);
    dfs(i + 1);
    sub.pop();
    dfs(i + 1);
  }
  dfs();
  return result;
};

const res = combine(5, 2);
console.log(res);
