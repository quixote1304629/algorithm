/**
 * https://leetcode-cn.com/problems/n-queens/
 * n 皇后问题 研究的是如何将 n 个皇后放置在 n×n 的棋盘上，并且使皇后彼此之间不能相互攻击。
 * 给你一个整数 n ，返回所有不同的 n 皇后问题 的解决方案。
 * 每一种解法包含一个不同的 n 皇后问题 的棋子放置方案，该方案中 'Q' 和 '.' 分别代表了皇后和空位。
 */

/**
 * @param {number} n
 * @param deep 当前深度
 * @param xPos 已站位置的x坐标数组
 * @param sub 子集结果
 * @param result 结果
 * @return {string[][]}
 */
var solveNQueens = function (n, deep = 0, xPos = [], sub = [], result = []) {
  if (deep === sub.length) {
    if (deep === n) {
      result.push(sub);
      return;
    }
  } else {
    return;
  }

  for (let i = 0; i < n; i++) {
    // 判断垂直方向是否有Q
    if (xPos.includes(i)) continue;

    // 判断对角线上是否有Q
    let flag = false;
    for (let j = 0; j < xPos.length; j++) {
      // 两个坐标 (xPos[j], j+1) (i, deep+1)
      // 斜率
      const slope = Math.abs((deep - j) / (i - xPos[j]));
      if (slope === 1) {
        flag = true;
        break;
      }
    }
    if (flag) continue;

    const str = ".".repeat(i) + "Q" + ".".repeat(n - i - 1);
    solveNQueens(n, deep + 1, [...xPos, i], [...sub, str], result);
  }
  return result;
};

const res = solveNQueens(4);
console.log(res);
