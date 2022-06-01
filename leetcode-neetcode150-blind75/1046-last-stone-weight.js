/**
 * Implement Heap
 */
function MinHeap() {
  this.arr = [];
}

/**
 * Insert a new element into the heap
 * @param {integer} item
 */
MinHeap.prototype.insert = function (item) {
  this.arr.push(item);

  // place the item in correct position
  // get indexes: curr and its parent
  let curr = this.arr.length - 1;
  let parent = Math.floor((curr - 1) / 2);

  // if the item is smaller than its parent, swap
  while (this.arr[curr] < this.arr[parent]) {
    [this.arr[curr], this.arr[parent]] = [this.arr[parent], this.arr[curr]]; // swap

    // reset parent and curr
    curr = parent;
    parent = Math.floor((curr - 1) / 2);
    if (parent < 0) break; // if already top element then stop
  }
};

/**
 * Remove the minimum element from the heap
 * @returns {integer}
 */
MinHeap.prototype.extract = function () {
  // swap the first and last element and pop the last element
  [this.arr[0], this.arr[this.arr.length - 1]] = [
    this.arr[this.arr.length - 1],
    this.arr[0],
  ];
  const minVal = this.arr.pop();

  // find the correct position
  let curr = 0;
  let left = curr * 2 + 1;
  let right = curr * 2 + 2;

  // calculate min of left and right
  // if arr[right] does not exist, then left is the min
  let min;
  if (right >= this.arr.length) {
    min = left;
  }
  // if arr[left] does not exist, then set null
  else if (left >= this.arr.length) {
    min = null;
  } else {
    min = this.arr[left] < this.arr[right] ? left : right;
  }

  // if the curr is greater than the min of child, swap
  while (this.arr[curr] > this.arr[min] && this.arr[min] !== null) {
    [this.arr[curr], this.arr[min]] = [this.arr[min], this.arr[curr]];
    // reset curr and min
    curr = min;
    left = curr * 2 + 1;
    right = curr * 2 + 2;
    min = this.arr[left] < this.arr[right] ? left : right;
  }
  return minVal;
};

/**
 * Get size of the heap
 * @returns {integer}
 */
MinHeap.prototype.size = function () {
  return this.arr.length;
};

/**
 * Return the minimum element from the heap
 * @returns {integer}
 */
MinHeap.prototype.getMin = function () {
  return this.arr[0];
};

/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function (stones) {
  // get stones in a min heap
  // note: we are simulating max heap with min heap by
  // multiplying every val with -1

  const heap = new MinHeap();
  for (const stone of stones) {
    heap.insert(stone * -1);
  }

  while (heap.size() > 1) {
    const a = -1 * heap.extract();
    const b = -1 * heap.extract();

    const newStone = a - b;

    newStone !== 0 && heap.insert(-1 * newStone);
  }

  // console.log(heap.arr)
  return heap.size() > 0 ? -1 * heap.arr[0] : 0;
};
