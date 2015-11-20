var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  // your code here
  newTree.children = [];  // fix me
  _.extend(newTree, treeMethods);

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  // your code here
  var tree = Tree(value);
  this.children.push(tree);
  tree.children = [];  // fix me
  return tree;
};

treeMethods.contains = function(target) {
  var wasFound = false;
  var checkChildren = function(node){
    if(node.value === target){
      wasFound = true;
      return;
    } 
    for (var i = 0; i<node.children.length; i++){
        checkChildren(node.children[i]);
    }
  };
  checkChildren(this);
  return wasFound;
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
