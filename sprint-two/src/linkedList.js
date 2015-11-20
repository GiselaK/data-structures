var LinkedList = function() { // Linked List class
  var list = {}; // instance of LinkedList Class
  list.head = null; // instance property head equals null
  list.tail = null; // instance property head equals null

  list.addToTail = function(value) {
    var node = Node(value);
    if(!list.tail){
        // 1. empty list 
      list.head = node;
      list.tail = node;      
    } else{
        // 2. populated list
      this.tail.next = node;
      this.tail = node;      
    }
  };

  list.removeHead = function() {
    if (!list.head){
      return;
    }
    var value = list.head.value;
    if(!list.head.next && list.head){
      list.head = null
      list.tail = null;
    } else {
      list.head = list.head.next;  
    }
    return value;
  };

  list.contains = function(target) {
    var checkNode = function  (node) {
      if(node.value === target){
        return true;
      }
      else if(!node.next){
        return false;
      }
      else {
        return checkNode(node.next);
      }
    }
    return checkNode(list.head);
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
