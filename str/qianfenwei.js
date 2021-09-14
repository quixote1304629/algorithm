function qianfenwei(num) {
  const splitArr = new String(num).split(".");
  const intPart = splitArr[0];

  let arr = [];

  let i = intPart.length - 3;
  while (i >= 0) {
    arr.unshift(intPart.slice(i, i + 3));
    i -= 3;
  }
  if (i < 0 && i > -3) {
    arr.unshift(intPart.slice(0, i + 3));
  }

  let result = arr.join(",");

  if (splitArr[1]) {
    result += "." + splitArr[1];
  }

  return result;
}

function numFormat(num) {
  var res = num.toString().replace(/\d+/, function (n) {
    // 先提取整数部分
    return n.replace(/(\d)(?=(\d{3})+$)/g, function ($1) {
      console.log($1)
      return $1 + ",";
    });
  });
  return res;
}

12345678.2569.toLocaleString()

const res = numFormat(12345678.2569);
console.log(res);
