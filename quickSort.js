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

/**[需背诵] 最优 */
function quickSort3(arr) {
  function swap(arr, i, j) {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }

  function partition(arr, left, right) {
    // 随机数目的是为了稳定性
    const random = Math.floor(Math.random() * (right - left + 1)) + left;
    swap(arr, left, random);
    const pivot = arr[left];

    let j = left;
    for (let i = left + 1; i <= right; i++) {
      if (arr[i] < pivot) {
        j++;
        swap(arr, j, i);
      }
    }
    swap(arr, left, j);
    return j;
  }

  function loop(arr, left, right) {
    if (left < right) {
      const p = partition(arr, left, right);
      loop(arr, left, p - 1);
      loop(arr, p + 1, right);
    }
  }
  loop(arr, 0, arr.length - 1);
}

const arr = [];
const N = 10000000;
for (let i = 0; i < N; i++) {
  const num = Math.floor(Math.random() * N + 1);
  arr.push(num);
}

// console.time("quickSort");
// quickSort(arr);
// console.timeEnd("quickSort");

// console.time("quickSort2");
// quickSort2(arr);
// console.timeEnd("quickSort2");

console.time("quickSort3");
quickSort3(arr);
console.timeEnd("quickSort3");

// console.log(arr)
