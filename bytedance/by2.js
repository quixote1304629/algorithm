/**
 * 请把两个数组 ['A1', 'A2', 'B1', 'B2', 'C1', 'C2', 'D1', 'D2'] 和 ['A', 'B', 'C', 'D'],
 * 合并 为 ['A1', 'A2', 'A', 'B1', 'B2', 'B', 'C1', 'C2', 'C', 'D1', 'D2', 'D']
 */

function concatArr(arr1 = [], arr2 = []) {
  const result = [];
  const end1 = arr1.length - 1;
  const end2 = arr2.length - 1;
  let i = 0;
  let j = 0;
  while (i <= end1 && j <= end2) {
    if (arr1[i].includes(arr2[j])) {
      result.push(arr1[i]);
      i++;
    } else {
      result.push(arr2[j]);
      result.push(arr1[i]);
      j++;
      i++;
    }
  }

  while (i <= end1) {
    result.push(arr1[i]);
    i++;
  }

  while (j <= end2) {
    result.push(arr2[j]);
    j++;
  }

  return result;
}

const data1 = ["A1", "A2", "B1", "B2", "C1", "C2", "D1", "D2"];
const data2 = ["A", "B", "C", "D"];

const res = concatArr(data1, data2);
console.log(res);
