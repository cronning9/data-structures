function BinarySearchTree(value) {
  this.value = value;
  // left child must be less than this.value
  // right child must be greater than this.value
  this.left = null;
  this.right = null;
};

BinarySearchTree.prototype.insert = function(value) {
  if (value < this.value) {
    !this.left ? this.left = new BinarySearchTree(value) : this.left.insert(value); 
  } else if (value > this.value) {
    !this.right ? this.right = new BinarySearchTree(value) : this.right.insert(value);
  }
};

BinarySearchTree.prototype.contains = function(value) {
  if (this.value === value) {
    return true;
  } else if (value < this.value) {
    return scanChildren(this.left, value);
  } else if (value > this.value) {
    return scanChildren(this.right, value);
  }
  return false;
};

BinarySearchTree.prototype.depthFirstLog = function(callback) {
  callback(this.value);
  
  if (this.left) {
    this.left.depthFirstLog(callback);
  }
  if (this.right) {
    this.right.depthFirstLog(callback);
  }
};

// -- Helper function --> compares childrens' values in .contains
const scanChildren = (node, value) => {
  if (!node || !node.value) {
    return false;
  } else if (node.value === value) {
    return true;
  } else {
    return node.contains(value);
  }
};

module.exports = BinarySearchTree;