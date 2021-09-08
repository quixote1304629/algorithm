/**
 * https://leetcode-cn.com/problems/min-stack/
 * 设计一个支持 push ，pop ，top 操作，并能在常数时间内检索到最小元素的栈。
 * push(x) —— 将元素 x 推入栈中。
 * pop() —— 删除栈顶的元素。
 * top() —— 获取栈顶元素。
 * getMin() —— 检索栈中的最小元素。
 */

/**
 * initialize your data structure here.
 */
var MinStack = function () {
  this.list = [];
  this.minList = [];
};

/**
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function (val) {
  this.list.push(val);
  const minLength = this.minList.length;
  if (!minLength || val <= this.minList[minLength - 1]) {
    this.minList.push(val);
  }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  const last = this.list.pop();
  const minLength = this.minList.length;
  if (last === this.minList[minLength - 1]) {
    this.minList.pop();
  }
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  const length = this.list.length;
  return this.list[length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
  const minLength = this.minList.length;
  return this.minList[minLength - 1];
};
