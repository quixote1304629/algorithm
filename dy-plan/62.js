/**
 * https://leetcode-cn.com/problems/unique-paths/
 * 一个机器人位于一个 m x n 网格的左上角 （起始点在下图中标记为 “Start” ）。
 * 机器人每次只能向下或者向右移动一步。机器人试图达到网格的右下角（在下图中标记为 “Finish” ）。
 * 问总共有多少条不同的路径？
 */

/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {
  const dp = Array.from({ length: m }).map(() => 1);
  for (let j = 1; j < n; j++) {
    for (let k = 1; k < m; k++) {
      dp[k] = dp[k] + dp[k - 1];
    }
  }
  return dp[m - 1];
};

const res = uniquePaths(7, 3);
console.log(res);
