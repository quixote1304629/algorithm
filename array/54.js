/**
 * https://leetcode-cn.com/problems/spiral-matrix/
 * 给你一个 m 行 n 列的矩阵 matrix ，请按照 顺时针螺旋顺序 ，返回矩阵中的所有元素。
 */

/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
  if (!matrix.length || !matrix[0].length) return [];
  let x1 = 0;
  let y1 = 0;
  let x2 = matrix[0].length - 1;
  let y2 = matrix.length - 1;

  const result = [];

  while (x1 <= x2 && y1 <= y2) {
    if (x1 > x2) break;
    for (let i = x1; i <= x2; i++) {
      const row = matrix[y1];
      result.push(row[i]);
    }
    y1++;

    if (y1 > y2) break;
    for (let j = y1; j <= y2; j++) {
      const row = matrix[j];
      result.push(row[x2]);
    }
    x2--;

    if (x1 > x2) break;
    for (let m = x2; m >= x1; m--) {
      const row = matrix[y2];
      result.push(row[m]);
    }
    y2--;

    if (y1 > y2) break;
    for (let n = y2; n >= y1; n--) {
      const row = matrix[n];
      result.push(row[x1]);
    }
    x1++;

    // console.log(result.join())
  }

  return result;
};

const data = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
];
const res = spiralOrder(data);
console.log(res);
