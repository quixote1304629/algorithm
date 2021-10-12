/** 根据节点id找到，返回其节点对象 */
function findNodeById(treeList, id) {
  function dfs(list) {
    for (let i = 0; i < list.length; i++) {
      const curr = list[i];
      if (curr.id === id) return curr;
      if (curr.children && curr.children.length) {
        const node = dfs(curr.children);
        if (node) return node;
      }
    }
    return null;
  }
  return dfs(treeList);
}

/** 找到给定节点的所用子节点id,返回所有的子节点id数组 */
// function findAllChildIdsByNode(node) {
//   const result = [];
//   if (!node.children || !node.children.length) return result;
//   const queue = [...node.children];
//   let i = 0;
//   while (i < queue.length) {
//     const curr = queue[i];
//     result.push(curr.id);
//     if (curr.children && curr.children.length) {
//       queue.splice(queue.length, 0, ...curr.children);
//     }
//     i++;
//   }
//   return result;
// }

/** 找到给定节点的所用子节点id,返回所有的子节点id数组 */
function findAllChildIdsByNode(node) {
  const result = [];
  function dfs(list) {
    if (!list || !list.length) return;
    for (let i = 0; i < list.length; i++) {
      const curr = list[i];
      result.push(curr.id);
      dfs(curr.children);
    }
  }
  dfs(node.children);
  return result;
}

/** 找到给定节点id的所用子节点id,返回所有的子节点id数组 */
function findAllChildIdsByParentId(treeList, parentId) {
  const parentNode = findNodeById(treeList, parentId);
  if (!parentNode) return [];
  const result = findAllChildIdsByNode(parentNode);
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
          {
            id: "111",
            name: "test111",
            children: [
              { id: "1111", name: "test1111" },
              { id: "1112", name: "test1112" },
            ],
          },
          {
            id: "112",
            name: "test112",
            children: [
              { id: "1121", name: "test1121" },
              { id: "1122", name: "test1122" },
            ],
          },
        ],
      },
      {
        id: "12",
        name: "test12",
        children: [
          {
            id: "121",
            name: "test121",
            children: [
              { id: "1211", name: "test1211" },
              { id: "1212", name: "test1212" },
            ],
          },
          {
            id: "122",
            name: "test122",
            children: [
              { id: "1221", name: "1221" },
              { id: "1222", name: "1222" },
            ],
          },
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

const res = findAllChildIdsByParentId(data, "12");
console.log(res);
