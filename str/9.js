/** https://leetcode-cn.com/problems/palindrome-number/
 * 给你一个整数 x ，如果 x 是一个回文整数，返回 true ；否则，返回 false
 */


var isPalindrome = function (x) {
  const str = String(x);
  let i = 0;
  let j = str.length - 1;
  while (i < j) {
    const left = str.charAt(i);
    const right = str.charAt(j);
    if (left !== right) return false;
    i++;
    j--;
  }
  return true;
};