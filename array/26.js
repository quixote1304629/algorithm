/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let prev = nums[0];
  let i = 1;
  while (i < nums.length) {
    const curr = nums[i];
    if (curr === prev) {
      nums.splice(i, 1);
    } else {
      prev = curr;
      i++;
    }
  }
  return nums.length;
};


const list = [0,0,1,1,1,2,2,3,3,4]
var removeDuplicates = function(nums) {
  let count = 1;
  for(let i = 1; i < nums.length; i++) {
      if(nums[i] !== nums[i - 1]) {
          nums[count++] = nums[i]
      }
  }
  return count;
};
removeDuplicates(list)
console.log(list)