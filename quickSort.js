const arr = [];
const N = 10000000;
for (let i = 0; i < N; i++) {
  const num = Math.floor(Math.random() * N + 1);
  arr.push(num);
}

var quickSort = function (arr) {
  if (arr.length < 1) return arr;
  const pivotIndex = arr.length >> 1;
  const pivot = arr.splice(pivotIndex, 1);
  const left = [];
  const right = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return quickSort(left).concat([pivot], quickSort(right));
};

/** 更快一点 */
function quickSort2(arr) {
  function run(arr, left, right) {
    if (left < right) {
      let par = partition(arr, left, right);
      run(arr, left, par - 1);
      run(arr, par + 1, right);
    }
    return arr;
  }
  function partition(arr, left, right) {
    let par = arr[left];
    while (left < right) {
      while (arr[right] >= par && left < right) {
        right--;
      }
      [arr[left], arr[right]] = [arr[right], arr[left]];
      // console.log(arr.join(), left, right, "----");
      while (arr[left] <= par && left < right) {
        left++;
      }
      [arr[left], arr[right]] = [arr[right], arr[left]];
      // console.log(arr.join(), left, right);
    }
    return left;
  }
  let length = arr.length;
  return run(arr, 0, length - 1);
}

var quick_sort = function (arr, l, r) {
  if (l >= r) {
    return;
  }
  var i = l,
    j = r;
  while (i < j) {
    while (i < j && arr[l] <= arr[j]) j--;
    while (i < j && arr[l] >= arr[i]) i++;
    var t = arr[i];
    arr[i] = arr[j];
    arr[j] = t;
  }
  var temp = arr[i];
  arr[i] = arr[l];
  arr[l] = temp;
  quick_sort(arr, l, i - 1);
  quick_sort(arr, i + 1, r);
};

// console.time("quickSort");
// quickSort(arr);
// console.timeEnd("quickSort");

// 数据量大时，这个快一点
console.time("quickSort2");
quickSort2(arr);
console.timeEnd("quickSort2");

// console.time("quick_sort");
// quick_sort(arr, 0, arr.length-1);
// console.timeEnd("quick_sort");
