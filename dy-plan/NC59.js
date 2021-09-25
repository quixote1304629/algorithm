/**
 * https://www.nowcoder.com/practice/7d21b6be4c6b429bb92d219341c4f8bb?tpId=117&&tqId=37823&&companyId=665&rp=1&ru=/company/home/code/665&qru=/ta/job-code-high/question-ranking
 * 给定一个 n * m 的矩阵 a，从左上角开始每次只能向右或者向下走，最后到达右下角的位置，路径上所有的数字累加起来就是路径和，输出所有的路径中最小的路径和。
 */

/**
 * 
 * @param matrix int整型二维数组 the matrix
 * @return int整型
 */
 function minPathSum( matrix ) {
  const row = matrix.length
  const col = matrix[0].length
  const dp = new Array(col+1).fill(Infinity)
  dp[1] = 0
  for(let i = 0;i<row; i++) {
      for(let j = 0;j<col; j++) {
          dp[j+1] = Math.min(dp[j+1], dp[j]) + matrix[i][j]
      }
  }
  return dp[col]
}
module.exports = {
  minPathSum : minPathSum
};