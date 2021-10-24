/**
 * https://leetcode-cn.com/problems/basic-calculator/
 * 给你一个字符串表达式 s ，请你实现一个基本计算器来计算并返回它的值。
 */

/**
 * @param {string} s
 * @return {number}
 */
var calculate = function (s) {
  let res = 0;
  let num = 0;
  // 加减标记 1  -1
  let sign = 1;
  let stack = [];

  for (let i = 0; i < s.length; i++) {
    const c = s.charAt(i);
    if (c >= "0" && c <= "9") {
      num = num * 10 + c * 1;
      continue;
    }

    if (c === " ") continue;

    if (num) {
      res += sign * num;
      num = 0;
      sign = 1;
    }

    if (c === "+") {
      sign = 1;
    } else if (c === "-") {
      sign = -1;
    } else if (c === "(") {
      stack.push(res);
      stack.push(sign);
      res = 0;
      sign = 1;
    } else if (c === ")") {
      sign = stack.pop();
      prevRes = stack.pop();
      res = prevRes + sign * res;
      num = 0;
      sign = 1;
    }
  }

  return res + sign * num;
};

console.log(calculate("- (3 + (4 + 5))"));
