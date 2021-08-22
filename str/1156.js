/**
 * https://leetcode-cn.com/problems/thousand-separator/
 * 给你一个整数 n，请你每隔三位添加点（即 "." 符号）作为千位分隔符，并将结果以字符串格式返回。
 * 输入：n = 123456789
 * 输出："123.456.789"
 */


var thousandSeparator = function (n) {
  const arr = [];
  let str = n + "";
  let j = str.length;
  let i = str.length - 3;
  while (j > 0) {
    if (i >= 0) {
      arr.unshift(str.slice(i, j));
    } else if (j > 0) {
      arr.unshift(str.slice(0, j));
    }
    j = i;
    i = i - 3;
  }
  return arr.join('.');
};