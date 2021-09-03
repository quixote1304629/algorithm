function insertionSort(nums, start, end) {
  for (let i = start + 1; i <= end; ++i) {
    let j = i,
      pivot = nums[j];
    while (j > start && nums[j - 1] > pivot) {
      nums[j] = nums[j - 1];
      --j;
    }
    if (j !== i) {
      nums[j] = pivot;
    }
  }
  return nums;
}
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function (nums) {
  const n = nums.length;
  if (n <= 1) return nums;
  let minValue = nums[0],
    maxValue = nums[0];
  for (let i = 0; i < n; ++i) {
    minValue = nums[i] < minValue ? nums[i] : minValue;
    maxValue = nums[i] > maxValue ? nums[i] : maxValue;
  }
  const m = maxValue - minValue + 1;
  if (m > n && n < 1000) {
    return insertionSort(nums, 0, n - 1);
  }
  const buckets = Array(m).fill(0);
  for (let i = 0; i < n; ++i) {
    buckets[nums[i] - minValue] += 1;
  }
  let k = 0;
  for (let i = 0; i < m && k < n; ++i) {
    for (let j = 0; j < buckets[i]; ++j) {
      nums[k++] = i + minValue;
    }
  }
  return nums;
};

const arr = [];
const N = 10000000;
for (let i = 0; i < N; i++) {
  const num = Math.floor(Math.random() * N + 1);
  arr.push(num);
}

console.time("quickSort");
const res = quickSort(arr);
console.log(res);
console.timeEnd("quickSort");

// console.time("sortArray");
// const res = sortArray(arr);
// console.log(res);
// console.timeEnd("sortArray");
