var MinStack = function () {
  this.stack = [];
  this.minArr = [];
};

/**
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function (val) {
  this.stack.push(val);

  // update minArr
  if (this.minArr.length === 0) this.minArr.push(val);
  else if (val <= this.minArr[this.minArr.length - 1]) this.minArr.push(val);
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  const val = this.stack.pop();

  // update minArr
  if (val === this.minArr[this.minArr.length - 1]) {
    this.minArr.pop();
  }
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  return this.stack[this.stack.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
  return this.minArr[this.minArr.length - 1];
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
