/**
 * https://leetcode-cn.com/problems/merge-intervals/
 * 以数组 intervals 表示若干个区间的集合，其中单个区间为 intervals[i] = [starti, endi] 。
 * 请你合并所有重叠的区间，并返回一个不重叠的区间数组，该数组需恰好覆盖输入中的所有区间。
 */

/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  const end = intervals.length - 1;
  if (end < 1) return intervals;
  // 先按第一位位排序，首位相同则按第二位
  intervals.sort((a, b) => {
    if (a[0] > b[0]) {
      return 1;
    } else if (a[0] === b[0]) {
      return a[1] - b[1];
    } else {
      return -1;
    }
  });
  const result = [];
  let i = 0;
  while (i < end) {
    if (intervals[i + 1][0] > intervals[i][1]) {
      result.push(intervals[i]);
      i++;
    } else {
      const newItem = [
        intervals[i][0],
        Math.max(intervals[i][1], intervals[i + 1][1]),
      ];
      intervals[i + 1] = newItem;
      i++;
    }
  }
  result.push(intervals[end]);
  return result;
};

const data = [
  [1, 3],
  [2, 6],
  [10, 20],
  [4, 7],
  [1, 2],
  [30, 40],
];
const res = merge(data);
console.log(res);
