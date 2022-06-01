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

  // find the correct position for the new root
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

// create a function that takes in an array and tests if it is a min heap
function Test(arr) {
  let minHeap = new MinHeap();
  for (let i = 0; i < arr.length; i++) {
    minHeap.insert(arr[i]);
  }
  // extract and store values in a new array
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(minHeap.extract());
  }
  // sort the original array
  arr.sort((a, b) => a - b);
  // compare the new array with the original array
  if (newArr.length !== arr.length) {
    return false;
  }
  for (let i = 0; i < newArr.length; i++) {
    if (newArr[i] !== arr[i]) {
      return false;
    }
  }
  return true;
}

// Test cases
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const arr2 = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
const arr3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// random array with negative numbers, duplicates, and empty array
const arr4 = [31, -1, 3, -5, 99, 1002, -5, -1111, 200, 0, 0, 0, 23];
const arr5 = [31, -1, 3, -5, null, 99, 1002, -5, -1111, 200, null, 0, 0, 0, 23];

// test all the cases
console.log(Test(arr));
console.log(Test(arr2));
console.log(Test(arr3));
console.log(Test(arr4));
