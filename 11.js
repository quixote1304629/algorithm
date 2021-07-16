/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let ans = 0;
  const backup = new Set();
  const end = height.length - 1;
  for (let i = 0; i < height.length; i++) {
    const val = height[i];

    const flag = backup.has(val);
    if (flag) continue;

    const left = findLeft(height, i, val);
    const right = findRight(height, end, i, val);
    if (left !== right) {
      const volume = (right - left) * val;
      backup.add(val);
      ans = Math.max(ans, volume);
    }
  }
  return ans;
};

function findLeft(list, i, val) {
  let j = 0;
  while (j < i) {
    if (list[j] >= val) {
      return j;
    }
    j++;
  }
  return j;
}

function findRight(list, end, i, val) {
  let j = end;
  while (j > i) {
    if (list[j] >= val) {
      return j;
    }
    j--;
  }
  return j;
}

var maxArea = function (height) {
  let ans = 0;
  let i = 0;
  let j = height.length - 1;
  while (i < j) {
    if (height[i] < height[j]) {
      ans = Math.max(ans, (j - i) * height[i++]);
    } else {
      ans = Math.max(ans, (j - i) * height[j--]);
    }
  }
  return ans;
};
