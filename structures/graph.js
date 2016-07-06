// an abstracted implementation of a graph data structure.
// May attempt to write a visual representation of this later.

function Graph(){
  this.nodes = [];
  this.edges = [];
};

Graph.prototype.addNode = function(node){
  this.nodes.push(node);
};


Graph.prototype.contains = function(value){
  for (var node of this.nodes) {
    if (node === value) return true;
  }
  return false;
};

Graph.prototype.removeNode = function(node){
  for (var i = 0; i < this.nodes.length; i++) {
    if (this.nodes[i] === node) this.nodes.splice(i, 1);
  }
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode){
  for (var edge of this.edges) {
    if ((edge[0] === fromNode && edge[1] === toNode) || 
        (edge[0] === toNode && edge[1] === fromNode)) {
      return true;
    }
  }
  return false;
};

Graph.prototype.addEdge = function(fromNode, toNode){
  this.edges.push([fromNode, toNode]);
};

// ------------------------
// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode){
  var i = 0;
  this.edges.forEach(edge => {
    if (edge.includes(fromNode) && edge.includes(toNode)) {
      this.edges.splice(i, 1);
    }
    i++;
  });
};


Graph.prototype.forEachNode = function(callback){
  this.nodes.forEach(node => {
    callback(node);
  });
};



module.exports = Graph;