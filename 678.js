/**
 * https://leetcode-cn.com/problems/valid-parenthesis-string/
 * 给定一个只包含三种字符的字符串：（ ，） 和 *，写一个函数来检验这个字符串是否为有效字符串。有效字符串具有如下规则
 * 任何左括号 ( 必须有相应的右括号 )。
 * 任何右括号 ) 必须有相应的左括号 ( 。
 * 左括号 ( 必须在对应的右括号之前 )。
 * "*" 可以被视为单个右括号 ) ，或单个左括号 ( ，或一个空字符串。
 * 一个空字符串也被视为有效字符串。
 */

/**
 * @param {string} s
 * @return {boolean}
 */
 var checkValidString = function (s) {
  const length = s.length;
  let a = 0;
  let b = 0;
  let c = 0;
  let a2 = 0;
  let b2 = 0;
  let c2 = 0;
  let i = 0;
  while (i < length) {
    const l = s.charAt(i);
    if (l === "(") {
      a++;
    } else if (l === ")") {
      b++;
    } else {
      c++;
    }
    if (a + c < b) return false;

    const r = s.charAt(length - 1 - i);
    if (r === ")") {
      a2++;
    } else if (r === "(") {
      b2++;
    } else {
      c2++;
    }
    if (a2 + c2 < b2) return false;
    i++;
  }
  return b + c >= a && b2 + c2 >= a2;
};