/**
 * 首先函数声明比变量要高，其次 b = 20 没有 var 获取其他，说明是 window 最 外层定义的变量。
 *  js 作用域中，先找最近的 那就是 b fn ，直接打印了，如果 b = 20 有 var 那就 是打印 20
 */

var b = 10;
(function b() {
  b = 20;
  console.log(b);
})();

// b(){ b = 20; console.log(b); }
