/**
 * https://leetcode-cn.com/problems/fibonacci-number/
 * 斐波那契数，通常用 F(n) 表示，形成的序列称为 斐波那契数列 。该数列由 0 和 1 开始，后面的每一项数字都是前面两项数字的和.
 */

/**
 * @param {number} n
 * @return {number}
 */
var fib = function (n) {
  if (n < 2) return n;
  let a = 0;
  let b = 1;
  let i = 1;
  while (i < n) {
    const temp = b;
    b = a + b;
    a = temp;
    i++;
  }
  return b;
};

const res = fib(6);
console.log(res);

var fib = function (n) {
  if (n < 2) return n;
  return fib(n - 1) + fib(n - 2);
};

var fib = function (n, r1 = 0, r2 = 1) {
  if (n === 0) return r1;
  if (n === 1) return r2;
  return fib(n - 1, r2, r1 + r2);
};
