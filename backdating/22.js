/**
 * 数字 n 代表生成括号的对数，请你设计一个函数，用于能够生成所有可能的并且 有效的 括号组合。
 * 输入：n = 3
 * 输出：["((()))","(()())","(())()","()(())","()()()"]
 */

/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  if (n === 0) return result;
  return dfs("", n, n);
};

function dfs(curr, left = 0, right = 0, res = []) {
  if (left === 0 && right === 0) {
    res.push(curr);
  }
  if (left > right) return res;
  if (left > 0) {
    dfs(curr + "(", left - 1, right, res);
  }
  if (right > 0) {
    dfs(curr + ")", left, right - 1, res);
  }
  return res;
}


const result = generateParenthesis(2)
console.log(result)