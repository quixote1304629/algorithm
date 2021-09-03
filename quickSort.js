const arr = [];
const N = 20000000;
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
  function partition(left, right) {
    const pivot = arr[left];
    while (left < right) {
      while (arr[right] >= pivot && left < right) {
        right--;
      }
      // if(left >= right) break
      [arr[left], arr[right]] = [arr[right], arr[left]];

      while (arr[left] <= pivot && left < right) {
        left++;
      }
      // if(left >= right) break
      [arr[left], arr[right]] = [arr[right], arr[left]];
    }
    return left;
  }

  function loop(left, right) {
    if (left < right) {
      const par = partition(left, right);
      loop(left, par - 1);
      loop(par + 1, right);
    }
  }

  loop(0, arr.length - 1);

  return arr;
}

var quickSort3 = function (arr, l, r) {
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
  quickSort3(arr, l, i - 1);
  quickSort3(arr, i + 1, r);
};

// console.time("quickSort");
// quickSort(arr);
// console.timeEnd("quickSort");

// 数据量大时，这个快一点
console.time("quickSort2");
quickSort2(arr);
console.timeEnd("quickSort2");

// console.time("quickSort3");
// quickSort3(arr, 0, arr.length-1);
// console.timeEnd("quickSort3");
