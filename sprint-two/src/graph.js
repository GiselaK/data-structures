

// ------------------------
// Instantiate a new graph
var Graph = function() {
  this.nodes = {};
};

// ------------------------
// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  var obj = {};
  obj.value = node;
  obj.edges = [];
  this.nodes[node] = obj;
};

// ------------------------
// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  if (this.nodes[node]){
    return true;
  }
  return false;
};

// ------------------------
// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  if(this.nodes[node]){
    delete this.nodes[node];
  }
};

// ------------------------
// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {

  for (var i=0; i<this.nodes[fromNode].edges.length; i++){
    if (this.nodes[fromNode].edges[i].value === toNode){
      return true;
    }
  }
  return false;
};

// ------------------------
// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  this.nodes[fromNode].edges.push(this.nodes[toNode]);
  this.nodes[toNode].edges.push(this.nodes[fromNode]);
};

// ------------------------
// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  for (var i = 0; i < this.nodes[fromNode].edges.length; i++){
    if(this.nodes[fromNode].edges[i].value === toNode){
      this.nodes[fromNode].edges.splice(i, 1);
    }
  }
  for (var i = 0; i < this.nodes[toNode].edges.length; i++) {
    if(this.nodes[toNode].edges[i].value === fromNode){
      this.nodes[toNode].edges.splice(i, 1);
    }
  };
};

// ------------------------
// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  for(var key in this.nodes){
    cb(this.nodes[key].value);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


