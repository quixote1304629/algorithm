function dfs(str, list = [], result = []) {
  if (list.length === 4) {
    if (!str) {
      result.push(list);
    }
    return result;
  }

  for (let i = 0; i < 3 && i < str.length; i++) {
    const a = str.substr(0, i + 1);
    const b = str.substr(i + 1);
    if (a.charAt(0) === "0" || a * 1 > 255) {
      continue;
    }
    const newList = [...list, a];
    dfs(b, newList, result);
  }
  return result;
}

const res = dfs("122027215");
console.log(res);
