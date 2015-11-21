var Tree = function (value) {
  var newTree = {};
  newTree.value = value;
  newTree.children = [];
  _.extend(newTree, treeMethods);
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function (value) {
  var tree = Tree(value);
  this.children.push(tree);
  tree.children = []; 
  return tree;
};

treeMethods.contains = function (target) {
  var wasFound = false;
  var checkChildren = function (node) {
    if (node.value === target) {
      wasFound = true;
      return;
    } 
    for (var i = 0; i < node.children.length; i++) {
        checkChildren(node.children[i]);
    }
  };
  checkChildren(this);
  return wasFound;
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
