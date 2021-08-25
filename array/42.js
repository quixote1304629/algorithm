function calc(list, m, n) {
  if (n - m < 2) return 0;
  const h = Math.min(list[m], list[n]);
  if (!h) return 0;
  const v1 = h * (n - m - 1);
  let v2 = 0;
  for (let k = m + 1; k < n; k++) {
    v2 += Math.min(list[k], h);
  }
  return v1 - v2;
}

/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
  let result = 0;
  const end = height.length - 1;
  if (end < 2) return result;

  let left = 0;
  while (left <= end) {
    if (height[left]) break;
    left++;
  }
  let right = left + 1;
  let i = right;

  while (i <= end) {
    if (height[i] > height[left]) {
      result += calc(height, left, i);
      left = i;
      right = i + 1;
      i = right;
    } else {
      if (height[i] > height[right]) {
        right = i;
      }

      if (i === end) {
        result += calc(height, left, right);
        left = right;
        right = right + 1;
        i = right;
      } else {
        i++;
      }
    }
  }
  return result;
};

const res = trap([0, 1, 2, 0, 3, 0, 1, 2, 0, 0, 4, 2, 1, 2, 5, 0, 1, 2, 0, 2]);
console.log("res: ", res);

/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
  if (!height) return;
  let left = 0;
  let right = height.length - 1; //位置记录
  let maxLeft = 0;
  let maxRight = 0; //假设初始最大值
  let rain = 0;
  while (left < right) {
    if (height[left] < height[right]) {
      if (height[left] >= maxLeft) {
        maxLeft = height[left];
      } else {
        rain += maxLeft - height[left];
      }
      left++;
    } else {
      if (height[right] >= maxRight) {
        maxRight = height[right];
      } else {
        rain += maxRight - height[right];
      }
      right--;
    }
  }
  return rain;
};

var trap = function (height) {
  let ans = 0;
  let maxLeft = 0;
  let maxRight = 0;
  let i = 0;
  let j = height.length - 1;
  while (i < j) {
    if (height[i] < height[j]) {
      if (height[i] >= maxLeft) {
        maxLeft = height[i];
      } else {
        ans = ans + (maxLeft - height[i]);
      }
      i++;
    } else {
      if (height[j] >= maxRight) {
        maxRight = height[j];
      } else {
        ans = ans + (maxRight - height[j]);
      }
      j++;
    }
  }
  return ans;
};
