const { buildRandomArr } = require("./utils");


function insertionSort(arr) {
  const length = arr.length;
  for (let i = 1; i < length; i++) {
    const curr = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > curr) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = curr;
  }
  return arr;
}

// const arr = buildRandomArr(10000);
// console.time("insertionSort");
// insertionSort(arr);
// console.timeEnd("insertionSort");


module.exports = {
  insertionSort: insertionSort,
};