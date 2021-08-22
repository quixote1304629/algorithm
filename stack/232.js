function Node(val) {
  this.val = val;
  this.prev = null;
  this.next = null;
}

/**
 * Initialize your data structure here.
 */
var MyQueue = function () {
  const node = new Node("*");
  node.prev = node;
  node.next = node;
  this.head = node;
  this.end = node;
};

/**
 * Push element x to the back of queue.
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function (x) {
  const newNode = new Node(x);
  const last = this.end.prev;
  last.next = newNode;
  newNode.prev = last;
  newNode.next = this.end;
  this.end.prev = newNode;
};

/**
 * Removes the element from in front of queue and returns that element.
 * @return {number}
 */
MyQueue.prototype.pop = function () {
  const isEmpty = this.empty();
  if (isEmpty) return null;
  const first = this.head.next;
  const sec = this.head.next.next;
  this.head.next = sec;
  sec.prev = this.head;
  return first.val;
};

/**
 * Get the front element.
 * @return {number}
 */
MyQueue.prototype.peek = function () {
  const isEmpty = this.empty();
  return isEmpty ? null : this.head.next.val;
};

/**
 * Returns whether the queue is empty.
 * @return {boolean}
 */
MyQueue.prototype.empty = function () {
  return this.head.next === this.end;
};

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
