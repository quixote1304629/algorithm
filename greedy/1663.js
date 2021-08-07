/**
 * https://leetcode-cn.com/problems/smallest-string-with-a-given-numeric-value/
 * 小写字符 的 数值 是它在字母表中的位置（从 1 开始），因此 a 的数值为 1 ，b 的数值为 2 ，c 的数值为 3 ，以此类推。
 * 字符串由若干小写字符组成，字符串的数值 为各字符的数值之和。例如，字符串 "abe" 的数值等于 1 + 2 + 5 = 8 。
 * 给你两个整数 n 和 k 。返回 长度 等于 n 且 数值 等于 k 的 字典序最小 的字符串。
 */

/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getSmallestString = function (n, k) {
  const x = Math.floor((k - n) / 25);
  const y = (k - n) % 25;
  let result = "a".repeat(Math.max(n - x - 1, 0));
  if (x !== n) {
    result += String.fromCharCode(97 + y);
  }
  result += "z".repeat(x);
  return result;
};
