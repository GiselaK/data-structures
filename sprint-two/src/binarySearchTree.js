var BinarySearchTree = function(value) {
  var instance = Object.create(treeMethods);
  instance.value = value;
  instance.left = null;
  instance.right = null;
  return instance;
};

var treeMethods = {};

treeMethods.insert = function (value) {
  // recursively 
  var insertNode = BinarySearchTree(value);

  var testNode = function(node){
    // test if value is > or < node.value
    if (value < node.value){
      if (!node.left){
        node.left = insertNode;
      } else {
        testNode(node.left);
      }
    } else if (value > node.value){
      if (!node.right){
        node.right = insertNode;
      } else {
        testNode(node.right);
      }
    }

  };

  testNode(this);
};

treeMethods.contains = function (target) {
  var found = false;
  var checkNode = function (node){
    if(target === node.value){
      found = true;
      return;
    } else {
      if(target < node.value && node.left){
       checkNode(node.left);
      }
      else if (target > node.value && node.right){
        checkNode(node.right);
      } 
    }
  }
  checkNode(this);
  return found;
};

treeMethods.depthFirstLog = function (callback) {
  var runNode = function(node){
    callback(node.value);
    if (node.left) {
      runNode(node.left);
    }
    if (node.right) {
      runNode(node.right);
    }
  };
  runNode(this);
};
/*
 * Complexity: What is the time complexity of the above functions?
 */
