/**
 * https://leetcode-cn.com/problems/count-primes/submissions/
 * 统计所有小于非负整数 n 的质数的数量。
 */
var countPrimes = function (n) {
  if (n <= 2) return 0;
  const list = new Array(n).fill(true);
  for (let i = 2; i * i < n; i++) {
    if (!list[i]) continue;
    for (let j = i * i; j < n; j += i) {
      list[j] = false;
    }
  }
  let count = 0;
  for (let k = 2; k < n; k++) {
    if (list[k]) count++;
  }
  return count;
};

/**
 * 找出所有小于非负整数 n 的质数。
 */
var find = function (n) {
  if (n <= 2) return [];
  const list = [2];
  let i = 3;
  while (i < n) {
    let flag = true;
    let j = 0;
    while (j <= list.length) {
      const yu = i % list[j];
      if (yu === 0) {
        flag = false;
        break;
      }
      j++;
    }

    if (flag) {
      list.push(i);
    }

    i++;
  }
  return list;
};

const n = 100;
const res = find(n);
console.log(res);
