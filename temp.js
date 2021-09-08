/** dp一维 */
var longestCommonSubsequence = function (text1, text2) {
  const length1 = text1.length;
  const length2 = text2.length;
  // dp[i] 表示 text1[0,length1-1] 与 text2[0,i-1] 的最长公共子序列
  const dp = Array.from({ length: length2 + 1 }).map(() => 0);
  for (let i = 0; i < length1; i++) {
    const c1 = text1.charAt(i);
    let prev = dp[0];
    for (let j = 1; j <= length2; j++) {
      const temp = dp[j];
      const c2 = text2.charAt(j - 1);
      if (c1 === c2) {
        dp[j] = prev + 1;
      } else {
        dp[j] = Math.max(dp[j], dp[j - 1]);
      }
      prev = temp;
    }
  }
  return dp[length2];
};

const s1 = "bl"
const s2 = "yby"
const res = longestCommonSubsequence(s1, s2)
console.log(res)