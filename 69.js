var mySqrt = function (x) {
  let l = 0;
  let r = x >= 4 ? Math.ceil(x / 2) : x;
  while (l <= r) {
    const m = (l + r) >> 1;
    const p = Math.pow(m, 2);
    if (p === x) {
      return m;
    } else if (p > x) {
      r = m;
    } else {
      const p2 = Math.pow(m + 1, 2);
      if (p2 > x) {
        return m;
      } else if (p2 === x) {
        return m + 1;
      } else {
        l = m;
      }
    }
  }
};