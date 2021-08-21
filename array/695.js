/**
 * https://leetcode-cn.com/problems/max-area-of-island/
 * 给定一个包含了一些 0 和 1 的非空二维数组 grid 。
 * 一个 岛屿 是由一些相邻的 1 (代表土地) 构成的组合，这里的「相邻」要求两个 1 必须在水平或者竖直方向上相邻。你可以假设 grid 的四个边缘都被 0（代表水）包围着。
 * 找到给定的二维数组中最大的岛屿面积。(如果没有岛屿，则返回面积为 0 。)
 */

/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function (grid) {
  let ans = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      ans = Math.max(calc(grid, i, j), ans);
    }
  }

  function calc(list2, i, j) {
    if (i < 0 || j < 0) return 0;
    if (i >= list2.length) return 0;
    if (j >= list2[i].length) return 0;
    if (list2[i][j] === 0) return 0;
    list2[i][j] = 0;
    return (
      1 +
      calc(list2, i - 1, j) +
      calc(list2, i, j - 1) +
      calc(list2, i + 1, j) +
      calc(list2, i, j + 1)
    );
  }

  return ans;
};
