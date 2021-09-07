const str = "123abd3-adfz-34-akjkfaf";

function isLetter(c = "") {
  const asc = c.codePointAt();
  return (asc >= 65 && asc <= 90) || (asc >= 97 && asc <= 122);
}

/**
 * 翻转不包含字母的字符串
 * 输入: "123abd3-adfz-34-akjkfaf"
 * 输入: "321abd-3adfz-43-akjkfaf"
 * @param {*} str
 */
function reverseStr(str = "") {
  let ans = "";
  let i = 0;
  let j = 1;
  // i位置的字母是否是字母
  let flag = isLetter(str.charAt(i));
  while (j < str.length) {
    const isCurrLetter = isLetter(str.charAt(j));
    if (isCurrLetter === flag) {
      j++;
    } else {
      if (flag) {
        ans += str.slice(i, j);
      } else {
        ans += str.slice(i, j).split("").reverse().join("");
      }

      i = j;
      flag = isCurrLetter;
      j++;
    }
  }

  if (flag) {
    ans += str.slice(i, j);
  } else {
    ans += str.slice(i, j).split("").reverse().join("");
  }

  return ans;
}

const result = reverseStr("123abd3-adfz-34-akjkfaf54f");
console.log(result);
