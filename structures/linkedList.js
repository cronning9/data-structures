function LinkedList() {
  this.head = null;
  this.tail = null;
}

LinkedList.prototype.addToTail = function(value) {
  var node = Node(value);

  if (!this.head) {
    this.head = node;
  }
  if (this.tail) {
    this.tail.next = node;
  }
  this.tail = node;
};

LinkedList.prototype.removeHead = function() {
  var prevHead = this.head;
  this.head = prevHead.next;
  return prevHead.value;
};

LinkedList.prototype.contains = function(value) {
  var curNode = this.head;
  while (curNode !== null) {
    if (curNode.value === value) {
      return true;
    }
    curNode = curNode.next;
  }
  
  return false;
};

function Node(value) {
  var instance = {
    value: value,
    next: null
  }
  return instance;
}

module.exports = LinkedList;