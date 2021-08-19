/**
 * https://leetcode-cn.com/problems/longest-palindromic-subsequence/
 * 给你一个字符串 s ，找出其中最长的回文子序列，并返回该序列的长度。
 * 子序列定义为：不改变剩余字符顺序的情况下，删除某些字符或者不删除任何字符形成的一个序列。
 *
 * 输入：s = "bbbab"
 * 输出：4
 * 解释：一个可能的最长回文子序列为 "bbbb" 。
 */

/**
 * @param {string} s
 * @return {number}
 */
var longestPalindromeSubseq = function (s) {
  const length = s.length;
  const dep = new Array(length).fill(0).map((_) => new Array(length).fill(0));
  for (let i = length - 1; i >= 0; i--) {
    dep[i][i] = 1;
    const c1 = s.charAt(i);
    for (let j = i + 1; j < length; j++) {
      const c2 = s.charAt(j);
      if (c1 === c2) {
        dep[i][j] = dep[i + 1][j - 1] + 2;
      } else {
        dep[i][j] = Math.max(dep[i + 1][j], dep[i][j - 1]);
      }
    }
  }
  return dep[0][length - 1];
};

/**
 * @param {string} s
 * @return {number}
 */
var longestPalindromeSubseq = function (s) {
  const length = s.length;
  // dep[x] 表示索引为[i - x]的字符串回文数量
  const dep = new Array(length).fill(1);
  for (let i = length - 1; i >= 0; i--) {
    let prev = 0;
    for (let j = i + 1; j < length; j++) {
      const temp = dep[j];
      if (s[i] === s[j]) {
        dep[j] = prev + 2;
      } else {
        dep[j] = Math.max(dep[j - 1], dep[j]);
      }
      prev = temp;
    }
  }
  return dep[length - 1];
};

var longestPalindromeSubseq = function (s) {
  const length = s.length;
  // dep[x] 表示索引为[x - i]的字符串回文数量
  const dep = new Array(length).fill(1);
  for (let i = 0; i < length; i++) {
    let prev = 0;
    for (let j = i - 1; j >= 0; j--) {
      const temp = dep[j];
      if (s[i] === s[j]) {
        dep[j] = prev + 2;
      } else {
        dep[j] = Math.max(dep[j + 1], dep[j]);
      }
      prev = temp;
    }
  }
  return dep[0];
};
