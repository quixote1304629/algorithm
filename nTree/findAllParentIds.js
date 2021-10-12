
/** 在树型列表中找到所有的父级id */
function findAllParentIds(treeList, targetId) {
  const result = [];

  // reture 是否找到
  function dfs(nodes) {
    for (let i = 0; i < nodes.length; i++) {
      const curr = nodes[i];
      if (curr.id === targetId) {
        result.push(curr.id);
        return true;
      } else {
        if (curr.children && curr.children.length) {
          result.push(curr.id);
          const flag = dfs(curr.children);
          if (flag) return true;
          result.pop();
        }
      }
    }
    return false;
  }

  dfs(treeList);

  return result;
}

const data = [
  {
    id: "1",
    name: "test1",
    children: [
      {
        id: "11",
        name: "test11",
        children: [
          { id: "111", name: "test111" },
          { id: "112", name: "test112" },
        ],
      },
      {
        id: "12",
        name: "test12",
        children: [
          { id: "121", name: "test121" },
          { id: "122", name: "test122" },
        ],
      },
    ],
  },

  {
    id: "2",
    name: "test1",
    children: [
      {
        id: "21",
        name: "test11",
        children: [
          { id: "211", name: "test111" },
          { id: "212", name: "test112" },
        ],
      },
      {
        id: "22",
        name: "test12",
        children: [
          { id: "221", name: "test121" },
          { id: "222", name: "test122" },
        ],
      },
    ],
  },
];

const find = (value) => {
  let result = [];
  let findArr = data;
  let skey = "";
  for (let i = 0, l = value.length; i < l; i++) {
    skey += value[i];
    let item = findArr.find((item) => {
      return item.id == skey;
    });
    if (!item) {
      return [];
    }
    result.push(item.id);
    if (item.children) {
      findArr = item.children;
    } else {
      if (i < l - 1) return [];
      return result;
    }
  }
};

const res = findAllParentIds(data, "212");
console.log(res);
