/**
 * https://leetcode-cn.com/problems/longest-common-subsequence/
 * 给定两个字符串 text1 和 text2，返回这两个字符串的最长 公共子序列 的长度。如果不存在 公共子序列 ，返回 0 。
 * 一个字符串的 子序列 是指这样一个新的字符串：它是由原字符串在不改变字符的相对顺序的情况下删除某些字符（也可以不删除任何字符）后组成的新字符串。
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
  const dp = Array.from({ length: length1 + 1 }).map(() =>Array.from({ length: length2 + 1 }).map(() => 0));
  for (let i = 0; i < length1; i++) {
    const c1 = text1.charAt(i)
    for (let j = 0; j < length1; j++) {
      const c2 = text2.charAt(j)
      if(c1 === c2) {
        dp[i+1][j+1] = dp[i][j] + 1
      } else {
        dp[i+1][j+1] = Math.max(dp[i][j+1], dp[i+1][j])
      }
    }
  }
  return dp[length1][length2]
};


longestCommonSubsequence('abc', 'def')


/** dp一维 */
var longestCommonSubsequence = function (text1, text2) {
  const length1 = text1.length;
  const length2 = text2.length;
  const dp = Array.from({ length: length2 + 1 }).map(() => 0);
  for (let i = 1; i <= length1; i++) {
    const c1 = text1.charAt(i-1) 
    let prev = dp[0]
    for (let j = 1; j <= length2; j++) {
      const temp = dp[j]
      const c2 = text2.charAt(j-1) 
      if(c1 === c2) {
        dp[j] = prev + 1
      } else {
        dp[j] = Math.max(dp[j-1], dp[j])
      }
      prev = temp
    }
  }
  return dp[length2]
};



const s1 = "dknkdizqxkdczafixidorgfcnkrirmhmzqbcfuvojsxwraxe"
const s2 = "dulixqfgvipenkfubgtyxujixspoxmhgvahqdmzmlyhajerqz"
const res = longestCommonSubsequence(s1, s2)
console.log(res)