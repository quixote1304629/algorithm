/**
 * @param {number} capacity
 */
 var LRUCache = function(capacity) {
  this.size = capacity
  this.map = new Map()
};

/** 
* @param {number} key
* @return {number}
*/
LRUCache.prototype.get = function(key) {
  if (this.map.has(key)) {
      const temp = this.map.get(key)
      this.map.delete(key)
      this.map.set(key, temp)
      return this.map.get(key)
  }

  return -1
};

/** 
* @param {number} key 
* @param {number} value
* @return {void}
*/
LRUCache.prototype.put = function(key, value) {
  if (this.map.has(key)) {
      this.map.delete(key)
  }

  if (this.map.size >= this.size) {
      this.map.delete(this.map.keys().next().value)
  }
  this.map.set(key, value)
};

function printMap(map) {
  let s = "";
  map.forEach(function (value, key) {
    s += value.value;
    s += ",";
  });
  console.log(s);
}
