'use strict';

function Tree(value) {
  this.value = value || null; 
  this.children = [];
};

Tree.prototype.addChild = function(value) {
  var node = new Tree(value);
  this.children.push(node);
};

Tree.prototype.contains = function(value) {
  if (this.value === value) return true;
  
  var containsValue = false;

  var searchChildren = topNode => {
    topNode.children.forEach(node => {
      node.value === value ? containsValue = true : searchChildren(node);
    });
    return containsValue;
  }; 
  
  return searchChildren(this);
  
};

module.exports = Tree;