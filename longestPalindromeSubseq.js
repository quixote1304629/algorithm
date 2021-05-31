/**
 * @param {string} s
 * @return {number}
 */
var longestPalindromeSubseq = function (s) {
  const length = s.length;
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
