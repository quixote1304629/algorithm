function twoSum(numbers, target) {
  // write code here
  // 创建一个字典，用于存放数组中未配对成功的元素，类似于登记
  const dict = new WeakMap();
  // 遍历数组元素
  const arrLength = numbers.length;
  for (let i = 0; i < arrLength; i++) {
    let match = target - numbers[i];
    if (dict.has(match)) {
      return [dict.get(match) + 1, i + 1];
    }
    dict.set(numbers[i], i);
  }
}

const data = [5, 75, 25];
const res = twoSum(data, 100);
console.log(res);
