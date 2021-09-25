/**
 * https://leetcode-cn.com/problems/RQku0D/
 * 给定一个非空字符串 s，请判断如果 最多 从字符串中删除一个字符能否得到一个回文字符串。
 */

/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function (s) {
  let i = 0,
    j = s.length - 1;
  while (i < j) {
    if (s.charAt(i) === s.charAt(j)) {
      i++;
      j--;
    } else {
      return valid(s, i + 1, j) || valid(s, i, j - 1);
    }
  }
  return true;
};

function valid(s, i, j) {
  while (i < j) {
    if (s.charAt(i) === s.charAt(j)) {
      i++;
      j--;
    } else {
      return false;
    }
  }
  return true;
}
