/**
 * https://leetcode-cn.com/problems/longest-substring-without-repeating-characters/
 * 给定一个字符串 s ，请你找出其中不含有重复字符的 最长子串 的长度。
 */

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s = "") {
  const len = s.length;
  if (len < 2) return len;
  const map = new Map();
  map.set(s.charAt(0), 0);
  let ans = 1;
  let i = 0;
  let j = 1;
  while (j < len) {
    const cj = s.charAt(j);
    const lastIndex = map.get(cj);
    map.set(cj, j);
    if (lastIndex !== undefined && lastIndex >= i) {
      ans = Math.max(ans, j - i);
      i = lastIndex + 1;
      j++;
    } else {
      j++;
    }
  }
  ans = Math.max(ans, j - i);
  return ans;
};

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let length = s.length;
  let res = 0;
  let map = new Map();
  for (let i = 0, j = 0; j < length; j++) {
    let item = s.charAt(j);
    if (map.get(item)) {
      i = Math.max(map.get(item), i);
    }
    res = Math.max(res, j - i + 1);
    map.set(item, j + 1);
  }
  return res;
};

var lengthOfLongestSubstring = function (s = "") {
  let startIndex = 0;
  let res = 0;
  for (let i = 0; i < s.length; i++) {
    const oldIndex = s.indexOf(s[i], startIndex);
    if (oldIndex < i) {
      startIndex = oldIndex + 1;
    } else {
      res = Math.max(res, i - startIndex + 1);
    }
  }
  return res;
};

// const data = "davdf";
const data = "pwwkew";
const res = lengthOfLongestSubstring(data);
console.log(res);
