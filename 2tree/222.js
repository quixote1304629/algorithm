var tree = {
  val: "*",
  left: {
    val: "a",
    left: {
      val: "c",
      left: {
        val: "d",
      },
      right: {
        val: "e",
      },
    },
    right: {
      val: "c",
      left: {
        val: "d",
      },
      right: {
        val: "e",
      },
    },
  },
  right: {
    val: "f",
    left: {
      val: "g",
    },
    right: {
      val: "h",
    },
  },
};

var countNodes = function (root) {
  if (!root) return 0;

  let deep = 0;
  let node = root;
  let node2 = root;
  while (node) {
    deep++;
    node = node.right;
    node2 = node.left;
  }
  if (!node2.left) {
    return 2 ** deep - 1;
  }

  let count = 0;
  let lastHasLeft = false;

  const find = (node, i) => {
    if (i === deep) {
      count++;

      if (!node.right) {
        lastHasLeft = !!node.left;
        return true;
      }
    } else {
      if (node.left) {
        const flag = find(node.left, i + 1);
        if (flag) return true;
      }
      if (node.right) {
        const flag = find(node.right, i + 1);
        if (flag) return true;
      }
    }
    return false;
  };

  find(root, 1);

  return 2 ** deep - 1 + 2 * count - (lastHasLeft ? 1 : 2);
};

const result = countNodes(tree);
console.log(result);
