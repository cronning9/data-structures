'use strict';

const storage = Symbol('storage');

function Stack() {
  this[storage] = {};
  this.count = 0;
}

Stack.prototype.push = function(value) {
  this[storage][this.count] = value;
  this.count++;
};

Stack.prototype.pop = function() {
  let item = this.top();
  delete this.top();
  if (this.count > 0) this.count--;
  return item;
};

Stack.prototype.size = function() {
  return this.count;
};

Stack.prototype.top = function() {
  return this[storage][this.count - 1];
};

module.exports = Stack;