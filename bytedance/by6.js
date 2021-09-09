var obj = {
  2: 3,
  3: 4,
  length: 2,
  splice: Array.prototype.splice,
  push: Array.prototype.push,
};

obj.push(1);
obj.push(2);
console.log(obj);

// [,,1,2]

/**
 * 伪数组ArrayLike
 * https://www.kancloud.cn/q85727/lyul/230723
 * https://segmentfault.com/a/1190000015285969
 */
