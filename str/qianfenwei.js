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

/** 重点 */
function qianfenwei2(num) {
  const str = num.toString();
  const dotIndex = str.indexOf(".");
  const intLength = dotIndex > 0 ? dotIndex : str.length;
  // 从整数部分中分割出的字符串数组
  const arr = [];
  // 逗号起点
  const commaStart = intLength % 3;

  if (commaStart > 0) {
    arr.push(str.slice(0, commaStart));
  }

  for (let i = commaStart; i < intLength; i += 3) {
    arr.push(str.slice(i, i + 3));
  }

  return arr.join(",") + str.slice(intLength);
}

/** 重点 */
function numFormat(num) {
  var res = num.toString().replace(/\d+/, function (n) {
    // 先提取整数部分 (?=x) 含义: 以x结尾
    // return n.replace(/(\d)(?=(\d{3})+$)/g, '$1,');

    return n.replace(/(\d)(?=(\d{3})+$)/g, function ($1) {
      console.log($1);
      return $1 + ",";
    });
  });
  return res;
}

function numFormat2(num) {
  const splitArr = num.toString().split(".");
  const intPart = splitArr[0];
  const intFmt = intPart.replace(/(\d)(?=(\d{3})+$)/g, "$1,");
  if(splitArr.length > 1) {
    return intFmt + '.' + splitArr[1]
  } else {
    return intFmt
  }
}

(12345678.2569).toLocaleString();

const res = numFormat2(12.2569);
console.log(res);
