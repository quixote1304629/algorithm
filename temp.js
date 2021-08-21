function dfs(str, list = [], result = []) {
  if (!str) {
    result.push(list);
  }

  for (let i = 0; i < 3 && i < str.length; i++) {
    const a = str.substr(0, i + 1);
    const b = str.substr(i + 1);
    const newList = [...list, a];
    dfs(b, newList, result);
  }
  return result;
}

const res = dfs("12345");
console.log(res);
