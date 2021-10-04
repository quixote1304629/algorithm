/**
 * https://leetcode-cn.com/problems/longest-palindromic-substring/
 * 给你一个字符串 s，找到 s 中最长的回文子串。
 * 输入：s = "cbbdc"
 * 输出："bb"
 */

/**
 * 二维dp
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  const length = s.length;
  if (length <= 1) return s;

  let ans = s.charAt(0);

  const dp = Array.from({ length }).map(() =>
    Array.from({ length }).map(() => false)
  );

  for (let i = 1; i < length; i++) {
    dp[i][i] = true;
    const c1 = s.charAt(i);
    for (let j = i - 1; j >= 0; j--) {
      const c2 = s.charAt(j);
      if (c1 === c2) {
        dp[j][i] = i > j + 1 ? dp[j + 1][i - 1] : true;
        if (dp[j][i] && i - j + 1 > ans.length) {
          ans = s.slice(j, i + 1);
        }
      } else {
        dp[j][i] = false;
      }
    }
  }
  return ans;
};

/** 一维dp */
var longestPalindrome = function (s) {
  const length = s.length;
  if (length <= 1) return s;

  let ans = s.charAt(0);

  const dp = Array.from({ length }).map(() => true);

  for (let i = 1; i < length; i++) {
    const c1 = s.charAt(i);
    for (let j = 0; j < i; j++) {
      const c2 = s.charAt(j);
      if (c1 === c2) {
        dp[j] = i > j + 1 ? dp[j + 1] : true;
        if (dp[j] && i - j + 1 > ans.length) {
          ans = s.slice(j, i + 1);
        }
      } else {
        dp[j] = false;
      }
    }
  }
  return ans;
};


/** 一维dp */
 var longestPalindrome = function(s) {
  let ans = s.charAt(0)
  const length = s.length
  const dp = new Array(length).fill(true)
  for(let i = 1; i < length; i++) {
      const c1 = s.charAt(i)
      let prev = true
      for(let j = i - 1; j >= 0; j--) {
          const temp = dp[j]
          const c2 = s.charAt(j)
          if(c1 === c2) {
              dp[j] = prev
              if(prev && (i - j + 1) > ans.length) {
                  ans = s.slice(j, i+1)
              }
          } else {
              dp[j] = false
          }
          prev = temp
      }
  }
  return ans
};

/** 循环 */
var longestPalindrome = function (s) {
  const n = s.length;
  if (n === 0) return "";
  let i = 0;
  let longestPalindrome = "";
  while (i < n) {
    let left = i;
    let right = i;
    let coreLen = 1;
    while (right + 1 < n && s[right + 1] === s[i]) {
      right += 1;
      coreLen += 1;
    }
    while (
      left - 1 >= 0 &&
      right + 1 <= n - 1 &&
      s[left - 1] === s[right + 1]
    ) {
      --left;
      ++right;
    }
    if (right - left + 1 > longestPalindrome.length) {
      longestPalindrome = s.slice(left, right + 1);
    }
    i = i + coreLen;
  }
  return longestPalindrome;
};

const result = longestPalindrome("abcffcac");
console.log(result);
