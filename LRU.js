function LNode(key, value) {
  this.prev = null;
  this.next = null;
  this.key = key;
  this.value = value;
}

/**
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
  this.cache = new Map();
  this.head = null;
  this.tail = null;
  this.length = capacity;
};

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
  const curr = this.cache.get(key);

  if (curr && curr != this.tail) {
    if (curr === this.head) {
      const sec = curr.next;
      sec.prev = null;
      this.head = sec;
    } else {
      curr.prev.next = curr.next;
      curr.next.prev = curr.prev;
    }
    curr.next = null;
    curr.prev = this.tail;
    this.tail.next = curr;
    this.tail = curr;
  }

  return curr ? curr.value : -1;
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
  if (this.length <= 0) return;
  let oldNode = null;
  if (this.cache.has(key)) {
    oldNode = this.cache.get(key);
  }
  const newNode = new LNode(key, value);
  if (!this.cache.size) {
    this.cache.set(key, newNode);
    this.head = newNode;
    this.tail = newNode;
    // printMap(this.cache);
    return;
  }
  this.cache.set(key, newNode);

  newNode.prev = this.tail;
  this.tail.next = newNode;
  this.tail = newNode;

  if (oldNode) {
    if (oldNode === this.head) {
      const sec = this.head.next;
      sec.prev = null;
      this.head = sec;
    } else {
      oldNode.prev.next = oldNode.next;
      oldNode.next.prev = oldNode.prev;
    }
  } else if (this.cache.size > this.length) {
    this.cache.delete(this.head.key);
    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
    } else {
      const sec = this.head.next;
      sec.prev = null;
      this.head = sec;
    }
  }
  // printMap(this.cache);
};

function printMap(map) {
  let s = "";
  map.forEach(function (value, key) {
    s += value.value;
    s += ",";
  });
  console.log(s);
}
