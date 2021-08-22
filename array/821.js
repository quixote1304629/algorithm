/**
 * https://leetcode-cn.com/problems/shortest-distance-to-a-character/
 * 给你一个字符串 s 和一个字符 c ，且 c 是 s 中出现过的字符。
 * 返回一个整数数组 answer ，其中 answer.length == s.length 且 answer[i] 是 s 中从下标 i 到离它 最近 的字符 c 的 距离 。
 * 两个下标 i 和 j 之间的 距离 为 abs(i - j) ，其中 abs 是绝对值函数。
 */

/**
 * @param {string} s
 * @param {character} c
 * @return {number[]}
 */
var shortestToChar = function (s, c) {
  const result = [];
  const end = s.length - 1;
  let l = -Infinity;
  let r = s.indexOf(c);
  let i = 0;
  while (i <= end) {
    const curr = s.charAt(i);

    result.push(Math.min(i - l, r - i));

    if (i === r) {
      l = i;
      const nextR = s.indexOf(c, i + 1);
      r = nextR < 0 ? Infinity : nextR;
    }

    i++;
  }
  return result 
};
