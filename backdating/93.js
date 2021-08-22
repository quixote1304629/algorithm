/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function (s) {
  const length = s.length;
  if (length < 4) return [];
  // const result = [];

  function isRight(str) {
    if (str * 1 > 255) return false;
    if (str.length > 1 && str.charAt(0) === "0") return false;
    return true;
  }

  function dfs(str, len = 0, sub = "", result = []) {
    if (len === 4) {
      if (!str) {
        result.push(sub);
      }
      return result;
    }

    for (let i = 0; i < 3 && i < str.length; i++) {
      const a = str.substr(0, i + 1);
      const b = str.substr(i + 1);
      if (!isRight(a)) {
        continue;
      }
      const newSub = sub ? sub + "." + a : a;
      dfs(b, len + 1, newSub, result);
    }
    return result;
  }

  return dfs(s);
};

const res = restoreIpAddresses("12310321");
console.log(res);
