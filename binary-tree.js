var tree = {
  value: "*",
  left: {
    value: "a",
    left: {
      value: "b",
    },
    right: {
      value: "c",
      left: {
        value: "d",
      },
      right: {
        value: "e",
      },
    },
  },
  right: {
    value: "f",
    left: {
      value: "g",
      right: {
        value: "i",
      },
    },
    right: {
      value: "h",
    },
  },
};

function dfs(node, list = []) {
  if (!node) return;
  list.push(node.value);
  dfs(node.left, list);
  dfs(node.right, list);
  return list;
}

function bfs(node) {
  if (!node) return [];
  const list = [];
  const queue = [node];
  let i = 0;
  while (i < queue.length) {
    const cur = queue[i];
    list.push(cur.value);
    cur.left && queue.push(cur.left);
    cur.right && queue.push(cur.right);
    i++;
  }
  return list;
}
const result = bfs(tree);
console.log(result);
