const arr = [];
const N = 1000000;
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
console.time("aaaaa");
quickSort(arr);
console.timeEnd("aaaaa");
