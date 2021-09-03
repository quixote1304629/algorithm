function quickSort3(arr) {
  function swap(arr, i, j) {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }

  function partition(arr, left, right) {
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
const N = 300000;
for (let i = 0; i < N; i++) {
  const num = Math.floor(Math.random() * N + 1);
  arr.push(num);
}

console.time("quickSort3");
quickSort3(arr);
console.timeEnd("quickSort3");
