/**
 * https://leetcode-cn.com/problems/maximal-square/
 * 在一个由 '0' 和 '1' 组成的二维矩阵内，找到只包含 '1' 的最大正方形，并返回其面积。
 */

/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function (matrix) {
  const len1 = matrix.length;
  if (len1 === 0) return 0;
  const len2 = matrix[0].length;
  if (len2 === 0) return 0;
  let ans = 0;
  const dp = new Array(len2 + 1).fill(0);

  for (let j = 0; j < len1; j++) {
    let prev = 0;
    for (let k = 1; k <= len2; k++) {
      const temp = dp[k];
      if (matrix[j][k - 1] === "1") {
        dp[k] = Math.min(dp[k], dp[k - 1], prev) + 1;
      } else {
        dp[k] = 0;
      }
      prev = temp;

      ans = Math.max(dp[k], ans);
    }
    // console.log(dp.join());
  }

  return ans * ans;
};

const data = [
  ["1", "0", "1", "0", "0"],
  ["1", "0", "1", "1", "1"],
  ["1", "1", "1", "1", "1"],
  ["1", "0", "0", "1", "0"],
];

const res = maximalSquare(data);
console.log(res);
