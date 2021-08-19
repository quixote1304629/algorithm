/**
 * @param {string} s
 * @return {number}
 */
var longestPalindromeSubseq = function (s) {
  const length = s.length;
  const dp = new Array(length).fill(0).map((_) => new Array(length).fill(0));
  console.log(dp);
  // for (let i = 1; i < length; i++) {
  //   dp[i][i] = 1;
  //   const ci = s.charAt(i);
  //   for (let j = i - 1; j >= 0; j--) {
  //     const cj = s.charAt(j);
  //     if (ci === cj) {
  //       dp[j][i] = dp[j + 1][i - 1] + 2;
  //     } else {
  //       dp[j][i] = Math.max(dp[j + 1][i], dp[j][i - 1]);
  //     }
  //   }
  // }
  // return dp[0][length - 1];
};

const result = longestPalindromeSubseq("bbbab");
console.log(result);
