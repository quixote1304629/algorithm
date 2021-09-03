/**
 * https://leetcode-cn.com/problems/excel-sheet-column-number/
 * 给你一个字符串 columnTitle ，表示 Excel 表格中的列名称。返回该列名称对应的列序号。
 */

/**
 * @param {string} columnTitle
 * @return {number}
 */
var titleToNumber = function (columnTitle) {
  const end = columnTitle.length - 1;
  let ans = 0;
  let i = end;
  while (i >= 0) {
    ans += (columnTitle.charAt(i).codePointAt() - 64) * Math.pow(26, end - i);
    i--;
  }
  return ans
};
