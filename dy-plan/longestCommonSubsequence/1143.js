/**
 * https://leetcode-cn.com/problems/longest-common-subsequence/
 * 给定两个字符串 text1 和 text2，返回这两个字符串的最长 公共子序列 的长度。如果不存在 公共子序列 ，返回 0 。
 * 一个字符串的 子序列 是指这样一个新的字符串：它是由原字符串在不改变字符的相对顺序的情况下删除某些字符（也可以不删除任何字符）后组成的新字符串。
 * 两个字符串的 公共子序列 是这两个字符串所共同拥有的子序列。
 *
 * 输入：text1 = "abcde", text2 = "ace"
 * 输出：3
 * 解释：最长公共子序列是 "ace" ，它的长度为 3 。
 */

/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function (text1, text2) {
  const length1 = text1.length;
  const length2 = text2.length;
  if (!length1 || !length2) return 0;
  const dp = Array.from({ length: length1 + 1 }).map(() => Array.from({ length: length2 + 1 }).map(() => 0))
  for (let i = 0; i < length1; i++) {
    const c1 = text1.charAt(i)
    for (let j = 0; j < length2; j++) {
      const c2 = text2.charAt(j)
      if (c1 === c2) {
        dp[i + 1][j + 1] = dp[i][j] + 1
      } else {
        dp[i + 1][j + 1] = Math.max(dp[i + 1][j], dp[i][j + 1])
      }
    }
  }
  // console.log(dp)
  return dp[length1][length2];
};

// const result = longestCommonSubsequence("abcde", "ace");
// console.log(result)


var longestCommonSubsequence2 = function(text1, text2) {
  const text1Length = text1.length;
  const text2Length = text2.length;
  const dp = Array(text2Length + 1).fill(0);

  for (let i = 1; i < text1Length + 1; i++) {
    let upLeft = dp[0];
    for (let j = 1; j < text2Length + 1; j++) {
      const tmp = dp[j];
      if (text1[i - 1] === text2[j - 1]) {
        dp[j] = upLeft + 1;
      } else {
        dp[j] = Math.max(dp[j], dp[j - 1]);
      }
      upLeft = tmp;
    }
  }

  return dp[text2Length];
};

const result = longestCommonSubsequence2("abcde", "faace");
console.log(result)