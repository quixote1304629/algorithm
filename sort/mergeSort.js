const { buildRandomArr } = require("./utils");

function insertionSort(arr, left, right) {
  for (let i = left + 1; i <= right; i++) {
    const curr = arr[i];
    let j = i - 1;
    while (j >= left && arr[j] > curr) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = curr;
  }
  return arr;
}

/** 归并排序
 * https://www.runoob.com/w3cnote/merge-sort.html
 */
function mergeSort(arr = []) {
  function merge(left, mid, right) {
    const temp = arr.slice(left, right + 1);
    // temp[] 中间索引
    const mid2 = mid - left
    // temp[] 最右索引
    const right2 = right - left
    let i = 0;
    let j = mid2 + 1;
    //  原数组arr索引
    let k = left;
    while (i <= mid2 && j <= right2) {
      if (temp[i] <= temp[j]) {
        arr[k] = temp[i];
        i++;
        k++;
      } else {
        arr[k] = temp[j];
        j++;
        k++;
      }
    }
    while (i <= mid2) {
      arr[k] = temp[i];
      i++;
      k++;
    }
    while (j <= right2) {
      arr[k] = temp[j];
      j++;
      k++;
    }
  }

  function sort(left, right) {
    // 或者 if(right===left) return
    if (right - left < 10) {
      // 小于10 用插入排序
      insertionSort(arr, left, right);
      return;
    }

    const mid = (left + right) >> 1;
    sort(left, mid);
    sort(mid + 1, right);

    merge(left, mid, right);
  }

  sort(0, arr.length - 1);

  return arr;
}

const arr = buildRandomArr(10000000);
console.time("mergeSort");
mergeSort(arr);
console.timeEnd("mergeSort");
// console.log(arr);
